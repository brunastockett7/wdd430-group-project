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
          <p style={{ margin: "0 0 12px" }}>{product.description}</p>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <strong style={{ fontSize: 18 }}>${product.price.toFixed(2)}</strong>

            <button
              onClick={() => {
                addItem(product);
                router.push("/cart");
              }}
              style={{
                padding: "10px 16px",
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

      <div style={{ marginTop: 18, border: "1px solid #ddd", borderRadius: 12, padding: 16, background: "#fff" }}>
        <h2 style={{ margin: "0 0 10px" }}>Reviews</h2>

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

