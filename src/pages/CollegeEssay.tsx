import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const services = [
  { t: "Personal Statement Coaching", d: "Discover the story only you can tell — and shape it into a memorable personal statement." },
  { t: "Common App Essay Support", d: "Choose the right prompt, structure your narrative, and write with authentic voice." },
  { t: "Supplemental Essay Guidance", d: "Tailor each supplement to the school — concise, specific, and meaningful." },
  { t: "Essay Editing & Feedback", d: "Constructive, kind line-by-line feedback that strengthens your story without losing your voice." },
  { t: "Final Draft Reviews", d: "A final polish to make sure every word earns its place before you submit." },
];

const steps = [
  { n: "01", t: "Discovery Session", d: "We meet to talk about you — your interests, experiences, dreams, and the schools you're considering." },
  { n: "02", t: "Brainstorm & Topic Selection", d: "Together we uncover meaningful, original topics that reveal who you really are." },
  { n: "03", t: "Drafting with Guidance", d: "You write — I coach. Round-by-round, your essay grows stronger, clearer, and more authentic." },
  { n: "04", t: "Refine & Polish", d: "We tighten the structure, sharpen the language, and prepare your essays for submission with confidence." },
];

export default function CollegeEssay() {
  return (
    <>
      <PageHero
        bg="teal"
        eyebrow="College Essay Coaching"
        title={<>Tell the story <em className="text-[var(--color-gold-300)]">only you</em> can tell.</>}
        subtitle="College admissions officers aren't looking for perfect students — they're looking for authentic stories. I help students discover meaningful essay topics, develop compelling narratives, and create essays that showcase their unique experiences, character, and potential."
      />

      {/* Intro callout */}
      <section className="py-20 bg-[var(--color-cream)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
          <div className="reveal">
            <img src="/images/college-student.jpg" alt="High school student writing a college application essay" className="rounded-[2rem] shadow-xl aspect-[4/5] object-cover" />
          </div>
          <div>
            <div className="eyebrow reveal">My Promise</div>
            <h2 className="reveal mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-[var(--color-teal-900)] leading-snug">
              My goal is to help students present their <em className="text-[var(--color-gold-600)]">strongest and most authentic selves</em> throughout the application process.
            </h2>
            <p className="reveal mt-6 text-[var(--color-teal-800)]/85 leading-relaxed">
              I never write your essay for you. Instead, I help you think more deeply, write more clearly,
              and edit more bravely — so the final piece sounds unmistakably like <em>you</em>.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="eyebrow justify-center reveal">What's Included</div>
            <h2 className="reveal mt-5 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light text-[var(--color-teal-900)]">
              Services include
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={s.t} className="reveal lift bg-white rounded-3xl p-7 border border-[var(--color-teal-700)]/10 shadow-sm">
                <div className="font-[family-name:var(--font-display)] text-[var(--color-gold-600)] text-2xl">0{i + 1}</div>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-[var(--color-teal-900)] leading-snug">{s.t}</h3>
                <p className="mt-3 text-[var(--color-teal-900)]/75 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[var(--color-teal-900)] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="eyebrow justify-center !text-[var(--color-gold-300)] reveal">The Process</div>
            <h2 className="reveal mt-5 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light">
              A clear, supportive <em className="text-[var(--color-gold-300)]">step-by-step</em> path.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="reveal relative bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-7 hover:bg-white/10 transition">
                <div className="font-[family-name:var(--font-display)] text-5xl text-[var(--color-gold-300)] mb-4 leading-none">{s.n}</div>
                <h3 className="font-[family-name:var(--font-display)] text-xl mb-3">{s.t}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="reveal font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light text-[var(--color-teal-900)] leading-tight">
            Ready to start your <em className="text-[var(--color-gold-600)]">essay journey</em>?
          </h2>
          <p className="reveal mt-5 text-[var(--color-teal-800)]/85 max-w-2xl mx-auto">
            Spots are limited each application season. Reach out today to schedule a free discovery call.
          </p>
          <div className="reveal mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Book a Discovery Call →</Link>
            <Link to="/testimonials" className="btn-ghost">Read student stories</Link>
          </div>
        </div>
      </section>
    </>
  );
}
