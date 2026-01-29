interface Product {
  id: number;
  name: string;
  price: number;
  seller: string;
}

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(
    `http://localhost:3000/api/products/${id}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Product not found');
  }

  return res.json();
}

async function getReviews(productId: string) {
  const res = await fetch(
    `http://localhost:3000/api/products/${productId}/reviews`,
    {
      cache: 'no-store',
      next: { revalidate: 0 } 
    }
  );
  
  if (!res.ok) {
    return [];
  }

  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
  }) {
  const { id } = await params;
  const product = await getProduct(id);
  const reviews = await getReviews(id);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10">
      {/* Product card */}
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-gray-600">
          Sold by <span className="font-medium">{product.seller}</span>
        </p>
        <div className="flex items-center justify-between pt-4">
          <span className="text-2xl font-semibold text-indigo-600">${product.price}</span>
          <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 active:scale-95 transition">
            Buy now
          </button>
        </div>
      </div>

      {/* Reviews */}
      <div className="max-w-md w-full mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Reviews</h2>
        <ul className="space-y-4">
          {reviews.map((review: any) => (
            <li key={review.id} className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-medium">{review.user}</span>
                <span className="text-yellow-500">{'⭐'.repeat(review.rating)}</span>
              </div>
              <p className="text-gray-700 mt-1">{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
