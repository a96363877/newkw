import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  price?: string;
  isSpecialOffer?: boolean;
}

export function ProductCard({
  image,
  title,
  price,
  isSpecialOffer,
}: ProductCardProps) {
  return (
    <Card className="rounded-3xl overflow-hidden relative">
      <div className="absolute top-4 left-4 bg-sky-400 text-white px-4 py-1 rounded-full">
        تخفيضات
      </div>
      <CardContent className="p-6">
        <div className="aspect-square relative mb-4">
          <Image
            src={image || '/placeholder.svg'}
            alt="سكر هندي"
            fill
            className="object-contain"
          />
          {isSpecialOffer && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
              عرض خاص
            </div>
          )}
        </div>
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">حلويات</p>
          <h3 className="font-semibold text-lg"> {title}</h3>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <div>
          <p className="font-semibold text-sm">د.ك {price}</p>
          <p className="text-muted-foreground line-through text-sm">
            د.ك 14.000
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-2  text-sm">
          <ShoppingCart /> أضف{' '}
        </Button>
      </CardFooter>
    </Card>
  );
}
