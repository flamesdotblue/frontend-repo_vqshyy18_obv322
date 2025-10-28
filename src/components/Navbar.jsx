import { ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-700" />
            <span className="text-xl font-semibold tracking-tight text-zinc-900">
              Aurora Keys
            </span>
          </div>

          <div className="hidden items-center gap-10 md:flex">
            <a href="#products" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">Keyboards</a>
            <a href="#craft" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">Craft</a>
            <a href="#support" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">Support</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 md:inline-flex">
              Shop now
            </button>
            <button aria-label="Open menu" className="md:hidden" onClick={() => setOpen((v) => !v)}>
              <Menu className="h-6 w-6 text-zinc-800" />
            </button>
            <button aria-label="Cart" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 hover:bg-zinc-50">
              <ShoppingBag className="h-5 w-5 text-zinc-800" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden">
            <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-zinc-200 p-4">
              <a href="#products" className="text-sm text-zinc-700">Keyboards</a>
              <a href="#craft" className="text-sm text-zinc-700">Craft</a>
              <a href="#support" className="text-sm text-zinc-700">Support</a>
              <button className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50">
                Shop now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
