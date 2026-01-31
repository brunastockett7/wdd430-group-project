
import { NextResponse } from "next/server";
import { sellers } from "@/app/lib/data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // ✅ required in Next.js 15
  const sellerId = Number(id);

  if (Number.isNaN(sellerId)) {
    return NextResponse.json({ message: "Invalid seller id" }, { status: 400 });
  }

  const seller = sellers.find((s) => s.id === sellerId);

  if (!seller) {
    return NextResponse.json({ message: "Seller not found" }, { status: 404 });
  }

  return NextResponse.json(seller);
}
