import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/",                              label: "Home" },
  { to: "/about",                         label: "About" },
  { to: "/services",                      label: "Services" },
  { to: "/college-essay-coaching",        label: "College Essay" },
  { to: "/confident-writers-club",        label: "Writers Club" },
  { to: "/testimonials",                  label: "Testimonials" },
  { to: "/resources",                     label: "Resources" },
  { to: "/contact",                       label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[var(--color-cream)]/90 backdrop-blur-md border-b border-[var(--color-teal-700)]/10 shadow-[0_8px_28px_-22px_rgba(20,35,31,.35)]"
                 : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/images/logo.png"
            alt="Writing With Sonia logo"
            className="h-12 w-12 rounded-full ring-2 ring-[var(--color-gold-400)]/60 group-hover:ring-[var(--color-gold-500)] transition"
          />
          <div className="leading-tight">
            <div className="font-[family-name:var(--font-display)] text-[1.05rem] text-[var(--color-teal-800)] font-semibold tracking-tight">
              Writing <span className="text-[var(--color-gold-600)] italic">with</span> Sonia
            </div>
            <div className="text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-teal-700)]/70">
              Find your voice
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `link-underline text-[0.92rem] font-medium tracking-wide transition ${
                  isActive ? "text-[var(--color-gold-600)]" : "text-[var(--color-teal-900)] hover:text-[var(--color-teal-700)]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/confident-writers-club" className="btn-primary !py-2.5 !px-5 text-sm">
            Join the Club
            <span aria-hidden>→</span>
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-[var(--color-teal-800)]"
        >
          <div className="w-7 h-[2px] bg-current mb-1.5 transition" style={{ transform: open ? "rotate(45deg) translate(5px,5px)" : "" }} />
          <div className="w-7 h-[2px] bg-current mb-1.5 transition" style={{ opacity: open ? 0 : 1 }} />
          <div className="w-7 h-[2px] bg-current transition" style={{ transform: open ? "rotate(-45deg) translate(6px,-6px)" : "" }} />
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="px-6 pb-8 pt-2 bg-[var(--color-cream)] border-t border-[var(--color-teal-700)]/10 flex flex-col gap-1">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `py-3 border-b border-[var(--color-teal-700)]/10 font-[family-name:var(--font-display)] text-lg ${
                  isActive ? "text-[var(--color-gold-600)]" : "text-[var(--color-teal-900)]"
                }`
              }
              style={{ animation: open ? `fadeUp .5s ${i * 50}ms both` : undefined }}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/confident-writers-club" className="btn-primary mt-5 justify-center">Join the Club →</Link>
        </nav>
      </div>
    </header>
  );
}
