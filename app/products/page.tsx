"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { products as prod, Product } from "../lib/data";
import { addItem } from "../lib/cart";
import SearchBar from "../../components/SearchBar";
import styles from "../page.module.css"; // import CSS module



export default function ProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  
  const API_URL = process.env.NEXT_PUBLIC_DB_API_URL;

  useEffect(() => {
    if (!API_URL) return;

    fetch(`${API_URL}/api/products`)
    .then((res) => res.json())
    .then((data: Product[]) => {
      setProducts(data);
      setAllProducts(data);
    })
      
  }, [API_URL]);

  const prods = allProducts.length > 0 ? allProducts : prod;

  // Extract unique categories
  const categories = Array.from(new Set(prods.map((p) => p.category)));

  // Handle search + filters
  const handleSearch = (query: string, category: string, maxPrice: number) => {
    if (products != null) {
      const filtered = prods.filter((p) => {
        let matchesQuery = false;
        if (p.name.toLowerCase().includes(query.toLowerCase())) {
          matchesQuery = true;
        }
        p.materials.forEach(M => {
          if (M.toLowerCase().includes(query.toLowerCase())){
            matchesQuery = true;
          }
        });
        const matchesCategory = category ? p.category === category : true;
        const matchesPrice = maxPrice ? p.price <= maxPrice : true;
        return matchesQuery && matchesCategory && matchesPrice;
      });
      setProducts(filtered);
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.sectionHeader}>
        <div>
          <h1 className={styles.sectionTitle}>Explore Products</h1>
          <p className={styles.sectionText}>Browse handcrafted items made with care.</p>
        </div>

        <div style={{ display: "flex", gap: 14, marginBottom: -10, marginTop: 10}}>
          <Link href="/" className={styles.cardLink}>Home</Link>
          <Link href="/cart" className={styles.cardLink}>View cart →</Link>
        </div>
      </div>

      {/* Search + Filter Bar */}
      <SearchBar categories={categories} onSearch={handleSearch} />

      {/* Product Grid */}
      {products == null || products.length === 0 ? (
        <p style={{ marginTop: 18 }}>Oops, there are no availiable products.</p>
      ) : (<div className={styles.productsGrid}>
            {products.map((p) => (
              <div key={p.id} className={styles.productCard}>
                <Link href={`/products/${p.id}`}>
                    <div className={styles.productImageWrapper}>
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 900px) 95vw, 900px"
                        style={{ objectFit: "contain", padding: 10 }}
                        priority={p.id === 1}
                      />
                    </div>

                </Link>
                
                <div className={styles.productContent}>
                  <Link href={`/products/${p.id}`}>
                    <h2 className={styles.productName}>{p.name}</h2>
                  </Link>
                  
                  <p className={styles.productDescription}>{p.description}</p>
                  <strong className={styles.productPrice}>${p.price.toFixed(2)}</strong>

                  <div className={styles.productActions}>
                    <Link href={`/products/${p.id}`} className={styles.cardLink}>
                      View details →
                    </Link>

                    <button
                      disabled={!p.inStock}
                      onClick={() => {
                        addItem(p);
                        router.push("/cart");
                      }}
                      className={`${styles.productButton} ${
                        !p.inStock ? styles.productDetailSoldOut : ""
                      }`}
                    >
                      {p.inStock ? "Add to cart" : "Sold out"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>)}     
    </main>
  );
}
