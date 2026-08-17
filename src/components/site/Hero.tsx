import { ArrowRight, MessageCircle, TrendingUp, ShieldCheck } from "lucide-react";
import heroMockup from "@/assets/sgc-mockup.jpg";
import { company } from "@/config/site";
import { Container } from "./primitives";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-[72px] text-navy-foreground"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 grid-lines opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-[520px] w-[520px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--cyan), transparent 65%)" }}
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground/85">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
            Desde {company.foundedYear}
          </span>

          <h1 className="mt-6 font-display text-[2.15rem] font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            Tecnologia que transforma a <span className="text-gradient">gestão do seu negócio</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            Há mais de 33 anos, a Comsystem desenvolve soluções inteligentes para simplificar
            processos, aumentar o controle e impulsionar empresas de diferentes segmentos.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-primary-foreground shadow-[0_18px_40px_-18px_oklch(0.78_0.13_203_/_0.8)] transition-transform duration-300 hover:-translate-y-0.5"
              style={{ background: "var(--gradient-accent)" }}
            >
              Conheça nossas soluções
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/contato"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold text-navy-foreground backdrop-blur transition-colors hover:bg-white/12"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Fale com um especialista
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/5 p-2 shadow-[0_50px_100px_-40px_oklch(0.1_0.05_258_/_0.9)] backdrop-blur">
            <img
              src={heroMockup}
              alt="Dashboard do sistema SGC Comsystem em um notebook ao lado do aplicativo em um smartphone"
              width={1408}
              height={1008}
              className="w-full rounded-[22px]"
            />
          </div>

          <div className="float-soft absolute -left-3 top-8 hidden rounded-2xl border border-white/15 bg-navy/85 px-4 py-3 shadow-[var(--shadow-lift)] backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <span
                className="grid h-9 w-9 place-items-center rounded-xl bg-cyan/15 text-cyan"
                aria-hidden="true"
              >
                <TrendingUp className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs text-navy-foreground/60">Indicadores</p>
                <p className="text-sm font-bold">Visão em tempo real</p>
              </div>
            </div>
          </div>

          <div
            className="float-soft absolute -bottom-5 right-2 hidden rounded-2xl border border-white/15 bg-navy/85 px-4 py-3 shadow-[var(--shadow-lift)] backdrop-blur sm:block"
            style={{ animationDelay: "1.4s" }}
          >
            <div className="flex items-center gap-3">
              <span
                className="grid h-9 w-9 place-items-center rounded-xl bg-cyan/15 text-cyan"
                aria-hidden="true"
              >
                <ShieldCheck className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs text-navy-foreground/60">Acesso</p>
                <p className="text-sm font-bold">De qualquer dispositivo</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="h-16 bg-gradient-to-b from-transparent to-background/0" aria-hidden="true" />
    </section>
  );
}
