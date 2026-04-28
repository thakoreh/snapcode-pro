"use client";

import Link from "next/link";
import { useState } from "react";
import Editor from "@/components/Editor";

export default function Home() {
  const [started, setStarted] = useState(false);

  if (started) {
    return (
      <div className="flex flex-col min-h-screen">
        <Editor />
        <footer className="border-t border-zinc-800 bg-zinc-950">
          <div className="max-w-screen-2xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-zinc-500">
            <span>SnapCode Pro — Beautiful code screenshots in seconds</span>
            <div className="flex items-center gap-6">
              <Link href="/pricing" className="hover:text-violet-400 transition-colors">
                Pricing
              </Link>
              <span>34 themes · 20 gradients · 30+ languages</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-600/20 blur-3xl" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-violet-600/10 to-transparent rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Free to use · No sign-up required
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">
              Beautiful code
              <br />
              <span className="gradient-text">screenshots</span> in seconds
            </h1>

            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto animate-fade-in leading-relaxed">
              Transform your code into stunning, shareable images. Perfect for
              tweets, blog posts, documentation, and presentations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in">
              <button
                onClick={() => setStarted(true)}
                className="px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 transition-all font-semibold text-lg shadow-lg shadow-violet-600/25 hover:shadow-violet-500/40"
              >
                Open Editor — It&apos;s Free
              </button>
              <Link
                href="/pricing"
                className="px-8 py-4 rounded-xl border border-zinc-700 hover:border-zinc-500 transition-colors font-medium text-lg"
              >
                View Pricing
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center justify-center gap-6 text-sm text-zinc-500 animate-fade-in">
              <div className="flex -space-x-2">
                {[
                  "bg-violet-500",
                  "bg-cyan-500",
                  "bg-emerald-500",
                  "bg-amber-500",
                  "bg-rose-500",
                ].map((color, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${color} border-2 border-zinc-950 flex items-center justify-center text-xs font-medium`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span>
                Trusted by <span className="text-white font-medium">2,400+</span> developers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Image */}
      <section className="max-w-5xl mx-auto px-6 -mt-4 mb-20">
        <div
          className="rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-black/50 animate-fade-in"
          style={{
            background:
              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            padding: "32px",
          }}
        >
          <div
            className="rounded-xl overflow-hidden"
            style={{ backgroundColor: "#0d1117" }}
          >
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{
                backgroundColor: "rgba(0,0,0,0.2)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#ff5f57" }}
              />
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#febc2e" }}
              />
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#28c840" }}
              />
              <span className="text-xs text-zinc-500 ml-2">app.tsx</span>
            </div>
            <div className="p-4 flex">
              <div
                className="text-right pr-4 select-none"
                style={{
                  color: "rgba(255,255,255,0.2)",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  fontFamily:
                    '"SF Mono", "Fira Code", monospace',
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n) => (
                  <div key={n}>{n}</div>
                ))}
              </div>
              <pre
                style={{
                  fontFamily:
                    '"SF Mono", "Fira Code", monospace',
                  fontSize: "14px",
                  lineHeight: "1.6",
                  color: "#e6edf3",
                  margin: 0,
                }}
              >
                <code>{`// Beautiful React component
export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
    >
      <h1>Welcome to the future</h1>
    </motion.div>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need.{" "}
            <span className="text-zinc-500">Nothing you don&apos;t.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              ),
              title: "34 Syntax Themes",
              desc: "GitHub Dark, Dracula, Nord, Monokai, Tokyo Night, and 29 more. Find your perfect look.",
            },
            {
              icon: (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              ),
              title: "30+ Languages",
              desc: "JavaScript, TypeScript, Python, Rust, Go, and every language you actually use.",
            },
            {
              icon: (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              ),
              title: "20 Gradient Backgrounds",
              desc: "Stunning gradient backgrounds from Purple Haze to Cosmic. Make your code pop.",
            },
            {
              icon: (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              ),
              title: "One-Click Copy",
              desc: "Copy your screenshot directly to clipboard. Paste it anywhere in an instant.",
            },
            {
              icon: (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              ),
              title: "PNG & SVG Export",
              desc: "Export as high-res PNG (3x) for raster needs or SVG for perfect vector scaling.",
            },
            {
              icon: (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              ),
              title: "Blazing Fast",
              desc: "Zero backend. Everything runs in your browser. No uploads, no waiting, no accounts.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="p-12 rounded-3xl bg-gradient-to-br from-violet-600/20 to-cyan-600/20 border border-violet-500/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to make your code look amazing?
          </h2>
          <p className="text-zinc-400 mb-8 text-lg">
            Join 2,400+ developers creating stunning code screenshots.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 transition-all font-semibold text-lg shadow-lg shadow-violet-600/25"
          >
            Start Creating — Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <span>SnapCode Pro</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/pricing" className="hover:text-violet-400 transition-colors">
              Pricing
            </Link>
            <span>Made with love for developers</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
