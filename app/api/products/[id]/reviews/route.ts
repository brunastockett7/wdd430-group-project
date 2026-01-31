import { NextResponse } from "next/server";
import { reviewsByProduct } from "../../../../lib/data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const productId = Number(id);

  if (Number.isNaN(productId)) {
    return NextResponse.json({ message: "Invalid product id" }, { status: 400 });
  }

  return NextResponse.json(reviewsByProduct[productId] ?? []);
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const productId = Number(id);

  if (Number.isNaN(productId)) {
    return NextResponse.json({ message: "Invalid product id" }, { status: 400 });
  }

  const body = await request.json();
  const user = String(body.user ?? "Anonymous");
  const rating = Number(body.rating);
  const comment = String(body.comment ?? "");

  if (!rating || rating < 1 || rating > 5 || !comment.trim()) {
    return NextResponse.json(
      { message: "Rating (1–5) and comment are required." },
      { status: 400 }
    );
  }

  const list = reviewsByProduct[productId] ?? [];
  const nextId = (list.at(-1)?.id ?? 0) + 1;

  const newReview = { id: nextId, productId, user, rating, comment };
  reviewsByProduct[productId] = [...list, newReview];

  return NextResponse.json(newReview, { status: 201 });
}
