import { NextResponse } from "next/server";
import { products } from "@/app/lib/data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // ✅ MUST await
  const sellerId = Number(id);

  if (Number.isNaN(sellerId)) {
    return NextResponse.json(
      { message: "Invalid seller id" },
      { status: 400 }
    );
  }

  const sellerProducts = products.filter(
    (p) => p.sellerId === sellerId
  );

  return NextResponse.json(sellerProducts);
}
