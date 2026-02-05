import Image from "next/image";
import Link from "next/link";
 
type Sponsor = {
  name: string;
  image: string;
  alt: string;
  donatedThisYear: number;
  description: string;
};
 
function formatMoney(amount: number) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
 
export default function SponsorsPage() {
  const sponsors: Sponsor[] = [
    {
      name: "Marathon Oil",
      image: "/sponsors/sponsor1.webp",
      alt: "Business partners shaking hands",
      donatedThisYear: 300000,
      description:
        "Marathon Oil helps fund tools, materials, and maker training so artisans can continue creating the products our customers love while supporting their families.",
    },
    {
      name: "Dakota Tech Organization",
      image: "/sponsors/sponsor2.webp",
      alt: "Team collaborating in a meeting",
      donatedThisYear: 150000,
      description:
        "Dakota Tech Organization supports our makers through mentorship and technology resources, helping creators grow sustainable small businesses in their communities.",
    },
  ];
 
  const total = sponsors.reduce((sum, s) => sum + s.donatedThisYear, 0);
 
  return (
<main className="p-8 max-w-6xl mx-auto">
      {/* Header */}
<div className="flex items-center justify-between gap-4">
<h1 className="text-4xl font-bold text-[var(--blue-dark)]">
  Meet Our Sponsors
</h1>
 
        <Link href="/" className="font-semibold text-[var(--blue)]">
          Back to Home
</Link>
</div>
 
      <p className="mt-2 text-[var(--muted)]">
        We are a non-profit organization focused on supporting independent makers.
        Sponsor contributions help keep our programs running, support artisan
        families, and preserve craftsmanship.
</p>
 
      <p className="mt-2 text-[var(--muted)]">
        Total donated this year:{" "}
<span className="font-semibold text-[var(--blue-dark)]">
          {formatMoney(total)}
</span>
</p>
 
      <p className="mt-2 text-xs text-[var(--muted)]">
        Donation amounts shown are for demonstration purposes.
</p>
 
      {/* Sponsors Grid */}
<section className="mt-10 grid gap-8 sm:grid-cols-2">
        {sponsors.map((sponsor) => (
<article
            key={sponsor.name}
            className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]"
>
            {/* Fixed image height (same as Makers) */}
<div className="relative h-64 w-full">
<Image
                src={sponsor.image}
                alt={sponsor.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw"
                priority
              />
</div>
 
            <div className="p-5">
<h2 className="text-xl font-bold text-[var(--blue-dark)]">
                {sponsor.name}
</h2>
 
              <p className="mt-3 text-[var(--muted)] leading-relaxed">
                {sponsor.description}
</p>
 
              <p className="mt-3 font-semibold text-[var(--blue-dark)]">
                Donated this year: {formatMoney(sponsor.donatedThisYear)}
</p>
</div>
</article>
        ))}
</section>
 
      {/* Footer */}
<div className="mt-12 text-center">
<Link
          href="/"
          className="inline-block rounded-full border border-[var(--border)] px-6 py-3 font-semibold"
>
          Back to Home
</Link>
</div>
</main>
  );
}