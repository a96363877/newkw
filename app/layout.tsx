import { Noto_Kufi_Arabic } from 'next/font/google';
import type { Metadata } from 'next';
import { CartProvider } from '@/components/cart-provider';
import { Toaster } from '@/components/ui/toaster';
import Image from 'next/image';
import Link from 'next/link';
import { CartButton } from '@/components/cart-btn';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Head from 'next/head';
import { Loader } from '@/components/loader';

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'شركة الكويت للزراعة',
  description: 'مصدركم الموثوق للمنتجات الزراعية عالية الجودة',  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
       <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
  </Head>
      <body className={notoKufiArabic.className} style={{zoom:0.75}}>
      <CartProvider>

        <div> <header className="border-b ">
       
       <div className="container mx-auto px-4 h-20 flex items-center justify-between">
 
       <button className="lg:hidden">
           <div className="space-y-1.5">
             <span className="block w-6 h-0.5 bg-gray-600"></span>
             <span className="block w-6 h-0.5 bg-gray-600"></span>
             <span className="block w-6 h-0.5 bg-gray-600"></span>
           </div>
         </button>
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
        
     
        {children} 
      <Toaster  />
      <footer className="bg-white" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/vercel.svg"
            alt="Kuwait Agriculture Company"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">الشركة</h3>
            <ul className="space-y-2 text-sm">
              <li>من نحن</li>
              <li>الأقسام</li>
              <li>المنتجات</li>
              <li>الخدمات</li>
              <li>الخدمات الإلكترونية</li>
              <li>الشروط والأحكام</li>
            </ul>
          </div>
          {/* Account */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">الحساب</h3>
            <ul className="space-y-2 text-sm">
              <li>طلباتي</li>
              <li>العنوان المحفوظ</li>
              <li>سجل الطلبات</li>
              <li>القائمة</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">المتابعة</h3>
            <ul className="space-y-2 text-sm">
              <li>التقرير السنوي</li>
              <li>المناقصات</li>
              <li>معلومات عنا</li>
              <li>الأخبار والإعلام</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">خريطة الموقع</h3>
            <div className="space-y-2 text-sm">
              <p>العنوان: ص.ب 22228 الصفاة 13083</p>
              <p>الكويت</p>
              <p>ساعات العمل: 8:00 ... 3:00</p>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h3 className="font-bold text-lg mb-4">بوابات الدفع المقبولة</h3>
          <div className="flex gap-4">
            <Image src="/payment-method.png" alt="Visa" width={160} height={50} className="h-8 w-auto" />
          </div>
        </div>

        {/* Social Links & WhatsApp */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
         
        </div>
      </div>
    </footer>
      </div> 
  </CartProvider>
  
  
  
  
  </body>
    </html>
  );
}
