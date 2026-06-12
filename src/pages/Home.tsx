import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden bg-[var(--color-cream)]">
        <div className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-[var(--color-gold-200)]/40 blur-3xl anim-float" />
        <div className="absolute -bottom-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-[var(--color-teal-200)]/40 blur-3xl anim-float" style={{ animationDelay: "2.5s" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-20 grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
          <div>
            <div className="eyebrow anim-fade-up">For Students, Parents & Teachers</div>

            <h1 className="mt-6 font-[family-name:var(--font-display)] text-[2.7rem] sm:text-5xl lg:text-[4.4rem] leading-[1.02] font-light text-[var(--color-teal-900)]">
              <span className="anim-fade-up delay-100 block">Helping kids find</span>
              <span className="anim-fade-up delay-200 block">their <span className="italic font-medium hand-underline">voice</span>—and the</span>
              <span className="anim-fade-up delay-300 block">
                <span className="gold-shimmer font-semibold">confidence</span> to use it.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-[1.08rem] leading-relaxed text-[var(--color-teal-800)]/85 anim-fade-up delay-400">
              I'm <span className="font-semibold">Sonia GT</span> — writer, educator, and parent.
              For 20+ years I've been helping students in grades 3–12 become stronger writers,
              thinkers, and storytellers through personalized coaching, college essay support,
              and the Confident Writers Club.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4 anim-fade-up delay-500">
              <Link to="/services" className="btn-primary">Explore Coaching <span aria-hidden>→</span></Link>
              <Link to="/confident-writers-club" className="btn-ghost">Join the Writers Club</Link>
            </div>

            <div className="mt-12 flex items-center gap-8 anim-fade-up delay-700">
              <Stat n="20+" l="Years coaching writers" />
              <div className="h-10 w-px bg-[var(--color-teal-700)]/20" />
              <Stat n="3–12" l="Grades served" />
              <div className="h-10 w-px bg-[var(--color-teal-700)]/20" />
              <Stat n="1:1" l="Personalized feedback" />
            </div>
          </div>

          {/* Hero image collage */}
          <div className="relative anim-scale-in delay-300">
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full border-2 border-dashed border-[var(--color-gold-400)] anim-float" />
            <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-[var(--color-lavender)]/40 blur-xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-30px_rgba(20,79,80,.55)] aspect-[4/5]">
              <img src="/images/hero-students.jpg" alt="A young student joyfully writing in a notebook" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-teal-900)]/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -left-10 bottom-10 hidden md:block bg-white rounded-2xl shadow-xl p-5 max-w-[14rem] anim-fade-up delay-700">
              <div className="font-[family-name:var(--font-script)] text-2xl text-[var(--color-gold-600)] leading-none">“</div>
              <p className="text-sm text-[var(--color-teal-900)] leading-snug -mt-2">
                Sonia helped my daughter fall in love with writing again.
              </p>
              <div className="text-[0.7rem] uppercase tracking-widest text-[var(--color-teal-700)]/70 mt-3">— A grateful parent</div>
            </div>
            <div className="absolute -right-4 top-10 hidden md:flex items-center gap-2 bg-[var(--color-teal-900)] text-white rounded-full px-4 py-2 shadow-lg anim-fade-up delay-500">
              <span className="h-2 w-2 rounded-full bg-[var(--color-gold-300)] animate-pulse" />
              <span className="text-xs tracking-wider uppercase">Now enrolling</span>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <Marquee />
      </section>

      {/* ========== INTRO ========== */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <div className="eyebrow justify-center reveal">A Word From Sonia</div>
          <p className="reveal mt-8 font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-[2.7rem] leading-[1.25] font-light text-[var(--color-teal-900)]">
            “Writing is more than an academic skill — it's a powerful tool
            for <em className="text-[var(--color-gold-600)] not-italic font-medium">self-expression</em>, <em className="text-[var(--color-gold-600)] not-italic font-medium">confidence</em>,
            communication, and future success.”
          </p>
          <div className="reveal mt-8 font-[family-name:var(--font-script)] text-3xl text-[var(--color-teal-700)]">— Sonia GT</div>
        </div>
      </section>

      {/* ========== WHAT I OFFER ========== */}
      <section className="relative bg-[var(--color-teal-900)] text-[var(--color-cream)] py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[var(--color-gold-400)]/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-end mb-16">
            <div>
              <div className="eyebrow !text-[var(--color-gold-300)] reveal">What I Offer</div>
              <h2 className="reveal mt-5 font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-light">
                Programs designed for every stage of a student's <span className="italic text-[var(--color-gold-300)]">writing journey</span>.
              </h2>
            </div>
            <p className="reveal text-white/75 leading-relaxed lg:pb-3">
              From a third-grader writing their very first story to a high-school senior crafting their
              college admissions essay — every program meets students where they are and helps them grow
              with personalized feedback, encouragement, and practical strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <OfferCard
              num="01"
              title="Writing Tutorials"
              desc="Personalized 1:1 and small-group online coaching for grades 3–12 in creative, essay, narrative, opinion, and informational writing."
              to="/services"
            />
            <OfferCard
              num="02"
              title="College Essay Coaching"
              desc="Help students discover authentic stories and craft compelling personal statements, Common App essays, and supplements."
              to="/college-essay-coaching"
              featured
            />
            <OfferCard
              num="03"
              title="Confident Writers Club"
              desc="A monthly membership with fresh writing activities, prompts, worksheets, and parent guides — perfect for homeschool families & teachers."
              to="/confident-writers-club"
            />
          </div>
        </div>
      </section>

      {/* ========== AUDIENCES ========== */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          <div className="reveal relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[var(--color-teal-200)]/40 -rotate-2" />
            <img src="/images/kids-writing.jpg" alt="Kids enjoying creative writing together" className="relative rounded-[2rem] shadow-xl aspect-[5/6] object-cover" />
          </div>
          <div>
            <div className="eyebrow reveal">Who It's For</div>
            <h2 className="reveal mt-5 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light text-[var(--color-teal-900)] leading-tight">
              A welcoming home for the families and educators raising tomorrow's <em className="text-[var(--color-gold-600)]">storytellers</em>.
            </h2>

            <div className="mt-10 space-y-6">
              <AudienceRow
                title="Parents of grades 3 & up"
                body="Wanting their kids to build strong creative and academic writing skills — and the confidence to share their ideas."
              />
              <AudienceRow
                title="Teachers & homeschool parents"
                body="Looking for curriculum support, fresh activities, and ready-to-use materials that make writing engaging."
              />
              <AudienceRow
                title="High schoolers applying to college"
                body="Needing personalized coaching for personal statements, Common App essays, and supplements."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA: CLUB ========== */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[var(--color-teal-700)] via-[var(--color-teal-800)] to-[var(--color-teal-900)] text-white px-8 py-16 lg:p-20">
            <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[var(--color-gold-300)]/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[var(--color-lavender)]/20 blur-3xl" />

            <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
              <div>
                <div className="eyebrow !text-[var(--color-gold-300)] reveal">The Confident Writers Club</div>
                <h2 className="reveal mt-5 font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                  Monthly writing inspiration, delivered to your inbox.
                </h2>
                <p className="reveal mt-6 text-white/80 max-w-xl leading-relaxed">
                  Give your child a fun, engaging way to strengthen writing skills while building
                  confidence, creativity, and communication — all from home.
                </p>
                <div className="reveal mt-8 flex flex-wrap gap-4">
                  <Link to="/confident-writers-club" className="btn-primary !bg-[var(--color-gold-400)] !text-[var(--color-teal-900)] hover:!bg-[var(--color-gold-300)]">
                    Join the Club →
                  </Link>
                  <Link to="/resources" className="btn-ghost !border-white/40 !text-white hover:!bg-white/10">Browse free resources</Link>
                </div>
              </div>
              <ul className="reveal grid gap-3">
                {["Monthly creative writing activities",
                  "Exclusive prompts & story starters",
                  "Printable worksheets & challenges",
                  "Parent guides & support tips",
                  "Encouraging activities for reluctant writers"].map((t, i) => (
                  <li key={t} className="flex items-start gap-3 bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/10"
                      style={{ animation: `fadeUp .8s ${i * 80}ms both` }}>
                    <span className="h-7 w-7 rounded-full bg-[var(--color-gold-400)] text-[var(--color-teal-900)] flex-shrink-0 flex items-center justify-center">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-white/90">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIAL STRIP ========== */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
          <div className="eyebrow justify-center reveal">From Families & Students</div>
          <blockquote className="reveal mt-8 font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-light leading-snug text-[var(--color-teal-900)]">
            “My son went from <em className="text-[var(--color-gold-600)] not-italic">dreading writing</em> to asking
            when his next session with Sonia is. She makes writing feel like an adventure.”
          </blockquote>
          <div className="reveal mt-8 text-[var(--color-teal-700)] tracking-wider uppercase text-sm">— Parent of a 5th-grader</div>
          <Link to="/testimonials" className="reveal inline-block mt-8 link-underline font-medium text-[var(--color-teal-800)]">
            Read more stories →
          </Link>
        </div>
      </section>

      {/* ========== BOOK ========== */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
          <div className="reveal relative max-w-xs mx-auto">
            <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-[var(--color-lavender)] via-[var(--color-teal-300)] to-[var(--color-gold-300)] shadow-2xl p-8 flex flex-col justify-between">
              <div className="font-[family-name:var(--font-display)] text-white text-2xl leading-tight drop-shadow">
                Cookie's Sweetest Day
              </div>
              <div className="text-white/90 text-xs uppercase tracking-widest">A children's book by Sonia GT</div>
            </div>
          </div>
          <div className="reveal">
            <div className="eyebrow">Also from Sonia</div>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--color-teal-900)] font-light leading-tight">
              <em>Cookie's Sweetest Day: Where Friendship Leads the Way!</em>
            </h3>
            <p className="mt-5 text-[var(--color-teal-800)]/85 leading-relaxed">
              A children's book inspired by kindness, inclusion, and the meaningful friendships that
              shaped Sonia's own life — a story she carried in her heart since she was eight years old.
            </p>
            <p className="mt-4 font-[family-name:var(--font-script)] text-2xl text-[var(--color-gold-600)]">
              Your ideas matter. Your voice matters.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-teal-800)]">{n}</div>
      <div className="text-xs uppercase tracking-widest text-[var(--color-teal-700)]/70 mt-1">{l}</div>
    </div>
  );
}

function OfferCard({ num, title, desc, to, featured }: { num: string; title: string; desc: string; to: string; featured?: boolean }) {
  return (
    <Link
      to={to}
      className={`reveal lift group block rounded-3xl p-8 border transition ${
        featured ? "bg-[var(--color-gold-400)] text-[var(--color-teal-900)] border-transparent"
                 : "bg-white/5 backdrop-blur border-white/10 text-white hover:bg-white/10"
      }`}
    >
      <div className={`text-xs uppercase tracking-widest mb-6 ${featured ? "text-[var(--color-teal-800)]" : "text-[var(--color-gold-300)]"}`}>{num}</div>
      <h3 className="font-[family-name:var(--font-display)] text-2xl mb-4 leading-tight">{title}</h3>
      <p className={`text-[0.95rem] leading-relaxed ${featured ? "text-[var(--color-teal-900)]/80" : "text-white/75"}`}>{desc}</p>
      <div className="mt-8 inline-flex items-center gap-2 font-medium">
        Learn more
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}

function AudienceRow({ title, body }: { title: string; body: string }) {
  return (
    <div className="reveal border-l-2 border-[var(--color-gold-400)] pl-5 py-1">
      <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-teal-800)] font-medium">{title}</h3>
      <p className="mt-1 text-[var(--color-teal-900)]/75 leading-relaxed">{body}</p>
    </div>
  );
}

function Marquee() {
  const items = [
    "Creative Writing", "★", "College Essays", "★", "Public Speaking", "★",
    "Homeschool Support", "★", "Grades 3–12", "★", "Personal Narratives", "★",
    "Confident Writers Club", "★",
  ];
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-[var(--color-teal-700)]/15 bg-[var(--color-cream)]">
      <div className="flex gap-12 py-5 anim-marquee whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className={`font-[family-name:var(--font-display)] italic text-2xl ${t === "★" ? "text-[var(--color-gold-500)]" : "text-[var(--color-teal-800)]"}`}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
