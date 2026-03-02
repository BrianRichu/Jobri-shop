export function getProduct(productId){
  //this variable saves the result
    let matchingProduct;

    //loop through the products array. now we check if the product id from the products array equals the product id from our cart and save it to matchingProduct variable.
    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });
    return matchingProduct;
}

export const products = [
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
