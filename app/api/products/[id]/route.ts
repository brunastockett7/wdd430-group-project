import { NextResponse } from 'next/server';

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

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
    const { id } = await params;
  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return NextResponse.json(
      { message: 'Product not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}
