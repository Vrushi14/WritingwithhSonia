import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const includes = [
  "Monthly Creative Writing Activities",
  "Exclusive Writing Prompts & Story Starters",
  "Printable Worksheets & Writing Challenges",
  "Storytelling and Imagination-Building Activities",
  "Grammar & Vocabulary Enrichment Resources",
  "Seasonal and Holiday-Themed Writing Projects",
  "Parent Guides & Writing Support Tips",
  "Bonus Resources Throughout the Year",
  "Encouraging Activities for Reluctant Writers",
];

const perfectFor = [
  "Homeschool Families",
  "Parents Supporting Learning at Home",
  "Students Who Love Writing",
  "Students Who Need More Writing Practice",
  "Teachers Looking for Supplemental Resources",
];

const plans = [
  { name: "Monthly", price: "$19", per: "/month", note: "Cancel anytime", featured: false },
  { name: "Annual", price: "$179", per: "/year", note: "Save over 20% — best value", featured: true },
  { name: "Classroom", price: "Contact", per: "", note: "For schools & co-ops", featured: false },
];

export default function Club() {
  return (
    <>
      <PageHero
        eyebrow="The Confident Writers Club"
        title={<>Monthly writing inspiration, activities & resources for <em className="text-[var(--color-gold-600)]">growing writers</em>.</>}
        subtitle="Give your child a fun, engaging way to strengthen writing skills while building confidence, creativity, and communication abilities — all from home."
      />

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <p className="reveal text-xl text-[var(--color-teal-900)]/85 leading-relaxed">
            Created by an educator, author, native English speaker, and parent,
            <strong> The Confident Writers Club</strong> provides fresh, ready-to-use resources each month
            designed to inspire students to <em className="text-[var(--color-gold-600)]">write, imagine, and express themselves</em> with confidence.
          </p>
        </div>
      </section>

      {/* Membership includes */}
      <section className="py-16 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
          <div className="reveal relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-[var(--color-gold-200)]/60 -rotate-2" />
            <img src="/images/club-workspace.jpg" alt="Printable worksheets and writing materials from the Confident Writers Club" className="relative rounded-[2rem] shadow-xl aspect-[4/3] object-cover" />
          </div>
          <div>
            <div className="eyebrow reveal">Membership Includes</div>
            <h2 className="reveal mt-5 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light text-[var(--color-teal-900)] leading-tight">
              Everything you need, <em className="text-[var(--color-gold-600)]">every month</em>.
            </h2>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {includes.map((t) => (
                <li key={t} className="reveal flex items-start gap-3 text-[var(--color-teal-900)]/90">
                  <span className="mt-1 flex items-center justify-center h-6 w-6 rounded-full bg-[var(--color-teal-700)] text-white flex-shrink-0">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Perfect for */}
      <section className="py-20 bg-[var(--color-teal-900)] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[var(--color-lavender)]/15 blur-3xl" />
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="eyebrow justify-center !text-[var(--color-gold-300)] reveal">Perfect For</div>
            <h2 className="reveal mt-5 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light">
              Built for the people raising and teaching <em className="text-[var(--color-gold-300)]">tomorrow's writers</em>.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {perfectFor.map((p, i) => (
              <div key={p} className="reveal lift bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center"
                   style={{ animationDelay: `${i * 60}ms` }}>
                <div className="font-[family-name:var(--font-script)] text-3xl text-[var(--color-gold-300)] mb-1">{i + 1}</div>
                <div className="text-white/90 text-sm leading-snug">{p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center space-y-6">
          <p className="reveal font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light text-[var(--color-teal-900)] leading-snug">
            Whether your child dreams of becoming an author, wants to improve school writing assignments, or
            simply needs a creative outlet — the Confident Writers Club provides engaging opportunities to
            practice writing in a fun and meaningful way.
          </p>
          <p className="reveal text-[var(--color-teal-800)]/85 leading-relaxed">
            As a parent, I understand how challenging it can be to find educational activities that are both
            effective and enjoyable. That's why every resource is designed to be practical, engaging, and
            easy to use — without adding stress to your day.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="eyebrow justify-center reveal">Choose Your Plan</div>
            <h2 className="reveal mt-5 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light text-[var(--color-teal-900)]">
              Simple, flexible <em className="text-[var(--color-gold-600)]">membership</em>.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((p) => (
              <div key={p.name} className={`reveal lift rounded-3xl p-8 border shadow-sm ${
                p.featured ? "bg-[var(--color-teal-900)] text-white border-transparent" : "bg-white border-[var(--color-teal-700)]/10"
              }`}>
                {p.featured && (
                  <div className="inline-block mb-4 text-[10px] uppercase tracking-[0.22em] bg-[var(--color-gold-400)] text-[var(--color-teal-900)] px-3 py-1 rounded-full font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className={`font-[family-name:var(--font-display)] text-2xl ${p.featured ? "text-white" : "text-[var(--color-teal-900)]"}`}>{p.name}</h3>
                <div className={`mt-4 font-[family-name:var(--font-display)] text-5xl ${p.featured ? "text-[var(--color-gold-300)]" : "text-[var(--color-teal-800)]"}`}>
                  {p.price}<span className={`text-base ml-1 ${p.featured ? "text-white/70" : "text-[var(--color-teal-700)]/70"}`}>{p.per}</span>
                </div>
                <p className={`mt-3 text-sm ${p.featured ? "text-white/70" : "text-[var(--color-teal-800)]/70"}`}>{p.note}</p>
                <Link to="/contact" className={`mt-8 inline-flex items-center gap-2 justify-center w-full px-5 py-3 rounded-full font-semibold transition ${
                  p.featured ? "bg-[var(--color-gold-400)] text-[var(--color-teal-900)] hover:bg-[var(--color-gold-300)]" : "bg-[var(--color-teal-700)] text-white hover:bg-[var(--color-teal-800)]"
                }`}>
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="reveal font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light text-[var(--color-teal-900)] leading-tight">
            Because Every Child Has a <em className="text-[var(--color-gold-600)]">Story Worth Telling</em>.
          </h2>
          <p className="reveal mt-6 text-lg text-[var(--color-teal-800)]/85 max-w-2xl mx-auto">
            My mission is to help students develop the confidence, creativity, and communication skills
            they need to share their ideas with the world.
          </p>
          <p className="reveal mt-4 font-[family-name:var(--font-script)] text-3xl text-[var(--color-gold-600)]">
            Join the Confident Writers Club today — one story at a time.
          </p>
          <div className="reveal mt-8">
            <Link to="/contact" className="btn-primary">Join the Club →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
