import { ArrowRight } from "lucide-react";
import { protocolFeatures } from "@/config/site";
import { Container, Reveal, SectionTag } from "./primitives";

export function ProtocolSection() {
  return (
    <section id="clipdoc" className="bg-background py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
          <Reveal className="lg:sticky lg:top-28">
            <SectionTag>Gestão de Protocolos</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-[2.5rem]">
              Clipdoc: todo o controle de documentos e protocolos em uma única plataforma
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Sistema Clipdoc, desenvolvido para o gerenciamento de documentos e protocolos,
              permitindo o cadastro, a tramitação, o acompanhamento de processos e a organização
              digital de documentos.
            </p>
          </Reveal>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {protocolFeatures.map(({ icon: Icon, title }, i) => (
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
                  Conheça o Clipdoc aplicado à rotina da sua organização.
                </h3>
                <p className="mt-2 text-sm text-navy-foreground/70">
                  A Comsystem apresenta a solução conforme o fluxo de documentos e protocolos.
                </p>
                <a
                  href="/contato?segmento=administracao-publica&solucao=clipdoc"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
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
