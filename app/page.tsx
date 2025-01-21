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

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  salePrice: number;
  originalPrice?: number;
  isSpecialOffer?: boolean;
  category?: string;
  discount?: number;
}

const products: ProductCardProps[] = [ {
  
    id: '01',
    image: "/rifi-virgin-olive-oil--2-liter.webp",
    category: "الزيوت",
    title: "زيت زيتون ممتاز ريفي - 2 لتر",
    originalPrice: 28.1,
    salePrice: 25.1,
  },
  {
    id: '02',
    image: "/435-20501302.webp  ",
    category: "الزيوت",
    title: "زيت زيتون بكر ممتاز جولد ق.م - 500 م"
    ,
    originalPrice: 3.292,
    salePrice: 3.292,
  },
  {
    id: '03',
    image: "/405-20501213.webp",
    category: "الزيوت",
    title: "زيت زيتون تركي ممتاز - 500 مل",
    originalPrice: 1.008,
    salePrice: 1.008,
  },
  {
    id: '04',
    image: "/extra-virgin-olive-oil-qm-gold---2-liter.webp",
    category: "الزيوت",
    title: "زيت زيتون بكر ممتاز جولد ق.م - 2 لتر",
    originalPrice: 7.15,
    salePrice: 7.15,
  },
  {
    id: '05',
    image: "/turkish-cere-olive-oil.webp",
    category: "الزيوت",
    title: "زيت زيتون تركى سيرى 10 لتر",
    originalPrice: 18.0,
    salePrice: 18.0,
  },
  {
    id: '06',
    image: "/sabrina-frying-oil.webp",
    category: "الزيوت",
    title: "زيت صويا سابرينا 12 لتر",
    originalPrice: 6.5,
    salePrice: 6.5,
  },
  {
    id: '07',
    image: "/extra-virgin-olive-oil-qm-gold---1-liter.webp",
    category: "الزيوت",
    title: "زيت زيتون بكر ممتاز جولد ق.م - 1 لتر",
    originalPrice: 3.65,
    salePrice: 3.5,
  },
  {
    id: '08',
    image: "/extra-virgin-olive-oil-qm-gold---750-ml.webp",
    category: "الزيوت",
    title: "زيت زيتون بكر ممتاز جولد ق.م - 750 مل",
    originalPrice: 3.0,
    salePrice: 3.0,
  },
  {
    id: '09',
    image: "/sabrina-frying-oil.webp",
    category: "الزيوت",
    title: "زيت قلي سابرينا 17 لتر",
    originalPrice: 6.75,
    salePrice: 6.75,
  },
  {
    id: '010',
    image: "/seri-premium-turkish-olive-oil-250-ml.webp",
    category: "الزيوت",
    title: "زيت زيتون تركى ممتاز سيري 250 مل",
    originalPrice: 0.562,
    salePrice: 0.5,
  },
  {
    id: '011',
    image: "/zedola-sunflower-oil---5-liter.webp",
    category: "الزيوت",
    title: "زيت دوار الشمس زيدولا - 5 لتر",
    originalPrice: 3.541,
    salePrice: 3.541,
  },
  {
    id: '012',
    image: "/refined-sundflower-oil-0-85-ltr.webp",
    category: "الزيوت",
    title: "زيت دوار الشمس 850 مل",
    originalPrice: 0.458,
    salePrice: 0.458,
  },
  {
    id: '013',
    image: "/rifi-extra-virgin-olive-oil---750ml.webp",
    category: "الزيوت",
    title: "زيت زيتون ممتاز ريفي - 750 مل",
    originalPrice: 2.261,
    salePrice: 2.261,
  },
  {
    id: '014',
    image: "/rifi-virgin-olive-oil--2-liter (1).webp",
    category: "الزيوت",
    title: "زيت زيتون ممتاز ريفي - 2 لتر",
    originalPrice: 5.165,
    salePrice: 4.999,
  },
  {
    id: '015',
    image: "/premium-turkish-olive-oil---2-litres.webp",
    category: "الزيوت",
    title: "زيت زيتون تركي ممتاز - 2 لتر",
    originalPrice: 3.65,
    salePrice: 3.65,
  },
  {
    id: "1",
    image: "/Summarizebeverage.webp",
    title: "زيت زيتون تركي ممتاز - 2 لتر",
    salePrice: 2.99,
    originalPrice: 3.99,
    isSpecialOffer: true,
    category: "مشروبات",
    discount: 10,
  },
  {
    id: "2",
    image: "/al-fakhir-cooking-oil-1-5l.webp",
    title: "زيت الفاخر 1.5 لتر",
    salePrice: 3.50,
    originalPrice: 4.00,
    category: "وجبات خفيفة",
  },
  {
    id: "3",
    image: "/bahcivan.webp",
    title: "بحجيبان",
    salePrice: 6.75,
    originalPrice: 8.00,
    isSpecialOffer: false,
    category: "توابل",
  },
  {
    id: "4",
    image: "/arbash-basmati-rce-20-kg.webp",
    title: "أرابش أرز بسمتي 20 كجم",
    salePrice: 22.50,
    originalPrice: 25.00,
    category: "أرز",
    discount: 10,
  },
  {
    id: "5",
    image: "/apricot-jam-sera-370-g-x-12-pieces.webp",
    title: "مربى المشمش سيرا 370 جرام × 12",
    salePrice: 18.99,
    originalPrice: 22.00,
    category: "مربى ومعلبات",
  },
  {
    id: "6",
    image: "/anise-seeds---1-kilo.webp",
    title: "بذور يانسون 1 كجم",
    salePrice: 8.00,
    originalPrice: 10.00,
    category: "توابل",
    discount: 20,
  },
  {
    id: "7",
    image: "/altaieb.webp",
    title: "الطيّب",
    salePrice: 5.40,
    originalPrice: 6.00,
    category: "وجبات خفيفة",
  },
  {
    id: "8",
    image: "/al-salam-rice-5-kg.webp",
    title: "أرز السلام 5 كجم",
    salePrice: 9.99,
    originalPrice: 12.00,
    category: "أرز",
  },
  {
    id: "9",
    image: "/allana.webp",
    title: "ألانا",
    salePrice: 4.50,
    category: "وجبات خفيفة",
  },
  {
    id: "10",
    image: "/alfakhir.webp",
    title: "الفاخر",
    salePrice: 7.25,
    category: "توابل",
  },
  {
    id: "11",
    image: "/zeeba-primium-basmati-rice.webp",
    title: "أرز بسمتي زيبا بريميوم",
    salePrice: 15.99,
    originalPrice: 18.00,
    category: "أرز",
  },
  {
    id: "12",
    image: "/zeeba-classic-basmati-rice-plastic.webp",
    title: "أرز بسمتي زيبا كلاسيك (عبوة بلاستيك)",
    salePrice: 10.50,
    originalPrice: 12.00,
    category: "أرز",
  },
  {
    id: "13",
    image: "/zeeba-classic-basmati-rice.webp",
    title: "أرز بسمتي زيبا كلاسيك",
    salePrice: 9.00,
    originalPrice: 10.50,
    category: "أرز",
  },
  {
    id: "14",
    image: "/zeeba-basmati-creamy-sella-5kg.webp",
    title: "أرز بسمتي زيبا كريمي سيلّا 5 كجم",
    salePrice: 20.99,
    originalPrice: 25.00,
    category: "أرز",
  },
  {
    id: "15",
    image: "/zedola.webp",
    title: "زيدولا",
    salePrice: 4.25,
    category: "وجبات خفيفة",
  },
  {
    id: "16",
    image: "/zain-alphonso-mango.webp",
    title: "مانجو ألفونسو زين",
    salePrice: 12.99,
    originalPrice: 15.00,
    category: "فاكهة",
  },
  {
    id: "17",
    image: "/white-peppercorns---1-kilo.webp",
    title: "فلفل أبيض 1 كجم",
    salePrice: 6.99,
    originalPrice: 8.00,
    category: "توابل",
  },
  {
    id: "18",
    image: "/vip.webp",
    title: "في آي بي",
    salePrice: 4.50,
    category: "وجبات خفيفة",
  },
  {
    id: "19",
    image: "/vietnamese-rice---1-kilo.webp",
    title: "أرز فيتنامي 1 كجم",
    salePrice: 5.99,
    originalPrice: 7.00,
    category: "أرز",
  },
  {
    id: "20",
    image: "/tyson.webp",
    title: "تايسون",
    salePrice: 8.99,
    originalPrice: 10.00,
    category: "لحوم ودواجن",
  },
  {
    id: "21",
    image: "/turkey.webp",
    title: "ديك رومي",
    salePrice: 15.00,
    originalPrice: 18.00,
    category: "لحوم ودواجن",
  },
  {
    id: "22",
    image: "/torrent.webp",
    title: "تورنيدو",
    salePrice: 7.50,
    originalPrice: 9.00,
    category: "مشروبات",
  },
  {
    id: "23",
    image: "/thai-parboiled-rice---royal.webp",
    title: "أرز تايلاندي باربويلد رويال",
    salePrice: 12.50,
    originalPrice: 14.00,
    category: "أرز",
  },
  {
    id: "24",
    image: "/thai-jasmine-fragrant-rice-hom-mali.webp",
    title: "أرز ياسمين تايلاندي هوم مالي",
    salePrice: 14.00,
    originalPrice: 16.00,
    category: "أرز",
  }
];

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
