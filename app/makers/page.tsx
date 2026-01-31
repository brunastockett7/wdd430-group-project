import Image from "next/image";
import Link from "next/link";
import { makersGallery } from "@/app/lib/data";

export default function MakersPage() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-4xl font-bold">Meet the Makers</h1>

        <Link href="/" className="font-semibold text-[var(--blue)]">
          Back to Home
        </Link>
      </div>

      <p className="mt-2 text-[var(--muted)]">
        Get to know the people behind the handcrafted pieces.
      </p>

      <section className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {makersGallery.map((m) => (
          <article
            key={m.id}
            className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]"
          >
            <div className="relative h-64 w-full">
              <Image
                src={m.photo}
                alt={m.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-bold text-[var(--blue-dark)]">
                {m.title}
              </h2>

              <p className="mt-3 text-[var(--muted)] leading-relaxed">
                {m.description}
              </p>
            </div>
          </article>
        ))}
      </section>

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
