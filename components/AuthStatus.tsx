"use client";

import Link from "next/link";
import { useAuth } from "../app/lib/auth";

export default function AuthStatus() {
  const { user, logout, isReady } = useAuth();

  if (!isReady) return null;

  if (!user) {
    return (
      <div className="flex items-center gap-3">
        <Link href="/auth/login" className="text-[var(--blue)]">
          Login
        </Link>
        <Link
          href="/auth/register"
          className="rounded-full border border-[var(--border)] px-4 py-2 hover:shadow-sm"
        >
          Create account
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Link href="/account" className="text-[var(--blue)]">
        Hi, {user.name}
      </Link>
      <button
        onClick={logout}
        className="rounded-full border border-[var(--border)] px-4 py-2 hover:shadow-sm"
      >
        Logout
      </button>
    </div>
  );
}
