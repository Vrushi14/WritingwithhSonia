import { useState } from "react";
import PageHero from "../components/PageHero";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", role: "Parent", interest: "Writing Tutorials", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's start <em className="text-[var(--color-gold-600)]">writing</em> your future.</>}
        subtitle="Have a question, want to schedule a discovery call, or curious whether a program is the right fit? Sonia personally responds to every message."
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-12">
          {/* Left: contact info */}
          <div className="space-y-8">
            <div className="reveal">
              <div className="eyebrow">Get in Touch</div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--color-teal-900)] font-light leading-snug">
                I'd love to hear about your <em className="text-[var(--color-gold-600)]">writer</em>.
              </h2>
              <p className="mt-4 text-[var(--color-teal-800)]/80 leading-relaxed">
                Tell me a little about your child or your classroom, and I'll get back to you within
                two business days with thoughtful next steps.
              </p>
            </div>

            <div className="space-y-5">
              <InfoRow icon="✉" label="Email" value="hello@writingwithsonia.com" />
              <InfoRow icon="☎" label="Phone (text-friendly)" value="(555) 123-4567" />
              <InfoRow icon="◷" label="Response time" value="Within 2 business days" />
              <InfoRow icon="✎" label="Best for" value="Students grades 3–12, parents, teachers, homeschoolers" />
            </div>

            <div className="reveal p-6 rounded-3xl bg-[var(--color-gold-100)] border border-[var(--color-gold-300)]/50">
              <div className="font-[family-name:var(--font-script)] text-2xl text-[var(--color-gold-700)] mb-1">A note from Sonia</div>
              <p className="text-[var(--color-teal-900)]/85 leading-relaxed">
                Every inquiry reaches me personally — never a team or a bot. I'm honored you're
                considering Writing With Sonia for your family or students.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal">
            <div className="relative bg-white rounded-[2rem] shadow-xl border border-[var(--color-teal-700)]/10 p-8 lg:p-10">
              {sent ? (
                <div className="text-center py-12 anim-scale-in">
                  <div className="mx-auto h-20 w-20 rounded-full bg-[var(--color-gold-400)] text-[var(--color-teal-900)] flex items-center justify-center mb-6">
                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-teal-900)] font-light">Thank you!</h3>
                  <p className="mt-3 text-[var(--color-teal-800)]/80">Your message is on its way to Sonia. She'll be in touch within two business days.</p>
                  <button onClick={() => setSent(false)} className="mt-8 btn-ghost">Send another message</button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <Field label="Your Name">
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[var(--color-cream)] rounded-xl px-4 py-3 border border-[var(--color-teal-700)]/15 focus:border-[var(--color-teal-700)] focus:outline-none transition" />
                  </Field>
                  <Field label="Email">
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[var(--color-cream)] rounded-xl px-4 py-3 border border-[var(--color-teal-700)]/15 focus:border-[var(--color-teal-700)] focus:outline-none transition" />
                  </Field>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="I am a…">
                      <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}
                        className="w-full bg-[var(--color-cream)] rounded-xl px-4 py-3 border border-[var(--color-teal-700)]/15 focus:border-[var(--color-teal-700)] focus:outline-none transition">
                        {["Parent", "Student", "Teacher", "Homeschool parent", "Other"].map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </Field>
                    <Field label="I'm interested in…">
                      <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}
                        className="w-full bg-[var(--color-cream)] rounded-xl px-4 py-3 border border-[var(--color-teal-700)]/15 focus:border-[var(--color-teal-700)] focus:outline-none transition">
                        {["Writing Tutorials", "College Essay Coaching", "Confident Writers Club", "Resources & Shop", "Something else"].map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </Field>
                  </div>
                  <Field label="Tell me a little more (grade, goals, anything helpful)">
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-[var(--color-cream)] rounded-xl px-4 py-3 border border-[var(--color-teal-700)]/15 focus:border-[var(--color-teal-700)] focus:outline-none transition resize-none" />
                  </Field>
                  <button type="submit" className="btn-primary w-full justify-center !py-4 text-base">
                    Send Message →
                  </button>
                  <p className="text-xs text-[var(--color-teal-700)]/70 text-center">
                    Your information is kept private and only used to respond to your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.2em] text-[var(--color-teal-700)] font-semibold mb-2">{label}</span>
      {children}
    </label>
  );
}

function InfoRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="reveal flex items-start gap-4 p-5 rounded-2xl bg-white border border-[var(--color-teal-700)]/10 shadow-sm lift">
      <div className="h-11 w-11 rounded-full bg-[var(--color-teal-700)] text-[var(--color-gold-300)] grid place-items-center text-xl flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-[var(--color-teal-700)]/80 font-semibold">{label}</div>
        <div className="mt-1 text-[var(--color-teal-900)] font-medium">{value}</div>
      </div>
    </div>
  );
}
