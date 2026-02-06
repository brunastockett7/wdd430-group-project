export type Seller = {
  id: number;
  name: string;
  story: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  sellerId: number;
  sellerName: string;
  description: string;

  category: string;
  rating: number;
  reviewsCount: number;
  materials: string[];
  dimensions?: string;
  handmade: boolean;
  inStock: boolean;
};

export type Review = {
  id: number;
  productId: number;
  user: string;
  rating: number;
  comment: string;
};

export const sellers: Seller[] = [
  {
    id: 1,
    name: "Emily Crafts",
    story:
      "I’ve been creating handmade ceramics for over 10 years. I love turning simple clay into something you’ll use every day.",
  },
  {
    id: 2,
    name: "Mountain Loom",
    story:
      "Our family has been weaving and stitching for three generations. We make pieces that feel personal, cozy, and made to last.",
  },
];

export const sellerDetails = {
  1: {
    photo: "/story/handcraft.webp",
    headline: "From clay to everyday comfort",
    fullStory:
      "I started pottery because it helped me slow down. Now it’s how I tell stories. Every piece is shaped by hand, fired with care, and made to be used — not just displayed. If it becomes part of your morning coffee routine, that makes me happy.",
  },
  2: {
    photo: "/story/friends-embroidery.webp",
    headline: "Stitching tradition with heart",
    fullStory:
      "We grew up watching our parents and grandparents weave and embroider by hand. It taught us patience and pride in the details. Our work is simple: create textiles that feel warm, thoughtful, and full of life — like something you’d keep for years.",
  },
} as const;

export const products: Product[] = [
  {
    id: 1,
    name: "Handmade Ceramic Mug",
    price: 25,
    image: "/products/mug.webp",
    sellerId: 1,
    sellerName: "Clay & Fire Studio",
    description:
      "A warm, sturdy mug made by hand — perfect for coffee, tea, and slow mornings.",
    category: "Ceramics",
    rating: 4.8,
    reviewsCount: 124,
    materials: ["Clay", "Glaze"],
    dimensions: "10cm x 9cm",
    handmade: true,
    inStock: true,
  },
  {
    id: 2,
    name: "Floral Linen Tote Bag",
    price: 40,
    image: "/products/purse.webp",
    sellerId: 2,
    sellerName: "Threaded Blooms",
    description:
      "A linen tote with hand-embroidered flowers — pretty, practical, and easy to carry.",
    category: "Textiles",
    rating: 4.6,
    reviewsCount: 89,
    materials: ["Linen", "Cotton Thread"],
    handmade: true,
    inStock: true,
  },
  {
    id: 3,
    name: "Crochet Blanket",
    price: 75,
    image: "/products/crochet-blanket.webp",
    sellerId: 2,
    sellerName: "Threaded Blooms",
    description:
      "A cozy crochet blanket made with soft yarn — the kind you grab first on a cold day.",
    category: "Crochet",
    rating: 4.9,
    reviewsCount: 156,
    materials: ["Yarn"],
    dimensions: "150cm x 120cm",
    handmade: true,
    inStock: true,
  },
  {
    id: 4,
    name: "Hand Embroidery Hoop Art",
    price: 35,
    image: "/products/embroidery.webp",
    sellerId: 2,
    sellerName: "Threaded Blooms",
    description:
      "Floral hoop art stitched slowly and carefully — a gentle touch for any room.",
    category: "Embroidery",
    rating: 4.7,
    reviewsCount: 63,
    materials: ["Fabric", "Embroidery Thread", "Wood Hoop"],
    dimensions: "20cm diameter",
    handmade: true,
    inStock: true,
  },
  {
    id: 5,
    name: "Carved Wooden Box",
    price: 55,
    image: "/products/wooden-box.webp",
    sellerId: 1,
    sellerName: "Oak & Hand",
    description:
      "A small carved wooden box for keepsakes — made to hold the little things that matter.",
    category: "Woodwork",
    rating: 4.8,
    reviewsCount: 71,
    materials: ["Wood"],
    handmade: true,
    inStock: true,
  },
  {
    id: 6,
    name: "Handcrafted Canvas Backpack",
    price: 85,
    image: "/products/backpack.webp",
    sellerId: 2,
    sellerName: "Threaded Blooms",
    description:
      "A durable handmade backpack — designed for daily use and adventure.",
    category: "Bags",
    rating: 4.5,
    reviewsCount: 94,
    materials: ["Canvas", "Leather Straps"],
    handmade: true,
    inStock: true,
  },
  {
    id: 7,
    name: "Clay Cup",
    price: 30,
    image: "/products/clay-cup.webp",
    sellerId: 1,
    sellerName: "Clay & Fire Studio",
    description:
      "A hand-shaped clay cup, fired and glazed for a natural, earthy feel.",
    category: "Ceramics",
    rating: 4.9,
    reviewsCount: 52,
    materials: ["Clay", "Glaze"],
    handmade: true,
    inStock: true,
  },
  {
    id: 8,
    name: "Beaded Handmade Bracelet",
    price: 20,
    image: "/products/bracelet.webp",
    sellerId: 1,
    sellerName: "Oak & Hand",
    description:
      "A delicate handmade bracelet crafted with carefully selected beads for everyday wear.",
    category: "Jewelry",
    rating: 4.6,
    reviewsCount: 138,
    materials: ["Beads", "Elastic Cord"],
    handmade: true,
    inStock: true,
  },
  {
    id: 9,
    name: "Clay Vase",
    price: 65,
    image: "/products/vase.webp",
    sellerId: 2,
    sellerName: "Clay & Fire Studio",
    description:
      "A handcrafted clay vase — elegant, timeless, and perfect for fresh or dried flowers.",
    category: "Ceramics",
    rating: 4.8,
    reviewsCount: 47,
    materials: ["Clay", "Glaze"],
    dimensions: "25cm height",
    handmade: true,
    inStock: true,
  },
  {
    id: 10,
    name: "Mini Wooden House Decor",
    price: 45,
    image: "/products/mini-wood-house.webp",
    sellerId: 1,
    sellerName: "Oak & Hand",
    description:
      "A charming mini house carved from wood — a cozy decorative piece with handmade character.",
    category: "Home Decor",
    rating: 4.7,
    reviewsCount: 59,
    materials: ["Wood"],
    handmade: true,
    inStock: true,
  },
  {
    id: 11,
    name: "Rainbow Crochet Wall Decor",
    price: 50,
    image: "/products/rainbow-crochet.webp",
    sellerId: 2,
    sellerName: "Threaded Blooms",
    description:
      "A hand-crocheted rainbow wall piece made with soft yarn — cheerful, colorful, and perfect for brightening any space.",
    category: "Crochet",
    rating: 4.9,
    reviewsCount: 83,
    materials: ["Yarn"],
    handmade: true,
    inStock: true,
  },
];



export const reviewsByProduct: Record<number, Review[]> = {
  1: [
    {
      id: 1,
      productId: 1,
      user: "Alice",
      rating: 5,
      comment: "Loved this mug! It feels so special and handmade in the best way.",
    },
  ],
};


export const makersGallery = [
  {
    id: "handcraft",
    title: "Emily Crafts",
    photo: "/story/handcraft.webp",
    description:
      "I’ve been creating handmade ceramics for over 10 years, turning clay into everyday pieces meant to be used and loved.",
  },
  {
    id: "friends-embroidery",
    title: "Mountain Loom",
    photo: "/story/friends-embroidery.webp",
    description:
      "Our family has been weaving and stitching for generations, creating cozy and meaningful textiles.",
  },
  {
    id: "date-night",
    title: "Date Night in the Studio",
    photo: "/story/date-night.webp",
    description:
      "Quiet evenings in the studio are where creativity flows and handmade work comes to life.",
  },
  {
    id: "kids",
    title: "Made With Family",
    photo: "/story/kids.webp",
    description:
      "Handcrafted work is part of our family life — creating together and learning together.",
  },
  {
    id: "woman",
    title: "The Maker",
    photo: "/story/woman.webp",
    description:
      "Every stitch and shape takes patience. The details are what make handmade special.",
  },
  {
    id: "woodblog2",
    title: "Woodworking Story",
    photo: "/story/woodblog2.webp",
    description:
      "Woodworking is slow and careful — shaping something useful that lasts for years.",
  },
] as const;
