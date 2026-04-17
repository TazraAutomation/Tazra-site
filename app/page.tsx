import React from "react";
import {
  Shield,
  Lock,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Server,
  Laptop,
  PhoneCall,
  Mail,
  Globe,
  Cpu,
} from "lucide-react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

function Card({ className = "", ...props }: DivProps) {
  return <div className={className} {...props} />;
}

function CardContent({ className = "", ...props }: DivProps) {
  return <div className={className} {...props} />;
}

function Button({
  className = "",
  variant = "default",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center whitespace-nowrap transition font-medium";
  const variants = {
    default: "bg-white text-slate-950 hover:bg-slate-200",
    outline:
      "border border-white/20 bg-transparent text-white hover:bg-white/10",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

const coverages = [
  {
    title: "Cyber Insurance",
    description:
      "Protection against breaches, ransomware, business interruption, and liability tied to technology failures.",
    icon: Shield,
  },
  {
    title: "Vendor & Third-Party Risk",
    description:
      "Exposure created by SaaS tools, vendors, and integrations that impact your security and operations.",
    icon: Server,
  },
  {
    title: "AI & Automation Risk",
    description:
      "Emerging risks from AI usage, automation workflows, and data handling across modern systems.",
    icon: Cpu,
  },
  {
    title: "Operational Downtime",
    description:
      "Financial and operational impact when systems go down due to cyber or technical failures.",
    icon: Lock,
  },
];

const industries = [
  "Technology companies",
  "Professional services firms",
  "Healthcare-adjacent businesses",
  "Financial services",
  "Manufacturing and controls",
  "Growing SMBs handling data & software",
];

const process = [
  {
    step: "01",
    title: "Technology Risk Review",
    text: "We assess your systems, vendors, data exposure, and operational dependencies before recommending solutions.",
  },
  {
    step: "02",
    title: "Risk Strategy",
    text: "We map where insurance, controls, and processes fit into your overall risk posture.",
  },
  {
    step: "03",
    title: "Insurance Placement",
    text: "We secure cyber coverage aligned to your real exposure—not just the lowest premium.",
  },
  {
    step: "04",
    title: "Ongoing Advisory",
    text: "We evolve your strategy as your business, tech stack, and risk profile grow.",
  },
];

const features = [
  "Technology-first risk positioning",
  "Cyber insurance as part of a broader strategy",
  "Built for modern SMBs running on software",
  "Designed for long-term growth and resilience",
];

export default function Home() {
  return (
    <>
  <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      
      <p className="text-sm font-light tracking-[0.2em] text-white">
        TAZRA
      </p>

      <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
        <a href="#services" className="hover:text-white transition">Services</a>
        <a href="#process" className="hover:text-white transition">Process</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </div>

    </div>
  </nav>
    <div className="min-h-screen bg-slate-950 text-white">
      <section id="hero" className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                <img src="/logo.png" alt="logo" className="h-12 w-12" />
              </div>
              <div>
                <p className="text-lg font-light tracking-wide">TAZRA</p>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-300">
                  Technology Risk 
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-28">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
                <Lock className="h-4 w-4" />
                Navigating risk in the new era of technology
              </div>

              <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Technology risk protection for modern businesses.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
                Tazra helps companies manage cyber risk, vendor exposure, and
                emerging AI risks—while securing the right insurance to back it all.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button className="rounded-2xl px-6 py-6 text-base font-medium">
                  Start a Risk Review
                </Button>
                <Button
                  variant="outline"
                  className="rounded-2xl px-6 py-6 text-base"
                >
                  Explore Solutions
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" />
                    <p className="text-sm leading-6 text-slate-200">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="rounded-[28px] border border-white/10 bg-white/5 text-white shadow-2xl backdrop-blur">
                <CardContent className="p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-2xl bg-cyan-400/10 p-3 ring-1 ring-cyan-300/20">
                      <Laptop className="h-6 w-6 text-cyan-200" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold">What Tazra helps manage</p>
                      <p className="text-sm text-slate-300">Core technology risks</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Customer and employee data exposure",
                      "Ransomware and cyber attacks",
                      "Vendor and SaaS dependencies",
                      "AI and automation risk",
                      "Operational downtime",
                      "Client and contract pressure",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-4"
                      >
                        <span className="text-sm text-slate-100">{item}</span>
                        <ArrowRight className="h-4 w-4 text-slate-400" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
            Solutions
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Risk, insurance, and advisory in one place.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {coverages.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="rounded-[24px] border border-white/10 bg-white/5 text-white"
              >
                <CardContent className="p-6">
                  <div className="mb-5 inline-flex rounded-2xl bg-white/10 p-3 ring-1 ring-white/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="Clients" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
            Beyond Insurance
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Advisory built for modern risk.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            "AI risk assessments",
            "Vendor and third-party reviews",
            "Compliance readiness (SOC2, ISO)",
            "Incident response planning",
            "Security posture evaluation",
            "Ongoing risk strategy",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-sm text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
                Who We Serve
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Companies with real technology exposure.
              </h2>
            </div>

            <Card className="rounded-[24px] border border-white/10 bg-slate-900/70 text-white">
              <CardContent className="p-6">
                <div className="grid gap-3">
                  {industries.map((industry) => (
                    <div
                      key={industry}
                      className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-slate-200"
                    >
                      {industry}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            A strategic approach to technology risk.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {process.map((item) => (
            <Card
              key={item.step}
              className="rounded-[24px] border border-white/10 bg-white/5 text-white"
            >
              <CardContent className="p-6">
                <div className="text-sm font-semibold tracking-[0.22em] text-cyan-300">
                  {item.step}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
                Get Started
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Let’s build your technology risk strategy.
              </h2>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button className="rounded-2xl px-6 py-6 text-base font-medium">
                  Book a Consultation
                </Button>
                <Button
                  variant="outline"
                  className="rounded-2xl px-6 py-6 text-base"
                >
                  Get a Cyber Quote
                </Button>
              </div>
            </div>

            <Card className="rounded-[28px] border border-white/10 bg-white/5 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">Contact Tazra</h3>
                <div className="mt-6 space-y-4 text-sm text-slate-300">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-4">
                    <PhoneCall className="h-4 w-4 text-cyan-300" />
                    <span>(972) 656-3781</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-4">
                    <Mail className="h-4 w-4 text-cyan-300" />
                    <span>info@tazra.io</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-4">
                    <Globe className="h-4 w-4 text-cyan-300" />
                    <span>tazra.io</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
          </div>
    </>
  );
}