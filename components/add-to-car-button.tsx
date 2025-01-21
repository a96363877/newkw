"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "./cart-provider"
import {  ShoppingCart } from "lucide-react"

interface AddToCartButtonProps {
  product: {
    id: string
    title: string
    salePrice: number
    image: string
  }
  variant?: "default" | "outline"
}

export function AddToCartButton({ product, variant = "default" }: AddToCartButtonProps) {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addItem(product as any)
    toast({
      title: "تمت الإضافة إلى السلة",
      description: `تمت إضافة ${product.title} إلى سلة التسوق`,
    })
  }

  return (
    <Button onClick={handleAddToCart} variant={variant} className="mr-auto bg-blue-600 text-white">
      <ShoppingCart/>
      إضافة    
      </Button>
  )
}

