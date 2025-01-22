"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { doc, getDoc, updateDoc } from "firebase/firestore"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useCart } from "@/components/cart-provider"
import { db } from "@/lib/firebaes"

interface OrderDetails {
  items: Array<{
    id: string
    title: string
    price: number
    quantity: number
  }>
  shipping: {
    fullName: string
    address: string
  }
  subtotal: number
  shippingCost: number
  total: number
}

export function BillingSummary() {
  const router = useRouter()
  const { clearCart } = useCart()
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const orderId = localStorage.getItem("currentOrderId")
        if (!orderId) {
          throw new Error("No order ID found")
        }
        const orderDoc = await getDoc(doc(db, "orders", orderId))
        if (orderDoc.exists()) {
          setOrderDetails(orderDoc.data() as OrderDetails)
        } else {
          throw new Error("Order not found")
        }
      } catch (error) {
        console.error("Error fetching order details:", error)
        // Handle error (e.g., redirect to cart page)
      } finally {
        setIsLoading(false)
      }
    }

    fetchOrderDetails()
  }, [])

  const handleProceedToPayment = async () => {
    setIsLoading(true)
    try {
      const orderId = localStorage.getItem("currentOrderId")
      if (!orderId) throw new Error("No order ID found")

      await updateDoc(doc(db, "orders", orderId), {
        status: "awaiting_payment",
      })

      router.push("/checkout/payment")
    } catch (error) {
      console.error("Error updating order status:", error)
      // Handle error
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <div className="text-center">جاري تحميل تفاصيل الطلب...</div>
  }

  if (!orderDetails) {
    return <div className="text-center">لم يتم العثور على تفاصيل الطلب</div>
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">تفاصيل الطلب</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">المنتج</TableHead>
              <TableHead className="text-center">الكمية</TableHead>
              <TableHead className="text-left">السعر</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orderDetails.items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell className="text-center">{item.quantity}</TableCell>
                <TableCell className="text-left">د.ك {item.price.toFixed(3)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">ملخص الفاتورة</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>المجموع الفرعي:</span>
            <span>د.ك {orderDetails.subtotal.toFixed(3)}</span>
          </div>
          <div className="flex justify-between">
            <span>تكلفة الشحن:</span>
            <span>د.ك {orderDetails.shippingCost.toFixed(3)}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>الإجمالي:</span>
            <span>د.ك {orderDetails.total.toFixed(3)}</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">عنوان الشحن</h2>
        <p>{orderDetails.shipping.fullName}</p>
        <p>{orderDetails.shipping.address}</p>
      </div>

      <Button onClick={handleProceedToPayment} className="w-full" disabled={isLoading}>
        {isLoading ? "جاري المعالجة..." : "المتابعة للدفع"}
      </Button>
    </div>
  )
}

