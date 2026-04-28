import Link from "next/link";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <span className="font-semibold text-lg">SnapCode <span className="text-violet-400">Pro</span></span>
          </Link>
          <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Back to Editor
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Start creating beautiful code screenshots for free. Upgrade when you need more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free Tier */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
            <h2 className="text-xl font-semibold mb-2">Free</h2>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-zinc-500">forever</span>
            </div>
            <p className="text-zinc-400 text-sm mb-8">
              Everything you need to create beautiful code screenshots.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "All 34 syntax themes",
                "20 gradient backgrounds",
                "PNG & SVG export",
                "Copy to clipboard",
                "30+ programming languages",
                "Line numbers & window styles",
                "Unlimited exports",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-green-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/"
              className="block w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors text-center font-medium"
            >
              Start Creating
            </Link>
          </div>

          {/* Pro Tier */}
          <div className="rounded-2xl border-2 border-violet-500/50 bg-zinc-900/80 p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-violet-600 text-xs font-medium">
              MOST POPULAR
            </div>
            <h2 className="text-xl font-semibold mb-2">Pro</h2>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold">$12</span>
              <span className="text-zinc-500">one-time</span>
            </div>
            <p className="text-zinc-400 text-sm mb-8">
              Unlock everything. Pay once, own it forever. No subscription.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Everything in Free, plus:",
                "No watermark on exports",
                "Premium gradient backgrounds",
                "Custom font selection",
                "Save & share templates",
                "Batch export (multiple snippets)",
                "API access for automation",
                "Priority support",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-violet-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className={feature === "Everything in Free, plus:" ? "text-zinc-300 font-medium" : ""}>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://buy.stripe.com/test_dRmeVd5Nj4k75QUcSD0Jq00"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 transition-colors text-center font-medium"
            >
              Get Pro — $12 one-time
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-24 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Is there really no subscription?",
                a: "Correct! Pro is a one-time payment of $12. You get lifetime access to all current and future Pro features. No recurring charges, ever.",
              },
              {
                q: "Can I use the screenshots commercially?",
                a: "Absolutely. All screenshots you create are yours. Use them in blog posts, presentations, social media, documentation — whatever you need.",
              },
              {
                q: "What makes this different from Carbon?",
                a: "SnapCode Pro is faster, has more themes (34 vs ~30), offers SVG export, includes 20 gorgeous gradient backgrounds, and our Pro tier is a one-time payment vs Carbon's monthly subscription.",
              },
              {
                q: "Do I need an account?",
                a: "Nope! Start creating immediately. No sign-up required for the free tier. Pro users get a license key via email.",
              },
              {
                q: "What if I'm not satisfied?",
                a: "We offer a 30-day money-back guarantee. If SnapCode Pro doesn't meet your needs, just email us.",
              },
            ].map((faq) => (
              <div key={faq.q}>
                <h3 className="font-medium mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-20">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            SnapCode Pro — Made with love for developers
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="/" className="hover:text-white transition-colors">Editor</Link>
            <span>support@snapcode.pro</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
