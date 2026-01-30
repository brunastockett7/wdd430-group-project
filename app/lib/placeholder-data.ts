import { NextResponse } from "next/server";



const products = [
  {
    id: 1,
    name: "Balls of Yarn",
    price: 9.99,
    image: "/product.jpg",
    artistId: 1
  },
  {
    id: 2,
    name: "Handmade Scarf",
    price: 24.99,
    image: "/product.jpg",
    artistId: 2
  },
  {
    id: 3,
    name: "Woven Basket",
    price: 18.5,
    image: "/product.jpg",
    artistId: 1
  },
  {
    id: 4,
    name: "Ceramic Mug",
    price: 15.0,
    image: "/product.jpg",
    artistId: 3
  }, 
  {
    id: 5,
    name: "Wooden Spoon Set",
    price: 12.75,
    image: "/product.jpg",
    artistId: 2
  }
];

const profiles = [
  {
    id: 1,
    name: "Sarah Johnson",
    bio: "Handmade crafts enthusiast and local artist.",
    image: "/user.png"
  },
  {
    id: 2,
    name: "Michael Chen",
    bio: "Woodworking expert and sculptor.",
    image: "/user.png"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    bio: "Ceramic artist specializing in functional pottery.",
    image: "/user.png"
  }
];

export { products, profiles }
