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
              <h2 style={{ margin: "0 0 6px" }}>{p.name}</h2>

              <div style={{ fontSize: 14, color: "#555", marginBottom: 6 }}>
  ⭐ {p.rating} ({p.reviewsCount})
</div>

              <p style={{ margin: "0 0 10px", fontSize: 14 }}>{p.description}</p>
              <strong>${p.price.toFixed(2)}</strong>

              <div style={{ fontSize: 13, color: "#666", marginBottom: 8 }}>
  Materials: {p.materials.join(", ")}
</div>

              {p.handmade && (
                <span style={{
                  fontSize: 12,
                  background: "#fef3c7",
                  padding: "4px 8px",
                  borderRadius: 999,
                  marginRight: 6
                }}>
                  🖐 Handmade
                </span>
              )}

              
              <div style={{ fontSize: 13, color: "#666", marginBottom: 6 }}>
  by <strong>{p.sellerName}</strong>
</div>


              {!p.inStock && (
                <span style={{
                  fontSize: 12,
                  color: "crimson",
                  fontWeight: 600
                }}>
                  Out of stock
                </span>
              )}


              <div style={{ display: "flex", gap: 10, marginTop: 12, alignItems: "center" }}>
                <Link href={`/products/${p.id}`} style={{ textDecoration: "underline" }}>
                  View details →
                </Link>

                <button
                  disabled={!p.inStock}
                  onClick={() => {
                    addItem(p);
                    router.push("/cart");
                  }}
                  style={{
                    marginLeft: "auto",
                    padding: "8px 12px",
                    borderRadius: 999,
                    border: "1px solid #333",
                    background: p.inStock ? "transparent" : "#eee",
                    cursor: p.inStock ? "pointer" : "not-allowed",
                    opacity: p.inStock ? 1 : 0.6,
                  }}
                >
                  {p.inStock ? "Add to cart" : "Sold out"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}


