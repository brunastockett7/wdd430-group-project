import Image from "next/image";
import Link from "next/link";

export default function ProductWrapper({products, styles}: {products: any[], styles: any}) {
    return (
        <div className={styles.productGrid}>
          {products.map((product) => (
            <Product key={product.id} product={product} styles={styles} />
            ))}
        </div>
    )
}

export function Product({key, product, styles}: {key: any, product: any, styles: any}) {
    return (
        <Link key={key} href={`/products/${product.id}`} className={styles.productCard}>
            <h4>{product.name}</h4>
            <Image src={product.image} alt={product.name} width={300} height={400} loading="lazy"/>
            <p>Price: ${product.price.toFixed(2)}</p>
        </Link>
    )
}