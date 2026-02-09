"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { Product, Review } from "../../lib/data";
import { addItem } from "../../lib/cart";
import styles from "../../page.module.css";



export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const API_URL = process.env.NEXT_PUBLIC_DB_API_URL;

  const id = useMemo(() => {
    const raw = params?.id;
    return Array.isArray(raw) ? raw[0] : raw;
  }, [params]);

  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || !API_URL) return;

    setLoading(true);

    fetch(`${API_URL}/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));

    fetch(`${API_URL}/api/products/${id}/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(Array.isArray(data) ? data : []))
      .catch(() => setReviews([]));
  }, [id, API_URL ]);

  if (loading) {
    return (
      <main className={styles.container}>
      </main>
    );
  }

  if (!product) {
    return (
      <main className={styles.container} style={{marginTop: 10}}>
        <div style={{ display: "flex", gap: 14 }}>
          <Link href="/" className={styles.cardLink}>Home</Link>
          <Link href="/products" className={styles.cardLink}>← Back to products</Link>
        </div>

        <p style={{ marginTop: 18 }}>Product not found.</p>
      </main>
    );
  }

  return (
    <main className={styles.container} style={{marginTop: 10}}>
      {/* Navigation */}
      <div style={{ display: "flex", gap: 14 }}>
        <Link href="/" className={styles.cardLink}>Home</Link>
        <Link href="/products" className={styles.cardLink}>← Back to products</Link>
        <Link
          href="/cart"
          className={styles.cardLink}
          style={{ marginLeft: "auto" }}
        >
          View cart →
        </Link>
      </div>

      {/* Product Detail Card */}
      <div className={styles.productDetailCard}>
        <div className={styles.productDetailImageWrapper}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 900px) 95vw, 900px"
            style={{ objectFit: "contain", padding: 14 }}
            priority
          />
        </div>

        <div className={styles.productDetailContent}>
          <h1>{product.name}</h1>

          <div className={styles.productDetailSeller}>
            by <strong>{product.sellerName}</strong>
          </div>

          <div className={styles.productDetailRating}>
            ⭐ {product.rating.toFixed(1)}
          </div>

          <p>{product.description}</p>

          <div className={styles.productDetailMaterials}>
            Materials:
            {product.materials.map((m) => (
              <span key={m}>{m}</span>
            ))}
            {product.handmade && <span>🖐 Handmade</span>}
          </div>

          {product.dimensions && (
            <div className={styles.productDetailDimensions}>
              Size: {product.dimensions}
            </div>
          )}

          <div className={styles.productActions}>
            <strong className={styles.productDetailPrice}>
              ${product.price.toFixed(2)}
            </strong>

            <button
              disabled={!product.inStock}
              onClick={() => {
                addItem(product);
                router.push("/cart");
              }}
              className={`${styles.productDetailAddButton} ${
                !product.inStock ? styles.productDetailSoldOut : ""
              }`}
            >
              {product.inStock ? "Add to cart" : "Sold out"}
            </button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className={styles.productDetailCard} style={{padding: 12}}>
        <div className={styles.productActions} style={{padding: 5}}>
          <h2>Reviews</h2>

          <Link
            href={`/products/${id}/reviews`}
            className={styles.cardLink}
            style={{ marginLeft: "auto" }}
          >
            Write a review →
          </Link>
        </div>

        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <div style={{ display: "grid", gap: 10 }}>
            {reviews.map((r) => (
              <div key={(r as any)._id} className={styles.reviewCard}>
                <strong>{r.user}</strong> – {r.rating}/5
                <div>{r.comment}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
