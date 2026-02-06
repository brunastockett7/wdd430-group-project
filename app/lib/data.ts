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
    materials: ["Clay", "Glaze"],
    handmade: true,
    inStock: false,
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
    materials: ["Yarn"],
    handmade: true,
    inStock: false,
  },
];



export const reviewsByProduct: Record<number, Review[]> = {
  1: [
    { id: 1, productId: 1, user: "Alice", rating: 5, comment: "Absolutely love this mug. Feels cozy and solid." },
    { id: 2, productId: 1, user: "Mark", rating: 4, comment: "Great craftsmanship, keeps coffee warm." },
    { id: 3, productId: 1, user: "Sophie", rating: 5, comment: "Beautiful glaze and perfect size." },
    { id: 4, productId: 1, user: "Daniel", rating: 5, comment: "You can really feel it's handmade." },
    { id: 5, productId: 1, user: "Emma", rating: 5, comment: "My new favorite mug." },
  ],

  2: [
    { id: 6, productId: 2, user: "Lena", rating: 5, comment: "The embroidery is stunning!" },
    { id: 7, productId: 2, user: "Paul", rating: 4, comment: "Very practical and lightweight." },
    { id: 8, productId: 2, user: "Nina", rating: 5, comment: "Looks even better in real life." },
    { id: 9, productId: 2, user: "Chris", rating: 4, comment: "Nice bag for everyday use." },
  ],

  3: [
    { id: 10, productId: 3, user: "Olivia", rating: 5, comment: "So soft and warm. Perfect for winter." },
    { id: 11, productId: 3, user: "Ben", rating: 5, comment: "Amazing quality yarn." },
    { id: 12, productId: 3, user: "Ivy", rating: 5, comment: "Feels handmade with love." },
    { id: 13, productId: 3, user: "Max", rating: 4, comment: "A bit heavy but very cozy." },
    { id: 14, productId: 3, user: "Anna", rating: 5, comment: "Worth every euro." },
  ],

  4: [
    { id: 15, productId: 4, user: "Kate", rating: 5, comment: "Such delicate stitching." },
    { id: 16, productId: 4, user: "Leo", rating: 4, comment: "Looks great on my wall." },
    { id: 17, productId: 4, user: "Mia", rating: 5, comment: "Very calming piece." },
    { id: 18, productId: 4, user: "Tom", rating: 4, comment: "Nice handmade decor." },
  ],

  5: [
    { id: 19, productId: 5, user: "Robert", rating: 5, comment: "Beautiful wood texture." },
    { id: 20, productId: 5, user: "Ella", rating: 5, comment: "Perfect for jewelry." },
    { id: 21, productId: 5, user: "Sam", rating: 4, comment: "Solid and well-made." },
    { id: 22, productId: 5, user: "Nora", rating: 5, comment: "Smells like real wood, love it." },
  ],

  6: [
    { id: 23, productId: 6, user: "Alex", rating: 5, comment: "Very sturdy backpack." },
    { id: 24, productId: 6, user: "Julia", rating: 4, comment: "Comfortable straps." },
    { id: 25, productId: 6, user: "Ethan", rating: 4, comment: "Good size for daily use." },
    { id: 26, productId: 6, user: "Sara", rating: 5, comment: "Looks stylish and practical." },
  ],

  7: [
    { id: 27, productId: 7, user: "Megan", rating: 5, comment: "Love the earthy feel." },
    { id: 28, productId: 7, user: "Jon", rating: 5, comment: "Great for tea." },
    { id: 29, productId: 7, user: "Lucy", rating: 4, comment: "Nice texture." },
    { id: 30, productId: 7, user: "Peter", rating: 5, comment: "Simple and beautiful." },
  ],

  8: [
    { id: 31, productId: 8, user: "Ava", rating: 5, comment: "Very delicate and comfy." },
    { id: 32, productId: 8, user: "Noah", rating: 4, comment: "Looks great with any outfit." },
    { id: 33, productId: 8, user: "Lily", rating: 5, comment: "Perfect gift idea." },
    { id: 34, productId: 8, user: "Oscar", rating: 4, comment: "Good quality beads." },
  ],

  9: [
    { id: 35, productId: 9, user: "Hannah", rating: 5, comment: "Elegant and minimal." },
    { id: 36, productId: 9, user: "Tim", rating: 4, comment: "Looks great with flowers." },
    { id: 37, productId: 9, user: "Zoe", rating: 5, comment: "Very classy." },
    { id: 38, productId: 9, user: "Ivan", rating: 5, comment: "Amazing glaze." },
  ],

  10: [
    { id: 39, productId: 10, user: "Clara", rating: 5, comment: "Super cute decor!" },
    { id: 40, productId: 10, user: "Felix", rating: 4, comment: "Nice handmade vibe." },
    { id: 41, productId: 10, user: "Maria", rating: 5, comment: "Perfect for shelves." },
    { id: 42, productId: 10, user: "Ben", rating: 4, comment: "Good quality wood." },
  ],

  11: [
    { id: 43, productId: 11, user: "Isla", rating: 5, comment: "So cheerful!" },
    { id: 44, productId: 11, user: "Theo", rating: 5, comment: "Brightens the room instantly." },
    { id: 45, productId: 11, user: "Molly", rating: 4, comment: "Soft colors and nice yarn." },
    { id: 46, productId: 11, user: "Jack", rating: 5, comment: "Perfect kids room decor." },
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
