"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";

type Seller = {
  id: number;
  name: string;
  story: string;
  craftsmanship: string;
  storyImage?: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export default function SellerProfile() {
  const params = useParams<{ id: string }>();
  const id = params?.id;

  const [seller, setSeller] = useState<Seller | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setError(null);

    fetch(`/api/sellers/${id}`)
      .then(async (res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => setSeller(data))
      .catch(() => {
        setSeller(null);
        setError("Seller not found.");
      });

    fetch(`/api/sellers/${id}/products`)
      .then(async (res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(setProducts)
      .catch(() => setProducts([]));
  }, [id]);

  if (error) {
    return (
      <main className="p-8">
        <Link href="/" className="text-[var(--blue)] font-semibold">
          ← Back to home
        </Link>
        <p className="mt-6">{error}</p>
      </main>
    );
  }

  if (!seller) return <p className="p-8">Loading…</p>;

  return (
    <main className="p-8">
      <div className="flex flex-wrap gap-4">
        <Link href="/" className="text-[var(--blue)] font-semibold">
          ← Back to home
        </Link>
        <Link href="/makers" className="text-[var(--blue)] font-semibold">
          Meet the makers
        </Link>
      </div>

      <h1 className="mt-4 text-3xl font-bold text-[var(--blue-dark)]">
        {seller.name}
      </h1>

      {seller.storyImage && (
        <div className="relative mt-6 h-80 w-full max-w-2xl overflow-hidden rounded-2xl">
          <Image
            src={seller.storyImage}
            alt={seller.name}
            fill
            className="object-cover"
          />
        </div>
      )}

      <p className="mt-5 text-[var(--muted)] leading-relaxed">
        {seller.story}
      </p>

      <h2 className="mt-8 text-2xl font-bold">Handcrafted Items</h2>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/products/${p.id}`}
            className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-5 hover:shadow-sm"
          >
            <h3 className="text-lg font-bold">{p.name}</h3>
            <p className="mt-2 text-[var(--muted)]">{p.description}</p>
            <p className="mt-3 font-bold text-[var(--brown)]">
              ${p.price}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex gap-6">
        <Link href="/" className="text-[var(--blue)] font-semibold">
          Back to Home
        </Link>
        <Link href="/makers" className="text-[var(--blue)] font-semibold">
          Back to Meet the Makers
        </Link>
      </div>
    </main>
  );
}
