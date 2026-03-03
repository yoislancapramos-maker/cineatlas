import { Shield, Play, Monitor, Briefcase } from "lucide-react";

const badges = [
  { icon: Shield, label: "Rights-Aware" },
  { icon: Play, label: "AVOD Focused" },
  { icon: Monitor, label: "YouTube Distribution" },
  { icon: Briefcase, label: "B2B Ready" },
];

const TrustStrip = () => {
  return (
    <section className="relative py-12 border-y border-border/30">
      <div className="absolute inset-0 bg-cinema-surface/50" />
      <div className="relative container mx-auto px-6 text-center">
        <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-8">
          Industry-Aligned Rights & AVOD Workflow
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 text-foreground/60"
            >
              <Icon className="h-4 w-4 text-primary/70" strokeWidth={1.5} />
              <span className="font-body text-xs tracking-widest uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
