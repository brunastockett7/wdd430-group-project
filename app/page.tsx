import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const categories = [
  { name: "Pottery", img: "/categories/pottery.webp" },
  { name: "Sewing", img: "/categories/sewing.webp" },
  { name: "Crochet", img: "/categories/crochet.webp" },
  { name: "Woodworking", img: "/categories/woodworking.webp" },
];

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <Image
          src="/images/hero.webp"
          alt="Hands shaping pottery on a wheel"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <p className={styles.kicker}>Handmade • Thoughtful • One of a kind</p>

          <h1 className={styles.heroTitle}>
            Discover handcrafted pieces made with heart and purpose
          </h1>

          <p className={styles.heroSubtitle}>
            Support real makers and find unique items created with care,
            tradition, and creativity.
          </p>

          <div className={styles.heroActions}>
            <Link href="/products" className={styles.primaryBtn}>
              Explore products
            </Link>

            <Link href="/makers" className={styles.secondaryBtn}>
              Meet the makers
            </Link>

            <Link href="/classes" className={styles.secondaryBtn}>
              Join classes
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Shop by craft</h2>
            <p className={styles.sectionText}>
              Browse handmade items by the craft that speaks to you.
            </p>
          </header>

          <div className={styles.grid}>
            {categories.map((c) => (
              <Link
                key={c.name}
                href={`/products?category=${encodeURIComponent(c.name)}`}
                className={styles.card}
              >
                <div className={styles.cardMedia}>
                  <Image
                    src={c.img}
                    alt={`${c.name} handmade craft`}
                    fill
                    className={styles.cardImage}
                  />
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{c.name}</h3>
                  <span className={styles.cardLink}>Browse {c.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.storySection}`}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div>
              <h2 className={styles.sectionTitle}>Crafted with care</h2>
              <p className={styles.sectionText}>
                Every piece on Handcrafted Haven is made by real people who care
                deeply about their craft. From shared family moments to quiet
                hours in the workshop, these creations carry meaning beyond the
                material.
              </p>

              <ul className={styles.bullets}>
                <li>Made by independent artisans</li>
                <li>Small batches, no mass production</li>
                <li>Built to last and be loved</li>
              </ul>
            </div>

            <div className={styles.storyImages}>
              <div className={styles.storyImg}>
                <Image
                  src="/story/kids-webp.jpg"
                  alt="Children learning pottery"
                  fill
                  className={styles.cardImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footerTitle}>Handcrafted Haven</p>
          <p className={styles.footerText}>
            Celebrating handmade work, small makers, and thoughtful design
          </p>
        </div>
      </footer>
    </main>
  );
}
