import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const tutorialAreas = [
  "Creative Writing", "Essay Writing", "Personal Narratives", "Informational Writing",
  "Opinion Writing", "Grammar & Sentence Structure", "Vocabulary Development",
  "Public Speaking & Communication", "Critical Thinking & Organization",
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Helping students find their voice and build <em className="text-[var(--color-gold-600)]">confidence</em> through writing.</>}
        subtitle="Whether your child is learning to organize their thoughts, preparing for college applications, or looking to become a stronger storyteller, I provide personalized guidance and engaging resources designed to help them succeed."
      />

      {/* Service 1 — Tutorials */}
      <section id="tutorials" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
          <div className="reveal relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-[var(--color-teal-200)]/50 -rotate-1" />
            <img src="/images/kids-writing.jpg" alt="" className="relative rounded-[2rem] shadow-xl aspect-square object-cover" />
          </div>
          <div>
            <div className="eyebrow reveal">01 — Writing Tutorials</div>
            <h2 className="reveal mt-5 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light text-[var(--color-teal-900)] leading-tight">
              Personalized Online <em className="text-[var(--color-gold-600)]">Writing Coaching</em>
            </h2>
            <p className="reveal mt-6 text-lg text-[var(--color-teal-900)]/80 leading-relaxed">
              One-on-one and small-group online sessions designed to help students strengthen
              their writing skills while building confidence and creativity.
            </p>
            <div className="reveal mt-8">
              <div className="text-sm uppercase tracking-widest text-[var(--color-teal-700)] mb-4">Areas of focus include</div>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {tutorialAreas.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-[var(--color-teal-900)]">
                    <span className="mt-1 flex items-center justify-center h-5 w-5 rounded-full bg-[var(--color-gold-400)] text-[var(--color-teal-900)] flex-shrink-0">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal mt-8 p-5 rounded-2xl bg-[var(--color-gold-100)] border border-[var(--color-gold-300)]/50">
              <p className="text-[var(--color-teal-900)]/85">
                Students receive individualized feedback, encouragement, and practical strategies they can apply immediately.
              </p>
              <p className="mt-2 font-semibold text-[var(--color-teal-900)]">Ideal for students in Grades 3–12.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2 — College Essay (preview) */}
      <section className="py-20 bg-[var(--color-teal-900)] text-white relative overflow-hidden">
        <div className="absolute -top-20 right-10 w-72 h-72 rounded-full bg-[var(--color-gold-300)]/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
          <div>
            <div className="eyebrow !text-[var(--color-gold-300)] reveal">02 — College Essay Coaching</div>
            <h2 className="reveal mt-5 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light leading-tight">
              Helping students tell their story with <em className="text-[var(--color-gold-300)]">confidence</em>.
            </h2>
            <p className="reveal mt-6 text-white/80 leading-relaxed">
              College admissions officers aren't looking for perfect students — they're looking for
              <em> authentic stories</em>. I help students discover meaningful essay topics, develop
              compelling narratives, and create essays that showcase their unique experiences,
              character, and potential.
            </p>
            <ul className="reveal mt-8 space-y-3">
              {["Personal Statement Coaching", "Common App Essay Support", "Supplemental Essay Guidance",
                "Essay Editing & Feedback", "Final Draft Reviews"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-white/90">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-gold-300)]" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="reveal mt-8">
              <Link to="/college-essay-coaching" className="btn-primary !bg-[var(--color-gold-400)] !text-[var(--color-teal-900)] hover:!bg-[var(--color-gold-300)]">
                Explore Essay Coaching →
              </Link>
            </div>
          </div>
          <div className="reveal">
            <img src="/images/college-student.jpg" alt="A high school student writing their college essay" className="rounded-[2rem] shadow-2xl aspect-[4/5] object-cover" />
          </div>
        </div>
      </section>

      {/* Service 3 — Club preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
          <div className="reveal relative order-2 lg:order-1">
            <div className="absolute -inset-3 rounded-[2rem] bg-[var(--color-lavender)]/40 rotate-2" />
            <img src="/images/club-workspace.jpg" alt="Writing workbooks and resources from the Confident Writers Club" className="relative rounded-[2rem] shadow-xl aspect-[4/3] object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="eyebrow reveal">03 — Confident Writers Club</div>
            <h2 className="reveal mt-5 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light text-[var(--color-teal-900)] leading-tight">
              A monthly <em className="text-[var(--color-gold-600)]">membership</em> for growing writers.
            </h2>
            <p className="reveal mt-6 text-lg text-[var(--color-teal-900)]/80 leading-relaxed">
              Fresh, ready-to-use writing inspiration delivered every month — perfect for parents,
              homeschool families, and teachers who want engaging materials that actually get used.
            </p>
            <div className="reveal mt-8">
              <Link to="/confident-writers-club" className="btn-primary">Join the Club →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="reveal font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-[var(--color-teal-900)] leading-snug">
            Not sure which program fits your child best?
          </h2>
          <p className="reveal mt-4 text-[var(--color-teal-800)]/80">Reach out — Sonia personally responds to every inquiry and will help you choose.</p>
          <div className="reveal mt-8">
            <Link to="/contact" className="btn-primary">Get in touch →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
