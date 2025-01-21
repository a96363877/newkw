import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AddToCartButton } from "./add-to-car-button"

interface ProductCardProps {
  id: string
  image: string
  title: string
  salePrice: number
  originalPrice?: number
  isSpecialOffer?: boolean
  category?: string
  discount?: number
}

export function ProductCard({
  id,
  image,
  title,
  salePrice,
  originalPrice,
  isSpecialOffer,
  category = "حلويات",
  discount,
}: ProductCardProps) {
  const hasDiscount = originalPrice !== undefined && originalPrice > salePrice

  return (
    <Card className="rounded-3xl overflow-hidden relative group">
      {hasDiscount && (
        <Badge variant="secondary" className="absolute top-4 left-4 z-10">
          تخفيضات {discount ? `${discount}%` : ""}
        </Badge>
      )}
      <CardContent className="p-6">
        <div className="aspect-square relative mb-4 group-hover:scale-105 transition-transform duration-300">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {isSpecialOffer && (
            <Badge variant="destructive" className="absolute top-2 right-2">
              عرض خاص
            </Badge>
          )}
        </div>
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">{category}</p>
          <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <div>
          <p className="font-semibold text-blue-800 text-sm">د.ك {salePrice.toFixed(2)}</p>
          {hasDiscount && <p className="text-muted-foreground line-through text-sm">د.ك {originalPrice.toFixed(2)}</p>}
        </div>
        <AddToCartButton
          product={{
            id,
            title,
            salePrice,
            image,
          }}
          variant="outline"
        />
      </CardFooter>
    </Card>
  )
}

