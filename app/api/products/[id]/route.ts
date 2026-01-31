import { NextResponse } from "next/server";
import { products } from "../../../lib/data";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const productId = Number(id);

  if (Number.isNaN(productId)) {
    return NextResponse.json({ message: "Invalid product id" }, { status: 400 });
  }

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

