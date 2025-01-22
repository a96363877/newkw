"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { doc, updateDoc } from "firebase/firestore"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useCart } from "@/components/cart-provider"
import { db } from "@/lib/firebaes"

const formSchema = z.object({
  otp: z.string().length(6, "يجب أن يتكون الرمز من 6 أرقام"),
})

export function OTPForm() {
  const router = useRouter()
  const { clearCart } = useCart()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const orderId = localStorage.getItem("currentOrderId")
      if (!orderId) throw new Error("No order ID found")

      await updateDoc(doc(db, "orders", orderId), {
        payment: {
          status: "completed",
          verifiedAt: new Date().toISOString(),
        },
        status: "confirmed",
      })
      clearCart()
      localStorage.removeItem("currentOrderId")
      router.push("/checkout/success")
    } catch (error) {
      console.error("Error verifying OTP:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="# # # # # #" {...field} className="text-center text-2xl tracking-widest" maxLength={6} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "جاري التحقق..." : "تأكيد"}
        </Button>

        <Button type="button" variant="link" className="w-full" disabled={isLoading}>
          إعادة إرسال الرمز
        </Button>
      </form>
    </Form>
  )
}

