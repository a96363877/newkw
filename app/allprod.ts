
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
  
  export const products: ProductCardProps[] = [ {
    
    
    id: '01',
    image: "/top2.jpg",
    category: "الزيوت",
    title: "زيت زيتون فلسسطيني  - 15 لتر",
    originalPrice: 65.0,
    salePrice: 65.4  // تم تطبيق خصم 50%
  },
  {
    id: '02',
    image: "/top1.jpg  ",
    category: "الزيوت",
    title: "زيت زيتون ممتاز  - 15 لتر",
    originalPrice: 65.292,
    salePrice: 65.50,  // تم تطبيق خصم 50%
  },
  {
    id: '03',
    image: '/premium-turkish-olive-oil-cere-500-ml.webp',
    category: 'الزيوت',
    title: 'زيت زيتون تركي ممتاز - 500 مل',
    originalPrice: 1.008,
    salePrice: 1.008,
    isSpecialOffer: true,
  },
  {
    id: '04',
    image: '/extra-virgin-olive-oil-qm-gold---2-liter.webp',
    category: 'الزيوت',
    title: 'زيت زيتون بكر ممتاز جولد ق.م - 2 لتر',
    originalPrice: 7.15,
    salePrice: 7.15,
    isSpecialOffer: true,
  },
  {
    id: '05',
    image: '/turkish-cere-olive-oil.webp',
    category: 'الزيوت',
    title: 'زيت زيتون تركى سيرى 10 لتر',
    originalPrice: 18.0,
    salePrice: 18.0,
    isSpecialOffer: true,
  },
  {
    id: '06',
    image: '/sabrina-frying-oil.webp',
    category: 'الزيوت',
    title: 'زيت صويا سابرينا 12 لتر',
    originalPrice: 6.5,
    salePrice: 6.5,
    isSpecialOffer: true,
  },
  {
    id: '07',
    image: '/extra-virgin-olive-oil-qm-gold---1-liter.webp',
    category: 'الزيوت',
    title: 'زيت زيتون بكر ممتاز جولد ق.م - 1 لتر',
    originalPrice: 3.65,
    salePrice: 3.65,
    isSpecialOffer: true,
  },
  {
    id: '08',
    image: '/extra-virgin-olive-oil-qm-gold---750-ml.webp',
    category: 'الزيوت',
    title: 'زيت زيتون بكر ممتاز جولد ق.م - 750 مل',
    originalPrice: 3.0,
    salePrice: 3.0,
    isSpecialOffer: true,
  },
  {
    id: '09',
    image: '/sabrina-frying-oil.webp',
    category: 'الزيوت',
    title: 'زيت قلي سابرينا 17 لتر',
    originalPrice: 6.75,
    salePrice: 6.75,
    isSpecialOffer: true,
  },
  {
    id: '010',
    image: '/seri-premium-turkish-olive-oil-250-ml.webp',
    category: 'الزيوت',
    title: 'زيت زيتون تركى ممتاز سيري 250 مل',
    originalPrice: 1.562,
    salePrice: 1.562,
    isSpecialOffer: true,
  },
  {
    id: '011',
    image: '/zedola-sunflower-oil---5-liter.webp',
    category: 'الزيوت',
    title: 'زيت دوار الشمس زيدولا - 5 لتر',
    originalPrice: 3.541,
    salePrice: 3.541,
    isSpecialOffer: true,
  },
  {
    id: '012',
    image: '/refined-sundflower-oil-0-85-ltr.webp',
    category: 'الزيوت',
    title: 'زيت دوار الشمس 850 مل',
    originalPrice: 0.458,
    salePrice: 0.458,
    isSpecialOffer: true,
  },
  {
    id: '013',
    image: '/rifi-extra-virgin-olive-oil---750ml.webp',
    category: 'الزيوت',
    title: 'زيت زيتون ممتاز ريفي - 750 مل',
    originalPrice: 2.261,
    salePrice: 2.261,
    isSpecialOffer: true,
  },
  {
    id: '014',
    image: '/rifi-virgin-olive-oil--2-liter.webp',
    category: 'الزيوت',
    title: 'زيت زيتون ممتاز ريفي - 2 لتر',
    originalPrice: 5.165,
    salePrice: 5.165,
    isSpecialOffer: true,
  },
  {
    id: '015',
    image: '/premium-turkish-olive-oil---2-litres.webp',
    category: 'الزيوت',
    title: 'زيت زيتون تركي ممتاز - 2 لتر',
    originalPrice: 3.65,
    salePrice: 3.65,
    isSpecialOffer: true,
  },
  {
    id: "2",
    image: "/al-fakhir-cooking-oil-1-5l.webp",
    title: "زيت الفاخر 1.5 لتر",
    salePrice: 1.75,  // تم تطبيق خصم 50%
    originalPrice: 3.50,
    category: "وجبات خفيفة",
  },

  {
    id: "4",
    image: "/arbash-basmati-rce-20-kg.webp",
    title: "أرابش أرز بسمتي 20 كجم",
    salePrice: 11.25,  // تم تطبيق خصم 50%
    originalPrice: 6.750,
    category: "أرز",
    isSpecialOffer: true,
  },
  {
    id: "5",
    image: "/apricot-jam-sera-370-g-x-12-pieces.webp",
    title: "مربى المشمش سيرا 370 جرام × 12",
    salePrice:0.583,  // تم تطبيق خصم 50%
    originalPrice: 0.583,
    isSpecialOffer: true,
    category: "مربى ومعلبات",
  },
  {
    id: "6",
    image: "/anise-seeds---1-kilo.webp",
    title: "بذور يانسون 1 كجم",
    salePrice: 4.00,  // تم تطبيق خصم 50%
    originalPrice: 0.300,
    category: "توابل",
    isSpecialOffer: true,
  },
  {
    id: "8",
    image: "/al-salam-rice-5-kg.webp",
    title: "أرز السلام 5 كجم",
    salePrice: 4.995,  // تم تطبيق خصم 50%
    originalPrice: 1.74,
    category: "أرز",
  },


  {
    id: "11",
    image: "/zeeba-primium-basmati-rice.webp",
    title: "أرز بسمتي زيبا بريميوم",
    salePrice: 7.995,  // تم تطبيق خصم 50%
    originalPrice: 17.99,
    category: "أرز",
  },
  {
    id: "12",
    image: "/zeeba-classic-basmati-rice-plastic.webp",
    title: "أرز بسمتي زيبا كلاسيك (عبوة بلاستيك)",
    salePrice: 5.25,  // تم تطبيق خصم 50%
    originalPrice: 3.00,
    isSpecialOffer: true,
    category: "أرز",
    
  },
  {
    id: "13",
    image: "/zeeba-classic-basmati-rice.webp",
    title: "أرز بسمتي زيبا كلاسيك",
    salePrice: 4.5,  // تم تطبيق خصم 50%
    originalPrice: 3.00,
    category: "أرز",
    isSpecialOffer: true,

  },
  {
    id: "14",
    image: "/zeeba-basmati-creamy-sella-5kg.webp",
    title: "أرز بسمتي زيبا كريمي سيلّا 5 كجم",
    salePrice: 10.495,  // تم تطبيق خصم 50%
    originalPrice: 3.175,
    category: "أرز",
    isSpecialOffer: true,

  },

  {
    id: "16",
    image: "/zain-alphonso-mango.webp",
    title: "مانجو ألفونسو زين",
    isSpecialOffer: true,
    salePrice: 6.495,  // تم تطبيق خصم 50%
    originalPrice: 1.99,
    category: "فاكهة",
  },
  {
    id: "17",
    image: "/white-peppercorns---1-kilo.webp",
    title: "فلفل أبيض 1 كجم",
    salePrice: 3.495,  // تم تطبيق خصم 50%
    originalPrice: 0.399,
    isSpecialOffer: true,
    category: "توابل",
  },

  {
    id: "19",
    image: "/vietnamese-rice---1-kilo.webp",
    title: "أرز فيتنامي 1 كجم",
    salePrice: 2.995,  // تم تطبيق خصم 50%
    originalPrice:  0.260,
    isSpecialOffer: true,
    category: "أرز",
  },


  {
    id: "23",
    image: "/thai-parboiled-rice---royal.webp",
    title: "أرز تايلاندي باربويلد رويال",
    salePrice: 6.25,  // تم تطبيق خصم 50%
    isSpecialOffer: true,
    originalPrice: 1.650,
    category: "أرز",
  },
  {
    id: "24",
    image: "/thai-jasmine-fragrant-rice-hom-mali.webp",
    title: "أرز ياسمين تايلاندي هوم مالي",
    salePrice: 7.0,  // تم تطبيق خصم 50%
    isSpecialOffer: true,
    originalPrice: 2.40,
    category: "أرز",
  }

  ];
  