import type { Product } from "./data";

export type CartItem = Product & { qty: number };

const KEY = "hh_cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveCart(cart: CartItem[]) {
  localStorage.setItem(KEY, JSON.stringify(cart));
}

export function addItem(product: Product): CartItem[] {
  const cart = getCart();
  const existing = cart.find((x) => x.id === product.id);

  if (existing) existing.qty += 1;
  else cart.push({ ...product, qty: 1 });

  saveCart(cart);
  return cart;
}

export function removeOne(productId: number): CartItem[] {
  const cart = getCart()
    .map((x) => (x.id === productId ? { ...x, qty: x.qty - 1 } : x))
    .filter((x) => x.qty > 0);

  saveCart(cart);
  return cart;
}

export function removeAll(productId: number): CartItem[] {
  const cart = getCart().filter((x) => x.id !== productId);
  saveCart(cart);
  return cart;
}

export function clearCart() {
  saveCart([]);
}

export function total(cart: CartItem[]) {
  return cart.reduce((sum, x) => sum + x.price * x.qty, 0);
}
