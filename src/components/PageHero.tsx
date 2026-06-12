type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  bg?: "cream" | "teal";
};

export default function PageHero({ eyebrow, title, subtitle, bg = "cream" }: Props) {
  const dark = bg === "teal";
  return (
    <section className={`relative overflow-hidden ${dark ? "bg-[var(--color-teal-900)] text-[var(--color-cream)]" : "bg-[var(--color-cream)] text-[var(--color-teal-900)]"}`}>
      {/* decorative dots */}
      <div className="absolute inset-0 noise opacity-60 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[var(--color-gold-200)]/30 blur-3xl anim-float" />
      <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-[var(--color-teal-300)]/30 blur-3xl anim-float" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 pt-28 pb-20 lg:pt-36 lg:pb-28 text-center">
        <div className={`eyebrow justify-center anim-fade-up ${dark ? "!text-[var(--color-gold-300)]" : ""}`}>{eyebrow}</div>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-light anim-fade-up delay-100">
          {title}
        </h1>
        {subtitle && (
          <p className={`mt-7 max-w-2xl mx-auto text-lg leading-relaxed anim-fade-up delay-200 ${dark ? "text-white/80" : "text-[var(--color-teal-800)]/80"}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
