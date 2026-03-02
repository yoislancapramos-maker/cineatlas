import { FileCheck, Handshake, BarChart3, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: FileCheck,
    title: "Rights Review",
    desc: "Thorough verification of content rights, territories, and licensing windows to ensure full compliance.",
  },
  {
    icon: Handshake,
    title: "Agreement Structure",
    desc: "Transparent deal structuring with clear revenue splits, reporting cadence, and distribution terms.",
  },
  {
    icon: BarChart3,
    title: "AVOD Optimization",
    desc: "Strategic placement, metadata optimization, and audience targeting across YouTube AVOD channels.",
  },
  {
    icon: TrendingUp,
    title: "Monetization & Reporting",
    desc: "Real-time revenue tracking with detailed analytics and periodic performance reporting.",
  },
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gold-gradient gold-text-glow mb-4">
            How We Work
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            A structured, rights-first approach to AVOD film distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="glass-card rounded-sm p-8 group hover:-translate-y-1 transition-all duration-500 hover:gold-glow"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-sm border border-primary/20 bg-primary/5">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
