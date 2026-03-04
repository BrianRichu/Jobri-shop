export function getProduct(productId) {
  let matchingProduct;
  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });
  return matchingProduct;
}

export const products = [
  {
    id: "p56",
    image: "images/sneakers/nike airmax 95 sp maniere.jpeg",
    name: "Nike Airmax 95 SP Maniere Sneakers",
    priceShillings: 4299,
    keywords: ["Nike", "Sneakers", "airmax"],
    description: `The Nike Airmax 95 SP Maniere Sneakers are designed for both performance and aesthetic appeal. They feature the Air Max cushioning system, providing excellent comfort and support for long periods of wear. The breathable upper ensures proper airflow, keeping your feet cool, while reinforced stitching enhances durability. A sleek, modern colorway makes them suitable for both casual and athletic outfits. The ergonomic design provides a snug fit, and durable outsoles deliver traction on various surfaces. Ideal for sneaker enthusiasts seeking comfort, style, and functionality in one versatile shoe. Perfect for running, walking, or casual outings, the Nike Airmax 95 SP Maniere combines high-quality materials with attention to detail, ensuring long-lasting wear. The unique silhouette captures a contemporary aesthetic that pairs seamlessly with streetwear and sportswear fashion. Lightweight yet supportive, they provide optimal foot alignment and reduce fatigue during extended wear. Whether hitting the streets or engaging in active pursuits, these sneakers offer both performance and style for everyday versatility.`
  },
  {
    id: "p57",
    image: "images/sneakers/nike airmax tn pink.jpeg",
    name: "Ladies Nike Airmax TN Pink Sneakers",
    priceShillings: 3799,
    keywords: ["Nike", "Sneakers", "airmax", "ladies"],
    description: `The Ladies Nike Airmax TN Pink Sneakers are a perfect blend of comfort, style, and performance. Designed with the iconic Air Max sole, they provide superior cushioning and support for walking, running, or everyday wear. The breathable upper keeps feet cool, while durable construction ensures long-lasting use. Featuring a vibrant pink colorway, these sneakers make a bold fashion statement suitable for casual or sporty outfits. Ergonomic design and padded collars create a snug, comfortable fit, while the reinforced outsole delivers excellent traction on multiple surfaces. Ideal for active women, these sneakers balance aesthetic appeal with functionality, allowing effortless pairing with jeans, leggings, or athletic wear. Lightweight yet robust, they reduce fatigue during extended wear. Whether for casual outings, workouts, or streetwear fashion, these sneakers ensure style, comfort, and performance in one versatile package. The combination of design innovation and reliable construction makes the Nike Airmax TN Pink a must-have for modern sneaker enthusiasts.`
  },
  {
    id: "p58",
    image: "images/sneakers/nike airmax tn blanco.jpeg",
    name: "Nike Airmax TN Blanco Sneakers",
    priceShillings: 3799,
    keywords: ["Nike", "Sneakers", "airmax"],
    description: `The Nike Airmax TN Blanco Sneakers are crafted for optimal comfort and a minimalist, all-white aesthetic. Featuring the renowned Air Max cushioning, they absorb impact and reduce strain on the feet, making them suitable for walking, casual sports, and daily wear. The breathable upper provides ventilation, ensuring coolness throughout the day. The rubber outsole guarantees superior grip, stability, and durability across surfaces. With a sleek silhouette, these sneakers pair effortlessly with a variety of casual and streetwear looks. Ergonomic design ensures a secure fit and reduces foot fatigue during prolonged wear. Reinforced lace loops enhance stability and overall longevity. The Nike Airmax TN Blanco is a versatile shoe, combining functional performance, stylish minimalism, and a comfortable, supportive fit for modern sneaker enthusiasts. Lightweight materials and well-crafted construction make it ideal for everyday use while maintaining a clean and fashionable appearance.`
  },
  {
    id: "p48",
    image: "images/sneakers/black chrome hearts birkenstock closed sandals.jpeg",
    name: "Black Chrome Hearts Birkenstock Closed Sandals",
    priceShillings: 4299,
    keywords: ["Birkenstock", "Sandals"],
    description: `These Black Chrome Hearts Birkenstock Closed Sandals are designed for superior comfort, durability, and contemporary style. The iconic contoured cork footbed molds to the natural shape of your foot, providing excellent arch support and long-lasting comfort. The closed-toe design ensures protection while maintaining a sleek look. Durable straps and rubber outsoles offer stability and traction for indoor and outdoor wear. A luxury collaboration with Chrome Hearts enhances the sandals’ aesthetic appeal, making them suitable for fashion-conscious users. Ideal for casual summer outings or pairing with streetwear, these sandals combine ergonomic support with high-end design. Lightweight and easy to wear, they provide all-day comfort without compromising on style. Whether exploring urban environments or enjoying leisure time, these sandals deliver both practicality and elegance in one versatile footwear option. Their premium materials and meticulous craftsmanship make them a standout piece for any wardrobe, merging comfort, durability, and fashion seamlessly.`
  },
  {
    id: "p55",
    image: "images/sneakers/nike airmax tn miami vice.jpeg",
    name: "Nike Airmax TN Miami Vice Sneakers",
    priceShillings: 3799,
    keywords: ["Nike", "Sneakers", "airmax"],
    description: `Nike Airmax TN Miami Vice Sneakers are inspired by Miami's vibrant lifestyle and color palettes. They feature Air Max cushioning for superior comfort and shock absorption during walking, running, or casual activities. The lightweight, breathable upper enhances ventilation, keeping your feet cool. Durable rubber outsoles provide traction on diverse surfaces, ensuring stability in everyday wear. Eye-catching color combinations elevate style, making them suitable for streetwear and casual ensembles. Ergonomically designed for a snug fit, these sneakers reduce foot fatigue while enhancing movement efficiency. Reinforced stitching adds durability, ensuring long-term wear. Ideal for sneaker enthusiasts seeking a balance of aesthetic appeal, comfort, and practical performance, the Miami Vice edition reflects innovation and fashion-forward design in one versatile footwear option. Lightweight materials, ergonomic fit, and iconic branding make these sneakers perfect for casual, athletic, or lifestyle use, delivering comfort and style throughout the day.`
  },
  {
    id: "p49",
    image: "images/sneakers/black louis vuitton denim slides.jpeg",
    name: "Black Louis Vuitton Denim Slides",
    priceShillings: 2499,
    keywords: ["Louis Vuitton", "Slides"],
    description: `The Black Louis Vuitton Denim Slides exemplify luxury and comfort. Crafted with a soft denim upper, they offer flexibility and breathability for extended wear. The cushioned footbed ensures comfort during all-day use, while the rubber outsole provides traction and stability on multiple surfaces. Iconic Louis Vuitton branding adds an upscale aesthetic, elevating casual outfits effortlessly. These slides are versatile, suitable for both indoor lounging and outdoor summer activities. Minimalist yet sophisticated, they pair well with streetwear, casual outfits, or relaxed attire. The ergonomic design supports natural foot alignment, reducing fatigue during extended wear. Combining durability, comfort, and luxury style, the Black Louis Vuitton Denim Slides are a premium option for fashion-conscious individuals seeking effortless elegance in casual footwear.`
  },
  {
    id: "p50",
    image: "images/sneakers/black oprn birkenstock sandals.jpeg",
    name: "Black Open Birkenstock Sandals",
    priceShillings: 4299,
    keywords: ["Birkenstock", "Sandals"],
    description: `Black Open Birkenstock Sandals are built for comfort and everyday wear. Their contoured cork footbed adapts to the foot's shape, providing support and ergonomic comfort. Open-toe design allows breathability, keeping feet cool during warm weather. Durable straps secure the foot, while the rubber outsole ensures traction and long-lasting durability. Perfect for casual outings, summer activities, or pairing with relaxed clothing, these sandals combine practicality with minimalist style. Lightweight yet robust, they offer all-day comfort without sacrificing aesthetics. Designed with foot health in mind, the sandals reduce pressure points and fatigue during extended use. The versatile black color pairs effortlessly with various outfits, making them an ideal addition to any casual wardrobe.`
  },
  {
    id: "p54",
    image: "images/sneakers/nike airmax 95 sketch with past.jpeg",
    name: "Nike Airmax 95 Sketch With Past Sneakers",
    priceShillings: 4299,
    keywords: ["Nike", "Sneakers", "airmax"],
    description: `Nike Airmax 95 Sketch With Past Sneakers combine iconic Air Max cushioning with contemporary design. The breathable upper ensures comfort and ventilation, while the midsole absorbs impact, reducing foot fatigue. Durable outsoles provide traction and stability on varied surfaces. Unique aesthetic detailing, inspired by past designs, makes these sneakers stand out in casual or streetwear fashion. Ergonomic design offers a snug fit, enhancing comfort for walking, running, or everyday use. Lightweight materials ensure ease of movement while maintaining durability. Ideal for sneaker enthusiasts seeking a blend of history, style, and performance, these shoes deliver a visually striking and highly functional footwear solution suitable for diverse lifestyles and casual activities.`
  },
  {
    id: "p51",
    image: "images/sneakers/black vans off the wall slides.jpeg",
    name: "Black Vans Off The Wall Slides",
    priceShillings: 2499,
    keywords: ["Vans", "Slides"],
    description: `Black Vans Off The Wall Slides offer effortless style and comfort. Featuring cushioned footbeds, they ensure all-day wearability. Durable rubber outsoles provide stability and grip on various surfaces. The classic black upper with iconic Vans branding creates a minimalist aesthetic suitable for casual outfits, streetwear, or indoor lounging. Easy to slip on and off, these slides prioritize convenience without compromising style. Lightweight design enhances portability and wearability. Ideal for relaxed or summer wear, they combine functional performance, ergonomic comfort, and timeless fashion. Their versatility allows pairing with shorts, jeans, or casual attire, delivering a practical yet stylish footwear option for everyday use.`
  },
  {
    id:"p52",
    image:"images/sneakers/ligh ash grey birkenstick closed sandals.jpeg",
    name:'Light Ash Grey Birkenstock Closed Sandals',
    priceShillings: 4299,
    keywords: ["Birkenstock", "Sandals"]
  },
  {
    id:"p53",
    image:"images/sneakers/nike air jordan 1 se french blue.jpeg",
    name:'Nike Air Jordan 1 SE French Blue Sneakers',
    priceShillings: 4299,
    keywords: ["Nike", "Sneakers"]
  },
  {
    id:"p41",
    image:"images/sneakers/air jordan 4 retro rare air.jpeg",
    name:'Air Jordan 4 Retro Rare Air Sneakers',
    priceShillings: 4499,
    keywords: ["Jordan", "Sneakers"]
  },
  {
    id: "p42",
    image:"images/sneakers/all black hermes slides.jpeg",
    name: 'All Black Hermes Slides',
    priceShillings: 3999,
    keywords: ["Hermes", "Slides"]
  },
  {
    id: "p43",
    image:"images/sneakers/all black prada milano slides.jpeg",
    name: 'All Black Prada Milano Slides',
    priceShillings: 3999,
    keywords: ["Prada", "Slides"]
  },
  {
    id: "p44",
    image:"images/sneakers/all black vans knu stack platform.jpeg",
    priceShillings: 3999,
    name: 'All Black Vans Knu Stack Platform Sneakers',
    keywords: ["Vans", "Sneakers"]
  },
  {
    id: "p45",
    image:"images/sneakers/all white adidas stansmith.jpeg",
    name: 'All White Adidas Stansmith Sneakers',
    priceShillings: 3499,
    keywords: ["Adidas", "Sneakers"]
  },
  {
    id: "p46",
    image:"images/sneakers/black and white vans off the wall slides.jpeg",
    name: 'Black and White Vans Off The Wall Slides',
    priceShillings: 2999,
    keywords: ["Vans", "Slides"]
  },
  {
    id: "p47",
    image:"images/sneakers/black birkenstock zurich suede sandals.jpeg",
    name: 'Black Birkenstock Zurich Suede Sandals',
    priceShillings: 4299,
    keywords: ["Birkenstock", "Sandals"]
  },
  {
    id: "p31",
    image: "images/sneakers/new balance 530 gold.jpeg",
    name: 'Gold New Balance 530 Sneakers',
    priceShillings: 3799,
    keywords: ["New Balance", "Sneakers"]
  },
  {
    id: "p37",
    image: "images/watches/brown leather curren watch.jpeg",
    name: "Brown Leather Curren Watch",
    priceShillings: 3999,
    keywords: ["Curren", "Watches", "leather", "battery powered"]
  },{
    id: "p30",
    image: "images/sneakers/jordan 3 vuelo.jpeg",
    name: 'Air Jordan 3 Retro Vuelo Sneakers',
    priceShillings: 4499,
    keywords: ["Jordan", "Sneakers"]
  },
  {
    id: "p38",
    image: "images/watches/ladies square face curren gold watch.jpeg",
    name: "Ladies Square Face Curren Gold Watch",
    priceShillings: 3499,
    keywords: ["Curren", "Watches", "ladies","battery powered"]
  },{
    id: "p29",
    image:"images/sneakers/jordan 4 military blue.jpeg",
    name: 'Air Jordan 4 Retro Military Blue Sneakers',
    priceShillings: 4499,
    keywords: ["Jordan", "Sneakers"]
  },
  {
    id: "p39",
    image: "images/watches/ladies square face curren silver watch.jpeg",
    name: "Ladies Square Face Curren Silver Watch",
    priceShillings: 3499,
    keywords: ["Curren", "Watches", "ladies","battery powered"]
  },
  {
    id: "p25",
    image: "images/sneakers/black new balance 530.jpeg",
    name: 'Black New Balance 530 Sneakers',
    priceShillings: 3799,
    keywords: ["New Balance", "Sneakers"]
  },
  {
    id: "p26",
    image: "images/sneakers/jordan 3 cactus jack.jpeg",
    name: 'Black Jordan 3 Cactus Jack Sneakers',
    priceShillings: 4499,
    keywords: ["Jordan", "Sneakers"]
  },
  {
    id: "p36",
    image: "images/watches/casio white square face chrono watch.jpeg",
    name: "Casio Square Face Chronograph Watch",
    priceShillings: 3499,
    keywords: ["Casio", "Watches", "battery powered"]
  },
  {
    id: "p32",
    image: "images/sneakers/white new balance 530.jpeg",
    name: 'White New Balance 530 Sneakers',
    priceShillings: 3799,
    keywords: ["New Balance", "Sneakers"]
  },
  {
    id: "p40",
    image: "images/watches/dark tan leather curren watch.jpeg",
    name: "Dark Tan Leather Curren Watch",
    priceShillings: 3999,
    keywords: ["Curren", "Watches", "leather", "battery powered"]
  },
  {
    id: "p27",
    image: "images/sneakers/jordan 4 fire red.jpeg",
    name: 'White Jordan 4 Retro Fire Red Sneakers',
    priceShillings: 4499,
    keywords: ["Jordan", "Sneakers"]
  },{
    id: "p28",
    image: "images/sneakers/jordan 4 pure money.jpeg",
    name: 'Air Jordan 4 pure money sneakers',
    priceShillings: 4499,
    keywords: ["Jordan", "Sneakers"]
  },
    {
    id: "p24",
    image: "images/watches/silver naviforce watch.jpeg",
    name: 'Stainless Steel Silver Naviforce Watch',
    priceShillings: 3999,
    keywords: ["Naviforce", "Watches", "battery powered"]
  },
  {
    id: "p23",
    image: "images/sneakers/airforce one low rope lace sneakers.jpeg",
    name: 'White Nike Airforce one low rope lace sneakers',
    priceShillings: 4299,
    keywords: ["Nike", "Sneakers"]
  },
  {
    id: "p35",
    image: "images/watches/casio green square face chrono watch.jpeg",
    name: "Casio Square Face Chronograph Watch",
    priceShillings: 3499,
    keywords: ["Casio", "Watches", "battery powered"]
  },
  {
    id: "p22",
    image: "images/watches/Black Naviforce watch.jpeg",
    name: 'Stainless Steel black Naviforce Watch',
    priceShillings: 3499,
    keywords: ["Naviforce", "Watches"]
  },
  {
    id: "p21",
    image: "images/sneakers/black airforce one rope lace sneakers.jpeg",
    name: 'Black Nike Airforce one low rope lace sneakers',
    priceShillings: 4299,
    keywords: ["Nike", "Sneakers"]
  },{
    id: "p1",
    image: "images/sneakers/Brown Nike sb dunks.jpeg",
    name: 'Nike Dunk Low "Cacao Wow" Sneakers',
    priceShillings: 3799,
    keywords: ["Nike", "Sneakers"]
  },
  {
    id: "p34",
    image: "images/watches/Blue leather curren watch.jpeg",
    name: "Blue Leather Curren Watch",
    priceShillings: 3999,
    keywords: ["Curren", "Watches", "leather"]
  },
  {
    id: "p2",
    image: "images/clothing/black leather jacket.jpeg",
    name: "Black Leather Jacket",
    priceShillings: 3599,
    keywords: ["Generic", "Clothing"]
  },
  {
    id: "p3",
    image: "images/watches/naviforce watch.jpeg",
    name: "Silver Naviforce Watch",
    priceShillings: 4499,
    keywords: ["Naviforce", "Watches"]
  },
  {
    id: "p33",
    image: "images/watches/casio black square face chrono watch.jpeg",
    name: "Casio Square Face Chronograph Watch",
    priceShillings: 3499,
    keywords: ["Casio", "Watches", "battery powered"]
  },
  {
    id: "p4",
    image: "images/sneakers/knu vans.jpeg",
    name: "Knu Vans Sneakers",
    priceShillings: 3999,
    keywords: ["Vans", "Sneakers"]
  },
  {
    id: "p5",
    image: "images/sneakers/adidas campus black pink.jpeg",
    name: 'Adidas Campus "Black Pink" Sneakers',
    priceShillings: 3799,
    keywords: ["Adidas", "Sneakers"]
  },
  {
    id: "p6",
    image: "images/clothing/blue white sweater.jpeg",
    name: "Blue White Knitted Sweater",
    priceShillings: 3599,
    keywords: ["Generic", "Clothing"]
  },
  {
    id: "p7",
    image: "images/sneakers/Black Puma Speed cat.jpeg",
    name: "Black Puma Speedcat Sneakers",
    priceShillings: 3799,
    keywords: ["Puma", "Sneakers"]
  },
  {
    id: "p8",
    image: "images/watches/Brown Megir leather chronograph.jpeg",
    name: "Brown Megir Chronograph Watch",
    priceShillings: 3999,
    keywords: ["Megir", "Watches", "battery powered"]
  },
  {
    id: "p9",
    image: "images/watches/Brown Leather automatic Patek philippe.jpeg",
    name: "Brown Automatic Patek Philippe Watch",
    priceShillings: 5999,
    keywords: ["Patek Philippe", "Watches", "automatic"]
  },
  {
    id: "p10",
    image: "images/sneakers/adidas samba OG wonder Maroon.jpeg",
    name: "Adidas Samba OG Wonder Sneakers",
    priceShillings: 3799,
    keywords: ["Adidas", "Sneakers"]
  },
  {
    id: "p11",
    image: "images/watches/Leather belt X wallet combo.jpeg",
    name: "Leather Wallet X Belt Combo",
    priceShillings: 3499,
    keywords: ["Generic", "Accessories"]
  },
  {
    id: "p12",
    image: "images/watches/Daniel wellington ladies silver watch.jpeg",
    name: "Daniel Wellington Silver Ladies Watch",
    priceShillings: 3499,
    keywords: ["Daniel Wellington", "Watches", "battery powered"]
  },
  {
    id: "p13",
    image: "images/sneakers/grey new balance 9060.jpeg",
    name: "Grey New Balance 9060",
    priceShillings: 4799,
    keywords: ["New Balance", "Sneakers"]
  },
  {
    id: "p14",
    image: "images/watches/omega automatic watch.jpeg",
    name: "Omega Automatic Watch",
    priceShillings: 7999,
    keywords: ["Omega", "Watches", "automatic"]
  },
  {
    id: "p15",
    image: "images/sneakers/samba stussy.jpeg",
    name: "Adidas Samba Stussy Sneakers",
    priceShillings: 3799,
    keywords: ["Adidas", "Sneakers"]
  },
  {
    id: "p16",
    image: "images/clothing/Knitted Sweater.jpeg",
    name: "Knitted Sweater",
    priceShillings: 3299,
    keywords: ["Generic", "Clothing"]
  },
  {
    id: "p17",
    image: "images/sneakers/Louis Vuitton X Nike SB Dunk Low.jpeg",
    name: "Louis Vuitton X Nike SB Dunk Low Sneakers",
    priceShillings: 4799,
    keywords: ["Nike", "Sneakers"]
  },
  {
    id: "p18",
    image: "images/clothing/green white swaeter.jpeg",
    name: "Green White Knitted Sweater",
    priceShillings: 3399,
    keywords: ["Generic", "Clothing"]
  },
  {
    id: "p19",
    image: "images/watches/Leather Black patek Philippe automatic.jpeg",
    name: "Black Patek Philippe Automatic Watch",
    priceShillings: 6499,
    keywords: ["Patek Philippe", "Watches", "automatic"]
  },
  {
    id: "p20",
    image: "images/sneakers/adidas campus pink fusion.jpeg",
    name: 'Adidas Campus "Pink Fusion" Sneakers',
    priceShillings: 3799,
    keywords: ["Adidas", "Sneakers"]
  }
];
