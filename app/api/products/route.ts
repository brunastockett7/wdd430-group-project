import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    {
      id: 1,
      name: 'Handmade Ceramic Mug',
      price: 25,
      seller: 'Emily Crafts',
    },
    {
      id: 2,
      name: 'Woven Wool Scarf',
      price: 40,
      seller: 'Mountain Loom',
    },
  ];

  return NextResponse.json(products);
}
