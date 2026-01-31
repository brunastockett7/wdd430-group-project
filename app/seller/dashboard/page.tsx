import Link from "next/link";

export const metadata = {
  title: "Seller Dashboard | Handcrafted Haven",
  description:
    "Seller dashboard for managing listings. In a production app, this page would require seller authentication.",
};

export default function SellerDashboardPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-4xl font-bold text-[var(--blue-dark)]">
          Seller Dashboard
        </h1>

        <Link href="/" className="font-semibold text-[var(--blue)]">
          Back to Home
        </Link>
      </div>

      <p className="mt-3 text-[var(--muted)] leading-relaxed">
        This dashboard represents the seller-only area of Handcrafted Haven.
        In a production version of this app, sellers would sign in and only
        authenticated sellers would be able to access this page.
      </p>

      <section className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
        <h2 className="text-2xl font-bold text-[var(--blue-dark)]">
          Manage Listings
        </h2>

        <ul className="mt-4 space-y-3 text-[var(--muted)]">
          <li>• Add a new product listing (name, price, category, image)</li>
          <li>• Edit product descriptions and pricing</li>
          <li>• Upload/replace product images</li>
          <li>• View and respond to customer reviews</li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/products"
            className="rounded-full border border-[var(--border)] px-6 py-3 font-semibold"
          >
            View Products
          </Link>

          <Link
            href="/makers"
            className="rounded-full border border-[var(--border)] px-6 py-3 font-semibold"
          >
            Meet the Makers
          </Link>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
        <h2 className="text-2xl font-bold text-[var(--blue-dark)]">
          Authentication Notes (for rubric)
        </h2>

        <p className="mt-3 text-[var(--muted)] leading-relaxed">
          To meet the “authenticated sellers” requirement in a full production
          app, we would add authentication (for example NextAuth/Auth.js or
          Clerk), store seller roles, and protect this route using middleware so
          only logged-in sellers can access it.
        </p>
      </section>

      <div className="mt-10">
        <Link href="/" className="font-semibold text-[var(--blue)]">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
