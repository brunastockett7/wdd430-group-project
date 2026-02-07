"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function ReviewClient() {
  const params = useParams();
  const router = useRouter();

  const productId = typeof params.id === "string" ? params.id : "";

  const [user, setUser] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!productId) {
      setError("Invalid product ID");
      return;
    }

    try {
      const res = await fetch(`/api/products/${productId}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, rating, comment }),
      });

      if (!res.ok) {
        setError("Failed to submit review.");
        return;
      }

      router.push(`/products/${productId}`);
    } catch (err) {
      setError("Something went wrong.");
    }
  }

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ display: "flex", gap: 14, marginBottom: 18 }}>
        <Link href="/" style={{ textDecoration: "underline" }}>
          Home
        </Link>
        <Link href="/products" style={{ textDecoration: "underline" }}>
          ← Back to products
        </Link>
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 12,
          background: "#fff",
          padding: 24,
          maxWidth: 520,
          margin: "0 auto",
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
        <h1 style={{ margin: "0 0 16px" }}>Leave a review</h1>

        {error && (
          <p style={{ color: "#b91c1c", marginBottom: 12 }}>{error}</p>
        )}

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 14 }}>
          <input
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 8,
              border: "1px solid #ccc",
              fontSize: 14,
            }}
            placeholder="Your name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />

          <label style={{ fontSize: 13, color: "#444" }}>
            Rating
            <select
              value={rating.toString()}
              onChange={(e) => setRating(parseInt(e.target.value, 10))}
              style={{
                marginTop: 6,
                width: "100%",
                padding: 12,
                borderRadius: 8,
                border: "1px solid #ccc",
                fontSize: 14,
              }}
            >
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r.toString()}>
                  {r} Star{r !== 1 && "s"}
                </option>
              ))}
            </select>
          </label>

          <textarea
            rows={4}
            placeholder="Write your review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 8,
              border: "1px solid #ccc",
              fontSize: 14,
              resize: "vertical",
            }}
          />

          <button
            type="submit"
            style={{
              marginTop: 6,
              padding: "12px 16px",
              borderRadius: 999,
              border: "1px solid #111",
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            Submit review
          </button>
        </form>
      </div>
    </main>
  );
}