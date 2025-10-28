export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(9,9,11,0.08),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(9,9,11,0.06),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 inline-block rounded-full border border-zinc-200 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-zinc-600">
            Limited release • Series 01
          </p>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl">
            The art of typing.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Hand-assembled mechanical keyboards crafted from aerospace aluminum and premium switches. A sublime balance of sound, feel, and form.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a href="#products" className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-transform hover:scale-[1.02]">
              Shop keyboards
            </a>
            <a href="#craft" className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50">
              Explore our craft
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
