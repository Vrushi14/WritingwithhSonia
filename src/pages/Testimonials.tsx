import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const stories = [
  {
    q: "My son went from dreading writing to asking when his next session with Sonia is. She makes writing feel like an adventure — and now he actually enjoys it.",
    a: "Jennifer M.", role: "Parent of a 5th-grader", tag: "Writing Tutorials",
  },
  {
    q: "Sonia helped my daughter discover what to write about for her Common App essay — something we'd been struggling with for months. The final piece sounded like her, only better.",
    a: "David & Priya S.", role: "Parents of a high-school senior", tag: "College Essay Coaching",
  },
  {
    q: "As a homeschool mom, the Confident Writers Club has been a lifesaver. Every month I get fresh, beautifully designed materials my kids genuinely look forward to.",
    a: "Rachel T.", role: "Homeschool parent of three", tag: "Confident Writers Club",
  },
  {
    q: "I was nervous about my personal statement. Sonia listened to my real story, helped me shape it, and never made me feel like the essay belonged to anyone but me.",
    a: "Aanya R.", role: "College freshman, Class of '25", tag: "College Essay Coaching",
  },
  {
    q: "My daughter is a reluctant writer, but Sonia's encouragement is something else. After a few weeks she started writing little stories on her own — without being asked.",
    a: "Megan L.", role: "Parent of a 4th-grader", tag: "Writing Tutorials",
  },
  {
    q: "I teach 6th grade language arts, and the Club's prompts and worksheets are gold. My students light up when I use them — and they save me hours of prep.",
    a: "Mr. Cooper", role: "Middle-school ELA teacher", tag: "Confident Writers Club",
  },
];

const numbers = [
  { n: "98%", l: "of parents say their child enjoys writing more" },
  { n: "20+", l: "years coaching students of all ages" },
  { n: "100s", l: "of essays guided to confident, authentic finals" },
];

export default function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={<>Real <em className="text-[var(--color-gold-600)]">stories</em>, from real families.</>}
        subtitle="Words from the parents, students, teachers, and homeschoolers who've worked with me or joined the Confident Writers Club."
      />

      {/* Featured quote */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <div className="font-[family-name:var(--font-script)] text-7xl text-[var(--color-gold-400)] leading-none">“</div>
          <blockquote className="reveal -mt-6 font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-light leading-snug text-[var(--color-teal-900)]">
            Sonia doesn't just teach writing — she teaches kids to believe their <em className="text-[var(--color-gold-600)]">ideas matter</em>. That belief stays with them long after the lesson ends.
          </blockquote>
          <div className="reveal mt-6 text-[var(--color-teal-700)] uppercase tracking-widest text-sm">— Parent, Confident Writers Club member</div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-12 bg-[var(--color-teal-900)] text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid sm:grid-cols-3 gap-8 text-center">
          {numbers.map((n) => (
            <div key={n.l} className="reveal">
              <div className="font-[family-name:var(--font-display)] text-5xl md:text-6xl text-[var(--color-gold-300)]">{n.n}</div>
              <div className="mt-3 text-white/80 text-sm uppercase tracking-widest">{n.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stories grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((s, i) => (
              <figure key={i} className="reveal lift relative bg-white rounded-3xl p-7 border border-[var(--color-teal-700)]/10 shadow-sm flex flex-col">
                <div className="absolute -top-4 left-7 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-[var(--color-gold-400)] text-[var(--color-teal-900)]">
                  {s.tag}
                </div>
                <div className="font-[family-name:var(--font-script)] text-5xl text-[var(--color-gold-400)] leading-none">“</div>
                <blockquote className="-mt-3 text-[var(--color-teal-900)]/90 leading-relaxed flex-1">{s.q}</blockquote>
                <figcaption className="mt-6 pt-5 border-t border-[var(--color-teal-700)]/10">
                  <div className="font-semibold text-[var(--color-teal-800)]">{s.a}</div>
                  <div className="text-xs uppercase tracking-widest text-[var(--color-teal-700)]/70 mt-1">{s.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="reveal font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-[var(--color-teal-900)]">
            Ready to write your own story with us?
          </h2>
          <div className="reveal mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Start a Conversation →</Link>
            <Link to="/services" className="btn-ghost">See Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
