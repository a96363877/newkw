"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { doc, updateDoc } from "firebase/firestore"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { useCart } from "@/components/cart-provider"
import { db } from "@/lib/firebaes"

const formSchema = z.object({
  paymentMethod: z.enum(["knet", "credit"]),
  cardNumber: z.string().min(16, "رقم البطاقة غير صحيح").optional(),
  expiryDate: z.string().min(5, "تاريخ الانتهاء غير صحيح").optional(),
  cvv: z.string().min(3, "رمز CVV غير صحيح").optional(),
})

export function PaymentForm() {
  const router = useRouter()
  const { clearCart } = useCart()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMethod: "knet",
    },
  })

  const paymentMethod = form.watch("paymentMethod")

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const orderId = localStorage.getItem("currentOrderId")
      if (!orderId) throw new Error("No order ID found")

      await updateDoc(doc(db, "orders", orderId), {
        payment: {
          method: values.paymentMethod,
          status: "pending",
        },
      })
      router.push("/checkout/otp")
    } catch (error) {
      console.error("Error processing payment:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="relative">
                    <RadioGroupItem value="knet" id="knet" className="peer sr-only" />
                    <Label
                      htmlFor="knet"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 [&:has([data-state=checked])]:border-blue-600 peer-data-[state=checked]:border-blue-600"
                    >
                      <Image src="/knet.svg" alt="KNET" width={80} height={40} className="mb-3" />
                      <span className="text-sm font-medium">كي نت</span>
                    </Label>
                  </div>
                  <div className="relative">
                    <RadioGroupItem value="credit" id="credit" className="peer sr-only" />
                    <Label
                      htmlFor="credit"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 [&:has([data-state=checked])]:border-blue-600 peer-data-[state=checked]:border-blue-600"
                    >
                      <Image src="/cards.svg" alt="Credit Card" width={40} height={40} className="mb-3" />
                      <Image src="/visa.svg" alt="Credit Card" width={40} height={40} className="mb-3" />
                      <span className="text-sm font-medium">بطاقة ائتمان</span>
                    </Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {paymentMethod === "credit" && (
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>رقم البطاقة</FormLabel>
                  <FormControl>
                    <Input placeholder="1234 5678 9012 3456" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="expiryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تاريخ الانتهاء</FormLabel>
                    <FormControl>
                      <Input placeholder="MM/YY" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVV</FormLabel>
                    <FormControl>
                      <Input placeholder="123" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        )}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "جاري المعالجة..." : "تأكيد الدفع"}
        </Button>
      </form>
    </Form>
  )
}

function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} />
}

