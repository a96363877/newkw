'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useCountdown } from '@/hooks/use-countdown';

export default function CountdownProductCard() {
  // Set target date to 99 days from now for the example
  const targetDate = new Date(Date.now() + 99 * 24 * 60 * 60 * 1000);
  const timeLeft = useCountdown(targetDate);

  const timeUnits = [
    { value: timeLeft.days, label: 'أيام' },
    { value: timeLeft.hours, label: 'ساعات' },
    { value: timeLeft.minutes, label: 'دقائق' },
    { value: timeLeft.seconds, label: 'ثواني' },
  ];

  return (
    <div className="max-w-sm mx-auto" dir="rtl">
      <div className="bg-blue-600 text-white rounded-lg p-3 mb-4">
        <div className="grid grid-cols-4 gap-2 text-center">
          {timeUnits.map((unit, index) => (
            <div key={unit.label} className="flex flex-col">
              <span className="text-2xl font-bold">
                {unit.value.toString().padStart(2, '0')}
              </span>
              <span className="text-sm">{unit.label}</span>
            </div>
          ))}
        </div>
      </div>

      <Card className="rounded-lg overflow-hidden">
        <CardContent className="p-4">
          <div className="aspect-square relative mb-4">
            <Image src="/" alt="سكر هندي" fill className="object-contain" />
          </div>
          <h3 className="font-semibold text-lg text-center">
            سكر هندي 50 كيلو
          </h3>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            إضافة
          </Button>
          <div className="text-left">
            <p className="font-semibold text-lg">د.ك 11.000</p>
            <p className="text-muted-foreground line-through text-sm">
              د.ك 14.000
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
