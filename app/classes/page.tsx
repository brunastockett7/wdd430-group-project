import Image from "next/image";
import Link from "next/link";

type Plan = {
  id: "silver" | "gold";
  name: string;
  price: string;
  icon: string;
  featured?: boolean;
  perks: string[];
  cta: string;
};

const plans: Plan[] = [
  {
    id: "silver",
    name: "Silver Member",
    price: "$9/mo",
    icon: "🥈",
    perks: [
      "1 live class per month",
      "Beginner-friendly lessons",
      "Member-only tips + resources",
    ],
    cta: "Join Silver",
  },
  {
    id: "gold",
    name: "Gold Member",
    price: "$19/mo",
    icon: "🥇",
    featured: true,
    perks: [
      "Unlimited live classes",
      "Priority Q&A with instructors",
      "Exclusive patterns + downloads",
      "Early access to new workshops",
    ],
    cta: "Join Gold",
  },
];

type ClassItem = {
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  duration: string;
  format: string;
  includes: string;
};

const classesList: ClassItem[] = [
  {
    title: "Pottery Basics",
    level: "Beginner",
    description: "Learn how to shape, smooth, and create your first simple pieces.",
    duration: "90 minutes",
    format: "Live Zoom",
    includes: "Materials list + replay for 7 days",
  },
  {
    title: "Hand Embroidery",
    level: "Beginner",
    description: "Stitch flowers, names, and patterns with easy guided steps.",
    duration: "60 minutes",
    format: "Live Zoom",
    includes: "Printable pattern + starter kit guide",
  },
  {
    title: "Crochet Cozy Blanket",
    level: "Intermediate",
    description: "Build a beautiful blanket using simple repeat patterns.",
    duration: "2 hours",
    format: "Live Zoom",
    includes: "Stitch chart + downloadable checklist",
  },
  {
    title: "Woodworking Essentials",
    level: "Beginner",
    description: "Tools, safety, and how to build a small handmade project.",
    duration: "75 minutes",
    format: "Live Zoom",
    includes: "Tool list + beginner safety guide",
  },
];

export default function ClassesPage() {
  return (
    <main className="p-8 mx-auto max-w-6xl">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-4xl font-bold text-[var(--blue-dark)]">
          Classes & Membership
        </h1>

        <Link href="/" className="font-semibold text-[var(--blue)]">
          Back to Home
        </Link>
      </div>

      <p className="mt-2 text-[var(--muted)]">
        Join live craft classes, learn new skills, and become a Silver or Gold member.
      </p>

      <section className="mt-8 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
        <div className="relative h-[320px] w-full">
          <Image
            src="/classes/classes.webp"
            alt="Family crafting together"
            fill
            className="object-cover object-[center_25%]"
            sizes="(max-width: 1024px) 100vw, 1100px"
            priority
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-[var(--blue-dark)]">
            Learn together, create together
          </h2>
          <p className="mt-2 leading-relaxed text-[var(--muted)]">
            Our classes are designed to feel warm and real — like sitting at the table
            with family while learning something beautiful with your hands.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#membership"
              className="inline-block rounded-full border border-[var(--border)] px-5 py-2 font-semibold hover:shadow-sm"
            >
              View Membership Options
            </a>
            <a
              href="#classes"
              className="inline-block rounded-full border border-[var(--border)] px-5 py-2 font-semibold hover:shadow-sm"
            >
              Browse Classes
            </a>
          </div>
        </div>
      </section>

      <section id="classes" className="mt-12">
        <h2 className="text-2xl font-bold text-[var(--blue-dark)]">
          Upcoming classes
        </h2>
        <p className="mt-2 text-[var(--muted)]">
          Pick a craft and jump in. We keep it friendly and simple.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {classesList.map((c) => (
            <article
              key={c.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold">{c.title}</h3>
                <span className="rounded-full border border-[var(--border)] px-3 py-1 text-sm text-[var(--muted)]">
                  {c.level}
                </span>
              </div>

              <p className="mt-3 leading-relaxed text-[var(--muted)]">{c.description}</p>

              <div className="mt-4 grid gap-2 text-sm text-[var(--muted)]">
                <p>
                  <span className="font-semibold text-[var(--blue-dark)]">
                    Duration:
                  </span>{" "}
                  {c.duration}
                </p>
                <p>
                  <span className="font-semibold text-[var(--blue-dark)]">
                    Format:
                  </span>{" "}
                  {c.format}
                </p>
                <p>
                  <span className="font-semibold text-[var(--blue-dark)]">
                    Includes:
                  </span>{" "}
                  {c.includes}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="membership" className="mt-14">
        <h2 className="text-2xl font-bold text-[var(--blue-dark)]">
          Membership options
        </h2>
        <p className="mt-2 text-[var(--muted)]">
          Choose Silver or Gold — cancel anytime.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {plans.map((p) => (
            <article
              key={p.id}
              className={`rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 ${
                p.featured ? "shadow-sm" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] text-2xl">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{p.name}</h3>
                    <p className="text-[var(--muted)]">{p.price}</p>
                  </div>
                </div>

                {p.featured ? (
                  <span className="rounded-full border border-[var(--border)] px-3 py-1 text-sm font-semibold">
                    Most popular
                  </span>
                ) : null}
              </div>

              <ul className="mt-5 space-y-2 text-[var(--muted)]">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex gap-2">
                    <span className="mt-[2px]">✓</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/auth/register?plan=${p.id}`}
                className="mt-6 block w-full rounded-full border border-[var(--border)] px-6 py-3 text-center font-semibold hover:shadow-sm"
              >
                {p.cta}
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-block rounded-full border border-[var(--border)] px-6 py-3 font-semibold hover:shadow-sm"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
