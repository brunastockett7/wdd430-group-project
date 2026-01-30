import Image from "next/image";
import styles from "./Home.module.css";
import Header from "./ui/header";
import Footer from "./ui/footer";
import SearchBar from "./ui/search-bar";
import ProductWrapper from "./ui/products";
import ProfileWrapper from "./ui/profiles";
import{ products, profiles } from "./lib/placeholder-data";

export default async function Home() {
  return (
    <>
      <Header styles={styles} />
      <main className={styles.main}>
        <h2 className={styles.title}>HandCrafted Haven</h2>
        <p className={styles.subtitle}>Unique crafts. Beautifully made. Ready for you.</p>
        <div className={styles.hero}>
          <Image 
            className={styles.heroImg} 
            src="/hero-banner.jpg" 
            alt="HandCrafted Haven Banner" 
            width={200} 
            height={200} priority/>
          <p className={styles.heroOverlay}>“Discover handmade treasures crafted with passion — all in one place.”</p>
        </div>
        <SearchBar styles={styles} />
        <h3 className={styles.sectionHeader}>Top Artworks</h3>
        <ProductWrapper products={products} styles={styles} />
        <h3 className={styles.sectionHeader}>Top Artists</h3>
        <ProfileWrapper profiles={profiles} styles={styles} />
      </main>
      <Footer styles={styles} />
    </>
  );
}
