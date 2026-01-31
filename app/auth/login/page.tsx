"use client";

import { useAuth } from "@/app/lib/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-[var(--blue-dark)]">Login</h1>
      <p className="mt-2 text-[var(--muted)]">Welcome back.</p>

      <form
        className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
        onSubmit={(e) => {
          e.preventDefault();
          setError(null);
          try {
            login({ email, password });
            router.push("/account");
          } catch (err: any) {
            setError(err?.message || "Login failed.");
          }
        }}
      >
        {error ? (
          <p className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm">
            {error}
          </p>
        ) : null}

        <label className="block text-sm font-semibold text-[var(--blue-dark)]">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
          className="mt-2 w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3"
          placeholder="you@example.com"
        />

        <label className="mt-4 block text-sm font-semibold text-[var(--blue-dark)]">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
          className="mt-2 w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3"
          placeholder="Your password"
        />

        <button className="mt-5 w-full rounded-full border border-[var(--border)] px-6 py-3 font-semibold hover:shadow-sm">
          Login
        </button>

        <p className="mt-4 text-center text-sm text-[var(--muted)]">
          No account yet?{" "}
          <Link href="/auth/register" className="font-semibold text-[var(--blue)]">
            Create one
          </Link>
        </p>
      </form>
    </main>
  );
}
