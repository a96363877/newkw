import { PaymentForm } from "./payment-form"

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold">طريقة الدفع</h1>
            <p className="text-gray-500 mt-2">اختر طريقة الدفع المناسبة لك</p>
          </div>
          <PaymentForm />
        </div>
      </div>
    </div>
  )
}

