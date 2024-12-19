// mockData.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  color: string;
  image: string;
  rating: number;
  reviews: number;
  discount: number;
}

export const mockProducts: Product[] = [
  {
      id: 1,
      name: "Blue Chikankari Material",
      description: "Chikankari unstitched material",
      price: 650,
      color: "white",
      image: "https://www.luxurionworld.com/cdn/shop/products/PF1C3SN523012303_Blue_Embroidered_Chikankari_Georgette_Sequins_Work_Fabric.jpg?v=1674471969",
      rating: 4.2,
      reviews: 1100,
      discount: 68,
  },
  {
      id: 2,
      name: "Purple Chiffon Material",
      description: "Unstitched chiffon material",
      price: 750,
      color: "pink",
      image: "https://i.etsystatic.com/35902145/r/il/582454/4960218372/il_570xN.4960218372_s5o5.jpg",
      rating: 4.1,
      reviews: 650,
      discount: 83,
  },
  {
      id: 3,
      name: "Red Chiffon Material",
      description: "Unstitched chiffon material",
      price: 750,
      color: "pink",
      image: "https://i.etsystatic.com/35902145/r/il/582454/4960218372/il_570xN.4960218372_s5o5.jpg",
      rating: 4.1,
      reviews: 12800,
      discount: 83,
  },
  {
      id: 4,
      name: "Yellow Chiffon Material",
      description: "Unstitched chiffon material",
      price: 750,
      color: "pink",
      image: "https://i.etsystatic.com/35902145/r/il/582454/4960218372/il_570xN.4960218372_s5o5.jpg",
      rating: 4.1,
      reviews: 12800,
      discount: 83,
  },
];
