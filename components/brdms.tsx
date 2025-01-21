import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Card, CardFooter } from './ui/card';

export function Sdrads() {
  const brands = [
    '/ka.webp',
    '/frozen-vegetables.webp',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
  ];

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-right">علاماتنا التجارية</h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-lg border">
        <div className="flex w-max space-x-4 p-4">
          {brands.map((brand, i) => (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-[#dbefff94] rounded-full">
                <div className="w-24 h-24 mx-auto mb-4">
                  <img src="/rice.webp" alt="s" />
                </div>
              </Card>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
