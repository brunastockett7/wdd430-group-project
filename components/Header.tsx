"use client";

import Link from "next/link";
import { useState } from "react";
import AuthStatus from "./AuthStatus";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="siteHeader">
      <div className="headerInner">
        <Link href="/" className="logo" onClick={closeMenu}>
          Handcrafted <span>Haven</span>
        </Link>

        {/* Desktop links */}
        <nav className="navDesktop">
          <Link href="/products">Products</Link>
          <Link href="/classes">Classes</Link>
          <Link href="/membership">Membership</Link>
          <AuthStatus />
        </nav>

        {/* Mobile button */}
        <button
          className="menuButton"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <nav className="navMobile">
          <Link href="/products" onClick={closeMenu}>Products</Link>
          <Link href="/classes" onClick={closeMenu}>Classes</Link>
          <Link href="/membership" onClick={closeMenu}>Membership</Link>

          <div className="mobileAuth">
            <AuthStatus />
          </div>
        </nav>
      )}
    </header>
  );
}
