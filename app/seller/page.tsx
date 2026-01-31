"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Seller = { id: number; name: string; story: string };

export default function SellerPage() {
  const [sellers, setSellers] = useState<Seller[]>([]);

  useEffect(() => {
    fetch("/api/sellers").then((res) => res.json()).then(setSellers);
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-[var(--blue-dark)] mb-6">
        Our Artisans
      </h1>

      <div className="grid gap-4 md:grid-cols-2">
        {sellers.map((s) => (
          <Link
            key={s.id}
            href={`/seller/${s.id}`}
            className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-5 hover:shadow-sm"
          >
            <h2 className="text-xl font-bold">{s.name}</h2>
            <p className="mt-2 text-[var(--muted)]">{s.story}</p>
            <p className="mt-3 font-semibold text-[var(--brown)]">
              View profile →
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
