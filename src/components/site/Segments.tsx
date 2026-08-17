import { useState } from "react";
import { segments } from "@/config/site";
import { cn } from "@/lib/utils";
import { Container, Reveal, SectionTag } from "./primitives";

export function Segments() {
  const [active, setActive] = useState(segments[0].id);
  const current = segments.find((s) => s.id === active) ?? segments[0];
  const Icon = current.icon;

  return (
    <section id="segmentos" className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <SectionTag>Segmentos</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-[2.6rem]">
            Soluções que acompanham a realidade do seu negócio
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-12">
          <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
            <div
              role="tablist"
              aria-label="Segmentos atendidos"
              className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
            >
              {segments.map((s) => (
                <button
                  key={s.id}
                  role="tab"
                  type="button"
                  id={`tab-${s.id}`}
                  aria-selected={active === s.id}
                  aria-controls={`panel-${s.id}`}
                  onClick={() => setActive(s.id)}
                  className={cn(
                    "flex shrink-0 items-center gap-3 rounded-2xl border px-5 py-3.5 text-left text-sm font-semibold transition-all duration-300",
                    active === s.id
                      ? "border-primary/25 bg-card text-primary shadow-[var(--shadow-soft)]"
                      : "border-transparent bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground",
                  )}
                >
                  <s.icon className="h-4.5 w-4.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  {s.label}
                </button>
              ))}
            </div>

            <div
              role="tabpanel"
              id={`panel-${current.id}`}
              aria-labelledby={`tab-${current.id}`}
              key={current.id}
              className="surface-card animate-in fade-in slide-in-from-bottom-2 duration-500 p-9 sm:p-12"
            >
              <span
                className="grid h-14 w-14 place-items-center rounded-2xl text-primary-foreground"
                style={{ background: "var(--gradient-accent)" }}
                aria-hidden="true"
              >
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold">{current.label}</h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                {current.text}
              </p>
              <a
                href={`/contato?segmento=${encodeURIComponent(current.querySlug ?? current.id)}`}
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-tech-blue"
              >
                Falar sobre esse segmento →
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
