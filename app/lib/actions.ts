interface Product {
  id: number;
  name: string;
  price: number;
  seller: string;
}

var products = async function getProduct(id: string): Promise<Product> {
  const res = await fetch(
    `http://localhost:3000/api/products/`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Product not found');
  }

  return res.json();
}

export { products };