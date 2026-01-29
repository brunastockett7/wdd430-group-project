import { NextResponse } from 'next/server';

const reviews: Record<number, { id: number; user: string; rating: number; comment: string }[]> = {
  1: [
    { id: 1, user: "Alice", rating: 5, comment: "Loved this mug!" },
    { id: 2, user: "Bob", rating: 4, comment: "Great quality, but a bit small." },
  ],
  2: [
    { id: 1, user: "Charlie", rating: 4, comment: "Warm and cozy scarf!" },
  ],
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> } 
) {
  const { id } = await params; 
  const productId = Number(id);

  if (Number.isNaN(productId)) {
    return NextResponse.json({ message: 'Invalid product id' }, { status: 400 });
  }

  return NextResponse.json(reviews[productId] || []);
}
