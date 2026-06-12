import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Sonia"
        title={<>Writer. Educator. <em className="text-[var(--color-gold-600)]">Storyteller</em>.</>}
        subtitle="Hi, I'm Sonia GT — a writer, educator, parent, and lifelong believer in the power of words."
      />

      {/* Portrait + opening */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_1.3fr] gap-14 items-start">
          <div className="reveal relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[var(--color-gold-200)]/60 rotate-2" />
            <img src="/images/sonia-portrait.jpg" alt="Portrait of Sonia GT, founder of Writing With Sonia" className="relative rounded-[2rem] shadow-xl aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-[var(--color-teal-900)] text-white px-5 py-4 rounded-2xl shadow-xl max-w-[14rem]">
              <div className="font-[family-name:var(--font-script)] text-2xl text-[var(--color-gold-300)] leading-none">20+</div>
              <div className="text-xs uppercase tracking-widest mt-1">Years helping writers grow</div>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-teal-900)]/85">
            <p className="reveal font-[family-name:var(--font-display)] text-2xl text-[var(--color-teal-900)] font-light italic">
              As a native English speaker, author, and writing coach, I am passionate about helping
              students develop confidence, creativity, and strong communication skills that will
              serve them both in and beyond the classroom.
            </p>
            <p className="reveal">
              For more than 20 years, I've helped people communicate ideas clearly through professional
              writing, training programs, educational resources, and storytelling. Today, I combine that
              experience with my love of teaching to help students become stronger writers, thinkers,
              speakers, and storytellers.
            </p>
            <p className="reveal">
              As the founder of <strong>Writing With Sonia</strong>, I provide creative writing instruction,
              college essay coaching, public speaking support, and educational resources for students,
              parents, and teachers. My goal is simple: to help students discover their unique voice
              and feel confident sharing it with the world.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-20 bg-[var(--color-teal-900)] text-white relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[var(--color-gold-300)]/15 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-[var(--color-lavender)]/15 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <div className="font-[family-name:var(--font-script)] text-6xl text-[var(--color-gold-300)] leading-none">“</div>
          <p className="reveal font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-light leading-snug -mt-4">
            I've always believed that every child has a <em className="text-[var(--color-gold-300)]">story worth telling</em>.
          </p>
        </div>
      </section>

      {/* The rest of the story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-7 text-lg leading-relaxed text-[var(--color-teal-900)]/85">
          <p className="reveal">
            As a parent myself, I understand the challenges families face when trying to support their
            children's learning, creativity, and academic growth. I know that every child learns differently,
            and I strive to create a positive, encouraging environment where students feel comfortable
            expressing themselves, taking risks, and developing confidence in their abilities.
          </p>
          <p className="reveal">
            Whether a student is writing their first creative story, preparing a college application essay,
            strengthening academic writing skills, or building confidence in public speaking, I help them
            transform ideas into meaningful communication.
          </p>
          <p className="reveal">
            In addition to coaching students, I create engaging resources, workbooks, writing activities,
            and educational materials designed by a parent who understands students and the realities of
            learning at home and in the classroom. My materials are practical, interactive, and designed
            to make writing both approachable and enjoyable for learners of all levels.
          </p>
          <p className="reveal">
            I am also the author of <em>Cookie's Sweetest Day: Where Friendship Leads the Way!</em>, a children's
            book inspired by kindness, inclusion, and the meaningful friendships that have shaped my own life.
            Publishing my first book fulfilled a dream I carried with me since I was eight years old and
            reinforced a lesson I now share with my students:
          </p>
          <p className="reveal font-[family-name:var(--font-display)] text-2xl italic text-[var(--color-gold-700)] text-center py-6 border-y border-[var(--color-teal-700)]/15">
            Your ideas matter, your voice matters, and it's never too late to pursue a dream.
          </p>
          <p className="reveal">
            When I'm not writing or teaching, you'll find me spending time with family, volunteering in
            the community, enjoying a good cup of coffee, loving on animals, and finding inspiration in
            the everyday moments that often become the best stories.
          </p>
          <p className="reveal">
            Whether you're a parent, student, teacher, or aspiring writer, I'm honored to be part of
            your writing journey.
          </p>
          <p className="reveal font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-teal-800)] pt-4">
            Let's start writing your future — one story, one idea, and one confident voice at a time.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="eyebrow justify-center reveal">What Guides My Teaching</div>
            <h2 className="reveal mt-5 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light text-[var(--color-teal-900)]">
              Three guiding <em className="text-[var(--color-gold-600)]">beliefs</em>.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Every voice matters", d: "Each student has unique experiences, ideas, and stories worth telling. My job is to help them tell those stories with clarity and confidence." },
              { n: "02", t: "Writing is a craft, not a talent", d: "Strong writing is built — through practice, feedback, and encouragement. Every student can grow into a stronger writer." },
              { n: "03", t: "Joy fuels learning", d: "When writing feels meaningful and fun, students engage more deeply — and the skills last a lifetime." },
            ].map((v) => (
              <div key={v.n} className="reveal lift bg-white rounded-3xl p-8 border border-[var(--color-teal-700)]/10 shadow-sm">
                <div className="text-[var(--color-gold-600)] text-xs uppercase tracking-widest mb-5">{v.n}</div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-teal-900)] mb-3">{v.t}</h3>
                <p className="text-[var(--color-teal-900)]/75 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14 reveal">
            <Link to="/contact" className="btn-primary">Work with Sonia <span aria-hidden>→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
