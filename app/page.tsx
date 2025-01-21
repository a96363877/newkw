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

const products = [
  {
    id:1,
    image:
      "/",
    category: "الأرز",
    title: "أرز بسمتي زيبا كلاسيك",
    originalPrice: 3.625,
    salePrice: 3.0,
    countdown: {
      days: 38,
      hours: 14,
      minutes: 26,
      seconds: 5,
    },
  },
  {
    id:2,

    image:
      "/",
    category: "الخضار المجمدة",
    title: "ملوخية خضراء موتانا",
    originalPrice: 0.278,
    salePrice: 0.25,
    countdown: {
      days: 38,
      hours: 14,
      minutes: 26,
      seconds: 5,
    },
  },
  {
    id:3,

    image:
      "/",
    category: "مأكولات بحرية مجمدة",
    title: "كرتون - سمك روهو ميانمار 20 كيلو",
    originalPrice: 16.665,
    salePrice: 13.332,
    countdown: {
      days: 10,
      hours: 14,
      minutes: 26,
      seconds: 5,
    },
  },
  {
    id:3,

    image:
      "/",
    category: "لحوم مجمدة",
    title: "صدر ديك رومي مدخن أمريكي",
    originalPrice: 5.75,
    salePrice: 2.0,
    countdown: {
      days: 38,
      hours: 14,
      minutes: 26,
      seconds: 5,
    },
    soldOut: true,
  },
]

const specialOffers = [
  {
    image: '/placeholder.svg',
    title: 'أرز بسمتي سوبر - ١٠ كجم',
    price: '4.500',
  },
  {
    image: '/placeholder.svg',
    title: 'سمك طازج مجمد',
    price: '3.250',
  },
  {
    image: '/placeholder.svg',
    title: 'خضروات مشكلة - عبوة توفير',
    price: '2.750',
  },
  {
    image: '/placeholder.svg',
    title: 'زيت الطبخ - ٥ لتر',
    price: '3.950',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/vercel.svg"
              alt="شركة الكويت للزراعة"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
         <CartButton/>
        </div>
      </header>

      <main>
        <section className="relative  ">
          <div className="container mx-auto px-4 py-2 relative z-20">
            <img
              src="/cover.jpg"
              alt="مبنى شركة الكويت للزراعة"
              width={1200}
              height={400}
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
                className="w-full h-[300px] rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">منتجاتنا</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.map((product, i) => (
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

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">من نحن</h3>
              <p className="text-gray-400">
                شركة الكويت للزراعة هي شركة زراعية رائدة تأسست عام ١٩٦٨، تقدم
                منتجات عالية الجودة للعملاء في جميع أنحاء الكويت.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">اتصل بنا</h3>
              <p className="text-gray-400">البريد الإلكتروني: info@kac.com</p>
              <p className="text-gray-400">الهاتف: ٥٦٧٨ ١٢٣٤ ٩٦٥+</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">تابعنا</h3>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon">
                  <span className="sr-only">فيسبوك</span>
                  {/* Add social media icons here */}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
