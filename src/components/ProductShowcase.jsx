import { Star, ArrowRight, Check } from "lucide-react";

const products = [
  {
    name: "Aurora 75",
    tag: "Compact • 75%",
    price: "$329",
    accent: "from-indigo-600 to-violet-600",
    description:
      "A compact powerhouse with a refined typing feel and gasket-mounted design.",
  },
  {
    name: "Aurora 80",
    tag: "Tenkeyless • 80%",
    price: "$359",
    accent: "from-rose-600 to-orange-500",
    description:
      "Balanced layout for work and play, with sound-dampened acoustics.",
  },
  {
    name: "Aurora 100",
    tag: "Full Size • 100%",
    price: "$399",
    accent: "from-emerald-600 to-teal-600",
    description:
      "Complete functionality without compromise. Engineered for endurance.",
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          Meticulous materials. Effortless elegance.
        </h2>
        <p className="mt-4 text-zinc-600">
          Precision-milled aluminum, PBT keycaps, and carefully tuned acoustics. Built for a decade of daily use.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article
            key={p.name}
            className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-1"
          >
            <div className={`mb-6 h-44 w-full rounded-2xl bg-gradient-to-br ${p.accent} opacity-90`} />
            <div className="flex items-center gap-2 text-xs text-zinc-600">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-500" />
              <span>Rated 4.9 by our community</span>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-zinc-900">{p.name}</h3>
            <p className="text-sm text-zinc-500">{p.tag}</p>
            <p className="mt-3 text-zinc-600">{p.description}</p>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-zinc-700">
                <Check className="h-4 w-4 text-emerald-600" />
                <span>In stock</span>
              </div>
              <div className="text-lg font-semibold text-zinc-900">{p.price}</div>
            </div>
            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800">
              Add to cart <ArrowRight className="h-4 w-4" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
