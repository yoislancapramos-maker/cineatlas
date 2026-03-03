import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ company: "", email: "", details: "" });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.company.trim() || !form.email.trim() || !form.details.trim()) return;

  try {
    const res = await fetch("https://formspree.io/f/xreawjnd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSubmitted(true);
      setForm({ company: "", email: "", details: "" });
    } else {
      alert("Error sending form");
    }
  } catch (err) {
    alert("Network error");
  }
};

  return (
 <section id="contact" className="py-10 md:py-12 scroll-mt-[42px]">
      <div className="container mx-auto px-6 max-w-[1000px]">
        <div className="text-center mb-2">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-gold-gradient gold-text-glow mb-4">
            Licensing Inquiries
          </h2>
          <p className="font-body text-muted-foreground">
            For distribution partnerships and content licensing opportunities.
          </p>
        </div>

        <div className="glass-card rounded-sm p-2.5 md:p-3 banner-gold-rim w-full max-w-[780px] mx-auto">
          {submitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-primary/30 bg-primary/5 mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">Inquiry Received</h3>
              <p className="font-body text-muted-foreground text-sm max-w-md mx-auto">
                Thank you for your interest. Our licensing team will review your submission
                and respond within 2–3 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Company / Distributor
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-input border border-border/50 rounded-sm px-4 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="Your company name"
                  required
                  maxLength={100}
                />
              </div>
              <div>
                <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Corporate Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-input border border-border/50 rounded-sm px-4 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="you@company.com"
                  required
                  maxLength={255}
                />
              </div>
              <div>
                <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Catalog Details
                </label>
                <textarea
                  name="details"
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  rows={3}
                  className="w-full bg-input border border-border/50 rounded-sm px-4 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Describe your catalog, number of titles, genres, and territories…"
                  required
                  maxLength={1000}
                />
              </div>
              <button
                type="submit"
                className="metallic-shine w-full rounded-sm bg-primary px-6 py-2.5 font-body text-sm font-semibold tracking-wider uppercase text-primary-foreground transition-all duration-300 hover:brightness-110 gold-glow-strong"
              >
                Submit Inquiry
              </button>
              <p className="font-body text-[11px] text-muted-foreground/50 text-center mt-4">
                All inquiries are reviewed under our rights compliance guidelines.
              </p>

              {/* === Direct email fallback === */}
<div className="pt-6 text-center">
  <p className="font-body text-xs text-muted-foreground mb-3">
    For direct licensing communication:
  </p>

  <a
    href="mailto:cineatlas.contacto@gmail.com"
    className="shine-sweep inline-flex items-center justify-center rounded-sm border border-primary/40 px-8 py-2 font-body text-xs font-semibold tracking-wider uppercase text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary/60"
  >
    cineatlas.contacto@gmail.com
  </a>
</div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
