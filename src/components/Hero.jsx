import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative">
      {/* Ambient gradients behind the content (don't block interactions) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(9,9,11,0.06),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(9,9,11,0.05),transparent_40%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-12 lg:px-8 lg:pt-32 lg:pb-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <p className="mb-6 inline-block rounded-full border border-zinc-200 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-zinc-600">
              Limited release • Series 01
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-zinc-900 sm:text-6xl">
              The art of typing.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-600 lg:mx-0">
              Hand-assembled mechanical keyboards crafted from aerospace aluminum and premium switches. A sublime balance of sound, feel, and form.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 lg:justify-start">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-transform hover:scale-[1.02]"
              >
                Shop keyboards
              </a>
              <a
                href="#craft"
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                Explore our craft
              </a>
            </div>
          </div>

          {/* Spline Scene */}
          <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[560px]">
            <div className="absolute inset-0 overflow-hidden rounded-3xl border border-zinc-200 bg-white/40 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]">
              <Spline
                scene="https://prod.spline.design/fcD-iW8YZHyBp1qq/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            {/* Soft highlight overlay above the canvas, non-interactive */}
            <div className="pointer-events-none absolute -inset-x-6 -bottom-10 top-auto blur-3xl" aria-hidden>
              <div className="mx-auto h-40 max-w-2xl rounded-full bg-gradient-to-r from-zinc-200/60 via-transparent to-zinc-200/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
