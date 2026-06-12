import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[var(--color-teal-900)] text-[var(--color-cream)] relative overflow-hidden">
      {/* Decorative wave */}
      <svg className="absolute top-0 left-0 w-full -translate-y-[1px]" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
        <path d="M0,40 C240,90 480,0 720,30 C960,60 1200,10 1440,40 L1440,0 L0,0 Z" fill="var(--color-cream)" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-12 grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src="/images/logo.png" alt="" className="h-14 w-14 rounded-full ring-2 ring-[var(--color-gold-400)]" />
            <div>
              <div className="font-[family-name:var(--font-display)] text-2xl">Writing <span className="italic text-[var(--color-gold-300)]">with</span> Sonia</div>
              <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-gold-300)]">Find your voice</div>
            </div>
          </div>
          <p className="text-[var(--color-cream)]/80 max-w-md leading-relaxed">
            Personalized writing coaching, college essay support, and the Confident Writers Club —
            helping students in grades 3–12 become stronger, more confident writers, thinkers, and storytellers.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thanks! Sonia will be in touch soon."); }}
            className="mt-7 flex max-w-md bg-white/10 backdrop-blur rounded-full p-1.5 border border-white/15"
          >
            <input
              type="email"
              required
              placeholder="Your email for weekly writing inspiration"
              className="flex-1 bg-transparent px-4 py-2 text-sm placeholder:text-white/50 focus:outline-none"
            />
            <button className="rounded-full bg-[var(--color-gold-400)] hover:bg-[var(--color-gold-300)] text-[var(--color-teal-900)] font-semibold px-5 text-sm transition">
              Subscribe
            </button>
          </form>
        </div>

        <FooterCol title="Explore" links={[
          ["Home", "/"], ["About Sonia", "/about"], ["Services", "/services"],
          ["Testimonials", "/testimonials"], ["Contact", "/contact"],
        ]} />
        <FooterCol title="Programs" links={[
          ["College Essay Coaching", "/college-essay-coaching"],
          ["Confident Writers Club", "/confident-writers-club"],
          ["Resources & Shop", "/resources"],
        ]} />
        <FooterCol title="Connect" links={[
          ["Email Sonia", "/contact"],
          ["Instagram", "/contact"],
          ["YouTube", "/contact"],
          ["LinkedIn", "/contact"],
        ]} />
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>© {new Date().getFullYear()} Writing With Sonia. All rights reserved.</div>
          <div className="font-[family-name:var(--font-script)] text-base text-[var(--color-gold-300)]">
            “Every child has a story worth telling.”
          </div>
          <div className="flex gap-5">
            <span className="hover:text-white cursor-pointer transition">Privacy</span>
            <span className="hover:text-white cursor-pointer transition">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-[var(--color-gold-300)] uppercase tracking-[0.22em] text-xs font-semibold mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="link-underline text-sm text-white/85 hover:text-white">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
