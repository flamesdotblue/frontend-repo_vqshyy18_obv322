import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-zinc-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <section id="craft" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="rounded-3xl border border-zinc-200 bg-white/70 p-10 text-center shadow-[0_1px_0_0_rgba(0,0,0,0.04)]">
            <h3 className="text-2xl font-semibold tracking-tight">Craft without compromise</h3>
            <p className="mx-auto mt-3 max-w-3xl text-zinc-600">
              Each board is hand-assembled, tuned, and tested by our small team. We obsess over switch selection, plate materials, and stabilizer tuning to create a sound and feel you won’t forget.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
