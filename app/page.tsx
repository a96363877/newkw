import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import '@/styles/globals.css';

import { Button } from '@/components/ui/button';
import { BrandsScroll } from '@/components/brans-scroll';
import { ProductCard } from '@/components/products';
import FeatureCards from '@/components/feturs';
import { Sdrads } from '@/components/brdms';
import { SpecialOffersSection } from '@/components/spcial-offer';
import { CartButton } from '@/components/cart-btn';
import { products } from './allprod';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
    

      <main>
        <section className="relative  ">
          <div className="container mx-auto relative z-20">
            <img
              src="/cov.jpg"
              alt="مبنى شركة الكويت للزراعة"
              width={1200}
              height={600}
              className="w-full h-[216px] object-cover"
            />
            <div className="absolute inset-0 z-10" />
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <BrandsScroll />
          </div>
        </section>
        <section className="py-8 ">
          <div className="container mx-auto px-4">
            <div className="relative">
              <Image
                src="/coverpage.webp"
                alt="اختر نوعك المفضل"
                width={1200}
                height={900}
                className="w-full h-[340px] rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">منتجاتنا</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6">
        {products.map((product,i) => (
                <ProductCard  key={i} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <Sdrads />
          </div>
        </section>

        <section className="py-8 bg-[#FDF6F0]">
          <div className="container mx-auto px-4">
            <div className="relative">
              <img
                src="/1712645818-desktop-image.webp"
                alt="اختر نوعك المفضل"
                width={1200}
                height={300}
                className="w-full h-[300px] rounded-lg"
              />
            </div>
          </div>
        </section>

      <SpecialOffersSection/>
        <section className="py-8">
          <FeatureCards />
        </section>
        <div className='fixed bottom-0 left-3'>
          <CartButton/>
        </div>
      </main>

      
    </div>
  );
}
