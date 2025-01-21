import { SpecialOfferCard } from "./card-count"

const offers = [
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

export function SpecialOffersSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">العروض الخاصة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <SpecialOfferCard key={index} {...offer} />
          ))}
        </div>
      </div>
    </section>
  )
}

