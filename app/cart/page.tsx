"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CartItem, clearCart, getCart, removeAll, removeOne, total } from "../lib/cart";

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const cartTotal = total(cart);

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px" }}>
      <h1>Your Cart</h1>

      <div style={{ display: "flex", gap: 14, marginTop: 6 }}>
        <Link href="/" style={{ textDecoration: "underline" }}>
          Home
        </Link>
        <Link href="/products" style={{ textDecoration: "underline" }}>
          ← Back to products
        </Link>
      </div>

      {cart.length === 0 ? (
        <p style={{ marginTop: 18 }}>Your cart is empty.</p>
      ) : (
        <>
          <div style={{ marginTop: 18, display: "grid", gap: 12 }}>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "center",
                  border: "1px solid #ddd",
                  borderRadius: 12,
                  padding: 12,
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    width: 70,
                    height: 70,
                    position: "relative",
                    borderRadius: 10,
                    overflow: "hidden",
                    background: "#f5f5f5",
                  }}
                >
                  <Image src={item.image} alt={item.name} fill style={{ objectFit: "cover" }} />
                </div>

                <div style={{ flex: 1 }}>
                  <strong>{item.name}</strong>
                  <div>${item.price.toFixed(2)}</div>

                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 6 }}>
                    <span>Qty: {item.qty}</span>

                    <button
                      onClick={() => {
                        removeOne(item.id);
                        setCart(getCart());
                      }}
                      style={{
                        marginLeft: 10,
                        textDecoration: "underline",
                        cursor: "pointer",
                        background: "transparent",
                        border: "none",
                        padding: 0,
                      }}
                    >
                      Remove one
                    </button>

                    <button
                      onClick={() => {
                        removeAll(item.id);
                        setCart(getCart());
                      }}
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        background: "transparent",
                        border: "none",
                        padding: 0,
                      }}
                    >
                      Remove all
                    </button>
                  </div>
                </div>

                <strong>${(item.price * item.qty).toFixed(2)}</strong>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18, alignItems: "center" }}>
            <button
              onClick={() => {
                clearCart();
                setCart(getCart());
              }}
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                background: "transparent",
                border: "none",
                padding: 0,
              }}
            >
              Clear cart
            </button>

            <strong>Total: ${cartTotal.toFixed(2)}</strong>
          </div>
        </>
      )}
    </main>
  );
}
