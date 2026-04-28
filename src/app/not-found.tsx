import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <p className="text-zinc-400 mb-8">This page doesn&apos;t exist. But your code screenshots can!</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 transition-colors font-medium"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          Open Editor
        </Link>
      </div>
    </div>
  );
}
