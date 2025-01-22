import { Noto_Kufi_Arabic } from 'next/font/google';
import type { Metadata } from 'next';
import { CartProvider } from '@/components/cart-provider';
import { Toaster } from '@/components/ui/toaster';

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'شركة الكويت للزراعة',
  description: 'مصدركم الموثوق للمنتجات الزراعية عالية الجودة',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={notoKufiArabic.className} style={{zoom:0.80}}>
      <CartProvider>{children} 
      <Toaster  />
  </CartProvider></body>
    </html>
  );
}
