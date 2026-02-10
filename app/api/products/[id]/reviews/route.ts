import { NextRequest, NextResponse } from "next/server";

type Review = {
  productId: string;
  user: string;
  rating: number;
  comment: string;
  createdAt: string;
};

const reviewStore: Review[] = [];

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> } 
) {
  const { id} = await params;  // await the promise
  const reviews = reviewStore.filter((r) => r.productId === id);
  return NextResponse.json(reviews);
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> } 
) {
  const { id: productId } = await params;

  const body = await req.json();
  const user = String(body.user ?? "").trim();
  const rating = Number(body.rating);
  const comment = String(body.comment ?? "").trim();

  if (!user || user.length < 2) {
    return NextResponse.json({ error: "Name required" }, { status: 400 });
  }

  if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
    return NextResponse.json({ error: "Rating must be 1-5" }, { status: 400 });
  }

  if (!comment || comment.length < 5) {
    return NextResponse.json({ error: "Comment required" }, { status: 400 });
  }

  const newReview: Review = {
    productId,
    user,
    rating,
    comment,
    createdAt: new Date().toISOString(),
  };

  reviewStore.unshift(newReview);
  return NextResponse.json(newReview, { status: 201 });
}
