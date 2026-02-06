"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ReviewClient() {
  const params = useParams();
  const router = useRouter();

  // Make sure id exists
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
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Leave a Review</h1>

      {error && <p className="mb-4 text-red-600">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border rounded p-3"
          placeholder="Your name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />

        <label className="block mb-1 font-semibold">
  Rating
  <select
    className="w-full border rounded p-3"
    value={rating.toString()}
    onChange={(e) => setRating(parseInt(e.target.value, 10))}
  >
    {[5, 4, 3, 2, 1].map((r) => (
      <option key={r} value={r.toString()}>
        {r} Star{r !== 1 && "s"}
      </option>
    ))}
  </select>
</label>

        <textarea
          className="w-full border rounded p-3"
          rows={4}
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />

        <button className="w-full bg-black text-white rounded py-3">
          Submit Review
        </button>
      </form>
    </main>
  );
}
