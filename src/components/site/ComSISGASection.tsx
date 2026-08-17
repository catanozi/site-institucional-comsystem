import {
  ArrowRight,
  Boxes,
  Building2,
  FileText,
  Layers,
  Repeat,
  ShoppingCart,
  Smartphone,
  Sprout,
  Tractor,
  Wallet,
} from "lucide-react";
import agroImg from "@/assets/agro.jpg";
import { comsisgaFeatures } from "@/config/site";
import { Container, Reveal, SectionTag } from "./primitives";

const comsisgaFeatureIcons = [
  Building2,
  Tractor,
  Layers,
  Boxes,
  Sprout,
  Repeat,
  ShoppingCart,
  Wallet,
  FileText,
  Smartphone,
];

export function ComSISGASection() {
  return (
    <section id="comsisga" className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14 xl:grid-cols-2 xl:gap-16">
          <Reveal>
            <SectionTag>Agronegócio</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-[2.5rem]">
              Tecnologia especializada para o agronegócio
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              O ComSISGA permite acompanhar a operação administrativa, financeira e produtiva em um
              único lugar, de forma fácil e rápida — inclusive por dispositivos móveis.
            </p>

            <div className="relative mx-auto mt-8 w-full max-w-[40rem] pb-8 sm:pb-10 lg:max-w-none lg:pb-8">
              <div className="overflow-hidden rounded-[28px] border border-border shadow-[var(--shadow-lift)]">
                <img
                  src={agroImg}
                  alt="Produtor rural acompanhando indicadores de gestão agrícola em um tablet no campo"
                  width={1408}
                  height={1008}
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <div className="float-soft absolute -bottom-5 left-5 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-lift)] sm:block">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  ComSISGA
                </p>
                <p className="mt-1 font-display text-sm font-bold">
                  Administrativo, financeiro e produtivo
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80} className="comsisga-content-column">
            <div className="grid gap-3.5 sm:grid-cols-2">
              {comsisgaFeatures.map((item, index) => {
                const Icon = comsisgaFeatureIcons[index];

                return (
                  <div key={item} className="surface-card flex h-full items-start gap-3.5 p-4.5">
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <p className="min-w-0 pt-2 font-display text-sm font-bold leading-snug">
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>

            <a
              href="/contato?segmento=agronegocio&solucao=comsisga"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              style={{ background: "var(--gradient-accent)" }}
            >
              Conhecer o ComSISGA
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
