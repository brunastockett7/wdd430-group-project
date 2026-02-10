"use client";

import { useState } from "react";
import styles from "../app/page.module.css"; // import the CSS module

type SearchBarProps = {
  categories: string[];
  onSearch: (query: string, category: string, maxPrice: number) => void;
};

export default function SearchBar({ categories, onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, category, maxPrice === "" ? 0 : maxPrice);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search products by name"
        className={styles.searchInput}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        aria-label="Filter by category"
        className={styles.searchSelect}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <input
        type="number"
        min={0}
        placeholder="Max price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        aria-label="Filter by maximum price"
        className={styles.searchNumber}
      />

      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
}
