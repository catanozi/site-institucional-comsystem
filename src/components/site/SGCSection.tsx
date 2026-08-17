import { ArrowRight } from "lucide-react";
import sgcMockup from "@/assets/sgc-mockup.jpg";
import { sgcFeatures } from "@/config/site";
import { Container, Reveal, SectionTag } from "./primitives";

export function SGCSection() {
  return (
    <section id="sgc" className="bg-background py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
          <Reveal className="lg:sticky lg:top-28">
            <SectionTag>SGC Comsystem</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-[2.5rem]">
              SGC: todo o controle da sua empresa em uma única plataforma
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Simplifique a gestão da sua empresa com o SGC Comsystem. O sistema reúne as
              ferramentas necessárias para administrar vendas, estoque, financeiro e obrigações
              fiscais — com acesso em qualquer lugar, a qualquer momento.
            </p>

            <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-lift)]">
              <img
                src={sgcMockup}
                alt="Tela do sistema SGC Comsystem exibindo indicadores de vendas em notebook e celular"
                width={1408}
                height={1008}
                loading="lazy"
                className="w-full"
              />
            </div>
          </Reveal>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {sgcFeatures.map(({ icon: Icon, title }, i) => (
                <Reveal key={title} delay={i * 50}>
                  <div className="surface-card flex h-full items-start gap-3.5 p-5">
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="min-w-0 pt-2 font-display text-sm font-bold leading-snug">
                      {title}
                    </h3>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div
                className="mt-6 overflow-hidden rounded-3xl p-8 text-navy-foreground"
                style={{ background: "var(--gradient-hero)" }}
              >
                <h3 className="font-display text-xl font-bold">
                  Descubra como o SGC pode simplificar sua operação.
                </h3>
                <p className="mt-2 text-sm text-navy-foreground/70">
                  Apresentamos o sistema conforme a realidade da sua empresa.
                </p>
                <a
                  href="/contato?segmento=comercio&solucao=gestao-empresarial"
                  className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ background: "var(--gradient-accent)" }}
                >
                  Solicitar demonstração
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
