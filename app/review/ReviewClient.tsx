"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ReviewClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const productId = searchParams.get("productId");

  const [user, setUser] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!productId) {
      setError("Missing product.");
      return;
    }

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
  }

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-[var(--blue-dark)] mb-6">
        Leave a Review
      </h1>

      {error && <p className="mb-4 text-red-600">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border border-[var(--border)] rounded-[var(--radius)] p-3"
          placeholder="Your name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <select
          className="w-full border border-[var(--border)] rounded-[var(--radius)] p-3"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          {[5, 4, 3, 2, 1].map((r) => (
            <option key={r} value={r}>
              {r} Star{r !== 1 && "s"}
            </option>
          ))}
        </select>

        <textarea
          className="w-full border border-[var(--border)] rounded-[var(--radius)] p-3"
          rows={4}
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button className="w-full bg-[var(--brown)] text-white font-semibold rounded-[var(--radius)] py-3">
          Submit Review
        </button>
      </form>
    </main>
  );
}
