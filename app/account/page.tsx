"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/lib/auth";

export default function AccountPage() {
  const { user, isReady, setMembership } = useAuth();
  const router = useRouter();
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    if (isReady && !user) router.push("/auth/login");
  }, [isReady, user, router]);

  if (!isReady || !user) return null;

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-[var(--blue-dark)]">Your account</h1>

      <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
        <p className="text-sm text-[var(--muted)]">Name</p>
        <p className="font-semibold">{user.name}</p>

        <p className="mt-4 text-sm text-[var(--muted)]">Email</p>
        <p className="font-semibold">{user.email}</p>

        <p className="mt-4 text-sm text-[var(--muted)]">Membership</p>
        <p className="font-semibold">
          {user.membership ? user.membership.toUpperCase() : "None"}
        </p>

        <div className="mt-6 grid gap-3">
          <button
            onClick={() => {
              setMembership("silver");
              setMsg("Membership updated to Silver ✅");
            }}
            className="rounded-full border border-[var(--border)] px-6 py-3 font-semibold hover:shadow-sm"
          >
            Join / Switch to Silver
          </button>

          <button
            onClick={() => {
              setMembership("gold");
              setMsg("Membership updated to Gold ✅");
            }}
            className="rounded-full border border-[var(--border)] px-6 py-3 font-semibold hover:shadow-sm"
          >
            Join / Switch to Gold
          </button>
        </div>

        {msg ? <p className="mt-4 text-sm text-[var(--muted)]">{msg}</p> : null}
      </div>

      <div className="mt-6 flex gap-3">
        <Link
          href="/classes#membership"
          className="rounded-full border border-[var(--border)] px-6 py-3 font-semibold hover:shadow-sm"
        >
          Back to Membership
        </Link>
        <Link
          href="/products"
          className="rounded-full border border-[var(--border)] px-6 py-3 font-semibold hover:shadow-sm"
        >
          Browse Products
        </Link>
      </div>
    </main>
  );
}
