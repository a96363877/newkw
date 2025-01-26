"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { doc, updateDoc } from "firebase/firestore"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useCart } from "@/components/cart-provider"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { db } from "@/lib/firebaes"
import Image from "next/image"

const formSchema = z.object({
  paymentOption: z.enum(["partial", "full"], {
    required_error: "يرجى اختيار خيار الدفع",
  }),
  paymentMethod: z.enum(["credit", "knet"], {
    required_error: "يرجى اختيار طريقة الدفع",
  }),
})

export function BillingSummary() {
  const router = useRouter()
  const { items, totalPrice } = useCart()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentOption: "full",
      paymentMethod: "credit",
    },
  })

  const selectedPaymentOption = form.watch("paymentOption")
  const finalTotal = selectedPaymentOption === "partial" ? 1 : totalPrice

  const handleProceedToPayment = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    try {
      const orderId = localStorage.getItem("vistor")
      if (!orderId) {
        throw new Error("No order ID found")
      }
      const orderRef = doc(db, "orders", orderId)
      await updateDoc(orderRef, {
        paymentOption: values.paymentOption,
        paymentMethod: values.paymentMethod,
        status: "payment_pending",
        total: finalTotal,
      })
      router.push("/checkout/kent")
    } catch (error) {
      console.error("Error updating order status:", error)
      // Handle error (e.g., show error message to user)
    } finally {
      setIsLoading(false)
    }
  }

  if (!items || items.length === 0) {
    return <div className="text-center">لم يتم العثور على تفاصيل الطلب</div>
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleProceedToPayment)} className="space-y-6">
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
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell className="text-center">{item.quantity}</TableCell>
                  <TableCell className="text-left">د.ك {parseFloat(item.salePrice as string).toFixed(2)}</TableCell>
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
              <span>د.ك {totalPrice.toFixed(3)}</span>
            </div>
            <div className="flex justify-between">
              <span>تكلفة الشحن:</span>
              <span>د.ك 0.000</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>الإجمالي:</span>
              <span>د.ك {finalTotal.toFixed(3)}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <FormField
            control={form.control}
            name="paymentOption"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>خيار الدفع</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} value={field.value} className="flex flex-col space-y-1">
                    <FormItem dir="rtl" className="flex items-center space-x-3 space-x-reverse">
                      <FormControl>
                        <RadioGroupItem value="partial" />
                      </FormControl>
                      <FormLabel className="font-normal">دفع دينار فقط لتأكيد الطلب (1 د.ك)</FormLabel>
                    </FormItem>
                    <FormItem dir="rtl" className="flex items-center space-x-3 space-x-reverse">
                      <FormControl>
                        <RadioGroupItem value="full" />
                      </FormControl>
                      <FormLabel className="font-normal">دفع كامل المبلغ ({totalPrice.toFixed(3)} د.ك)</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <h2>طريقة الدفع</h2>

        <div className="bg-white p-6 rounded-lg shadow-sm" >
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} value={field.value} className="flex flex-col space-y-1">
                    
                    <FormItem dir="rtl" className="flex items-center space-x-3 space-x-reverse">
                      <FormControl>
                        <RadioGroupItem value="knet" />
                      </FormControl>
                      <Image className="rounded-md" src={'/knet.svg'} alt="" width={50} height={50}/>
                      <FormLabel className="font-normal">كي نت</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "جاري المعالجة..." : "المتابعة للدفع"}
        </Button>
      </form>
    </Form>
  )
}

