"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { products } from "../lib/data";
import { addItem } from "../lib/cart";

export default function ProductsPage() {
  const router = useRouter();

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div>
          <h1>Explore Products</h1>
          <p>Browse handcrafted items made with care.</p>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          <Link href="/" style={{ textDecoration: "underline" }}>
            Home
          </Link>
          <Link href="/cart" style={{ textDecoration: "underline" }}>
            View cart →
          </Link>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
          marginTop: 24,
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              overflow: "hidden",
              background: "#fff",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 140,
                background: "#f5f5f5",
              }}
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 900px) 90vw, 320px"
                style={{ objectFit: "contain", padding: 10 }}
                priority={p.id === 1}
              />
            </div>

            <div style={{ padding: 16 }}>
              <h2 style={{ margin: "0 0 8px" }}>{p.name}</h2>
              <p style={{ margin: "0 0 10px" }}>{p.description}</p>
              <strong>${p.price.toFixed(2)}</strong>

              <div style={{ display: "flex", gap: 10, marginTop: 12, alignItems: "center" }}>
                <Link href={`/products/${p.id}`} style={{ textDecoration: "underline" }}>
                  View details →
                </Link>

                <button
                  onClick={() => {
                    addItem(p);
                    router.push("/cart");
                  }}
                  style={{
                    marginLeft: "auto",
                    padding: "8px 12px",
                    borderRadius: 999,
                    border: "1px solid #333",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}


