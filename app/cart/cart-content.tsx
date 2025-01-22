"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useCart } from "@/components/cart-provider"

export function CartContent() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart()

  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">سلة التسوق فارغة</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="w-24 h-24 relative flex-shrink-0">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium line-clamp-2">{item.title}</h3>
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="icon" className="text-red-500" onClick={() => removeItem(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="text-left font-medium">د.ك {(parseFloat(item.salePrice as string) * item.quantity).toFixed(3)}</div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <Separator />

      <div className="flex justify-between items-center">
        <span className="font-medium">المجموع:</span>
        <span className="font-bold text-xl">د.ك {totalPrice.toFixed(3)}</span>
      </div>

      <div className="flex justify-end">
        <Button className="w-full md:w-auto">متابعة الشراء</Button>
      </div>
    </div>
  )
}

