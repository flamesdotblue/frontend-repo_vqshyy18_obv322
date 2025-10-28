export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white/60">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Aurora Keys. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-zinc-500 hover:text-zinc-900">Privacy</a>
            <a href="#" className="text-zinc-500 hover:text-zinc-900">Terms</a>
            <a href="#support" className="text-zinc-500 hover:text-zinc-900">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
