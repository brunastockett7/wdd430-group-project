import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Providers from "./providers";
import Link from "next/link";
import AuthStatus from "../components/AuthStatus";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Added for better mobile rendering */
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description: "A marketplace for unique, handcrafted items.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {/* HEADER */}
          <header className="border-b border-[var(--border)] bg-[var(--card)]">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 p-4">
              <Link
                href="/"
                className="font-extrabold text-[var(--blue-dark)]"
              >
                Handcrafted Haven
              </Link>

              <nav className="flex items-center gap-4 text-sm font-semibold">
                <Link href="/products" className="text-[var(--blue)]">
                  Products
                </Link>
                <Link href="/classes" className="text-[var(--blue)]">
                  Classes
                </Link>
                <Link href="/classes#membership" className="text-[var(--blue)]">
                  Membership
                </Link>

                <AuthStatus />
              </nav>
            </div>
          </header>

          {/* PAGE CONTENT */}
          {children}

          {/* FOOTER */}
          <footer className="mt-16 border-t border-[var(--border)] bg-[var(--card)]">
            <div className="mx-auto max-w-6xl p-6 text-sm text-[var(--muted)]">
              <p className="font-semibold text-[var(--blue-dark)]">
                Handcrafted Haven
              </p>
              <p>
                Celebrating handmade work, small makers, and thoughtful design.
              </p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
