"use client";

import { useAuth } from "@/app/lib/auth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  const plan = useMemo(() => {
    const p = searchParams.get("plan");
    return p === "gold" ? "gold" : p === "silver" ? "silver" : undefined;
  }, [searchParams]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<string | null>(null);

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-[var(--blue-dark)]">Create your account</h1>
      <p className="mt-2 text-[var(--muted)]">
        {plan ? `You’re joining the ${plan.toUpperCase()} membership.` : "Create an account to join membership and save your profile."}
      </p>

      <form
        className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
        onSubmit={(e) => {
          e.preventDefault();
          setError(null);
          try {
            register({ name, email, password, plan });
            router.push("/account");
          } catch (err: any) {
            setError(err?.message || "Could not create account.");
          }
        }}
      >
        {error ? (
          <p className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm">
            {error}
          </p>
        ) : null}

        <label className="block text-sm font-semibold text-[var(--blue-dark)]">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-2 w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3"
          placeholder="Your name"
        />

        <label className="mt-4 block text-sm font-semibold text-[var(--blue-dark)]">Email</label>
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
          placeholder="Create a password"
        />

        <button className="mt-5 w-full rounded-full border border-[var(--border)] px-6 py-3 font-semibold hover:shadow-sm">
          Create account
        </button>

        <p className="mt-4 text-center text-sm text-[var(--muted)]">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-semibold text-[var(--blue)]">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}
