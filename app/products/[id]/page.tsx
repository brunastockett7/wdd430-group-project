"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { Product, Review } from "../../lib/data";
import { addItem } from "../../lib/cart";

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();

  const id = useMemo(() => {
    const raw = params?.id;
    return Array.isArray(raw) ? raw[0] : raw;
  }, [params]);

  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));

    fetch(`/api/products/${id}/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(Array.isArray(data) ? data : []))
      .catch(() => setReviews([]));
  }, [id]);

  if (loading) {
    return <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px" }}>Loading product...</main>;
  }

  if (!product) {
    return (
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ display: "flex", gap: 14 }}>
          <Link href="/" style={{ textDecoration: "underline" }}>
            Home
          </Link>
          <Link href="/products" style={{ textDecoration: "underline" }}>
            ← Back to products
          </Link>
        </div>
        <p style={{ marginTop: 18 }}>Product not found.</p>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ display: "flex", gap: 14 }}>
        <Link href="/" style={{ textDecoration: "underline" }}>
          Home
        </Link>
        <Link href="/products" style={{ textDecoration: "underline" }}>
          ← Back to products
        </Link>
        <Link href="/cart" style={{ marginLeft: "auto", textDecoration: "underline" }}>
          View cart →
        </Link>
      </div>


      <div
          style={{
            marginTop: 18,
            border: "1px solid #ddd",
            borderRadius: 12,
            overflow: "hidden",
            background: "#fff",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
  <div style={{ position: "relative", width: "100%", height: 260, background: "#f5f5f5" }}>
    <Image
      src={product.image}
      alt={product.name}
      fill
      sizes="(max-width: 900px) 95vw, 900px"
      style={{ objectFit: "contain", padding: 14 }}
      priority
    />
  </div>

  <div style={{ padding: 24 }}>
    <h1 style={{ margin: "0 0 8px" }}>{product.name}</h1>

    <div style={{ fontSize: 13, color: "#666", marginBottom: 6 }}>
      by <strong>{product.sellerName}</strong>
    </div>

    <div style={{ fontSize: 14, color: "#555", marginBottom: 12 }}>
      ⭐ {product.rating}
    </div>

    <p style={{ margin: "0 0 12px", lineHeight: 1.5 }}>{product.description}</p>

    <div style={{ fontSize: 13, color: "#666", marginBottom: 12 }}>
      Materials: {product.materials.join(", ")}
      {product.handmade && (
        <span
          style={{
            marginLeft: 8,
            background: "#fef3c7",
            padding: "2px 8px",
            borderRadius: 999,
            fontSize: 12,
          }}
        >
          🖐 Handmade
        </span>
      )}
    </div>

    {product.dimensions && (
      <div style={{ fontSize: 13, color: "#666", marginBottom: 12 }}>
        Size: {product.dimensions}
      </div>
    )}

    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <strong style={{ fontSize: 18 }}>${product.price.toFixed(2)}</strong>

      <button
        disabled={!product.inStock}
        onClick={() => {
          addItem(product);
          router.push("/cart");
        }}
        style={{
          padding: "10px 16px",
          borderRadius: 999,
          border: "1px solid #333",
          background: product.inStock ? "transparent" : "#eee",
          cursor: product.inStock ? "pointer" : "not-allowed",
          opacity: product.inStock ? 1 : 0.6,
        }}
      >
        {product.inStock ? "Add to cart" : "Sold out"}
      </button>
    </div>
  </div>
</div>

      <div style={{ marginTop: 18, border: "1px solid #ddd", borderRadius: 12, padding: 16, background: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <h2 style={{ margin: 0 }}>Reviews</h2>

          <Link
            href={`/products/${id}/review`}
            style={{
              fontSize: 13,
              textDecoration: "underline",
              color: "#111",
              marginLeft: "auto",
            }}
          >
            Write a review →
          </Link>
        </div>

        {reviews.length === 0 ? (
          <p style={{ margin: 0 }}>No reviews yet.</p>
        ) : (
          <div style={{ display: "grid", gap: 10 }}>
            {reviews.map((r) => (
              <div key={r.id}>
                <strong>{r.user}</strong> — {r.rating}/5
                <div>{r.comment}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}