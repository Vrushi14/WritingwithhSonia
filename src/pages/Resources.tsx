import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

type Item = {
  title: string;
  desc: string;
  price: "Free" | string;
  grade: string;
  category: "Worksheets" | "Workbooks" | "Prompts" | "Guides";
  badge?: string;
  accent: string;
};

const ITEMS: Item[] = [
  { title: "10 Story Starters for Reluctant Writers", desc: "Ten gentle, imagination-sparking prompts that get even the most hesitant writers moving.", price: "Free", grade: "Grades 3–6", category: "Prompts", accent: "var(--color-teal-300)" },
  { title: "The Confident Paragraph Workbook", desc: "Step-by-step practice to build clear, organized paragraphs students can use in any subject.", price: "$12", grade: "Grades 4–7", category: "Workbooks", badge: "Bestseller", accent: "var(--color-gold-300)" },
  { title: "Show, Don't Tell — Worksheet Pack", desc: "Six printable worksheets that teach descriptive writing through fun, visual exercises.", price: "$7", grade: "Grades 4–8", category: "Worksheets", accent: "var(--color-lavender)" },
  { title: "Parent Guide: How to Talk About Your Child's Writing", desc: "A short, encouraging guide for parents who want to support without pressure.", price: "Free", grade: "All ages", category: "Guides", accent: "var(--color-teal-300)" },
  { title: "Creative Writing Toolkit — Volume 1", desc: "A 40-page workbook with prompts, planners, and exercises for budding storytellers.", price: "$18", grade: "Grades 5–9", category: "Workbooks", badge: "New", accent: "var(--color-gold-300)" },
  { title: "Personal Narrative Planner", desc: "A printable planner that walks students through brainstorming, drafting, and revising a personal narrative.", price: "$5", grade: "Grades 5–10", category: "Worksheets", accent: "var(--color-teal-300)" },
  { title: "College Essay Brainstorm Workbook", desc: "Guided exercises to help juniors and seniors discover meaningful essay topics.", price: "$24", grade: "Grades 11–12", category: "Workbooks", badge: "Popular", accent: "var(--color-gold-300)" },
  { title: "30 Days of Writing Prompts (Free Sample)", desc: "A free 7-day taste of the kind of daily prompts members get inside the Club.", price: "Free", grade: "Grades 3–8", category: "Prompts", accent: "var(--color-lavender)" },
  { title: "Grammar Basics — Sentence Builder Pack", desc: "Hands-on worksheets that turn grammar drills into puzzles students actually enjoy.", price: "$9", grade: "Grades 3–6", category: "Worksheets", accent: "var(--color-teal-300)" },
];

const filters = ["All", "Free", "Worksheets", "Workbooks", "Prompts", "Guides"] as const;

export default function Resources() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const items = useMemo(() => {
    if (active === "All") return ITEMS;
    if (active === "Free") return ITEMS.filter((i) => i.price === "Free");
    return ITEMS.filter((i) => i.category === active);
  }, [active]);

  return (
    <>
      <PageHero
        eyebrow="Resources & Shop"
        title={<>Practical, beautiful resources that make writing <em className="text-[var(--color-gold-600)]">come alive</em>.</>}
        subtitle="Printable worksheets, workbooks, prompts, and parent guides — designed by an educator and parent who understands what really works at home and in the classroom."
      />

      {/* Filter bar */}
      <section className="py-10 sticky top-20 z-30 bg-[var(--color-cream)]/85 backdrop-blur border-y border-[var(--color-teal-700)]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap gap-2 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition border ${
                active === f
                  ? "bg-[var(--color-teal-800)] text-white border-transparent"
                  : "bg-white text-[var(--color-teal-900)] border-[var(--color-teal-700)]/20 hover:border-[var(--color-teal-700)]/50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Items grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <article
                key={item.title}
                className="reveal lift bg-white rounded-3xl overflow-hidden border border-[var(--color-teal-700)]/10 shadow-sm flex flex-col"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {/* Visual */}
                <div
                  className="relative aspect-[5/3] flex items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${item.accent} 0%, var(--color-cream) 100%)` }}
                >
                  <div className="font-[family-name:var(--font-display)] italic text-[var(--color-teal-900)]/35 text-7xl leading-none select-none">
                    {item.category[0]}
                  </div>
                  {item.badge && (
                    <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest font-bold bg-[var(--color-teal-900)] text-[var(--color-gold-300)] px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${
                    item.price === "Free"
                      ? "bg-[var(--color-teal-700)] text-white"
                      : "bg-[var(--color-gold-400)] text-[var(--color-teal-900)]"
                  }`}>
                    {item.price}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-teal-700)] font-semibold">
                    {item.category} · {item.grade}
                  </div>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl text-[var(--color-teal-900)] leading-snug">{item.title}</h3>
                  <p className="mt-3 text-sm text-[var(--color-teal-900)]/75 leading-relaxed flex-1">{item.desc}</p>
                  <button className="mt-6 inline-flex items-center justify-between w-full px-5 py-3 rounded-full border border-[var(--color-teal-700)]/30 hover:border-[var(--color-teal-700)] text-[var(--color-teal-800)] font-medium transition group">
                    {item.price === "Free" ? "Download free" : "Add to cart"}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Club banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[var(--color-teal-800)] to-[var(--color-teal-900)] text-white p-10 lg:p-14 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[var(--color-gold-300)]/15 blur-3xl" />
            <div>
              <div className="eyebrow !text-[var(--color-gold-300)]">Want even more?</div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                Get fresh resources <em className="text-[var(--color-gold-300)]">every month</em> inside the Confident Writers Club.
              </h2>
              <p className="mt-5 text-white/80 max-w-xl">
                Members receive monthly creative writing activities, exclusive prompts, printable worksheets,
                parent guides, and bonus seasonal projects — all curated by Sonia.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/confident-writers-club" className="btn-primary !bg-[var(--color-gold-400)] !text-[var(--color-teal-900)] hover:!bg-[var(--color-gold-300)] justify-center">
                Join the Club →
              </Link>
              <Link to="/contact" className="btn-ghost !border-white/40 !text-white hover:!bg-white/10 justify-center">Ask Sonia a question</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
