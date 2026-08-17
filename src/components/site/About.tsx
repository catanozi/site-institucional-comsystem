import { timeline } from "@/config/site";
import { Container, Reveal, SectionTag } from "./primitives";

export function About() {
  return (
    <section id="sobre" className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <SectionTag>Sobre a Comsystem</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-[2.5rem]">
              Há mais de três décadas transformando negócios por meio da tecnologia
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Constituída em 1993, a Comsystem Informática reúne profissionais especializados em
                criar soluções em informática para os mais diversificados segmentos do comércio.
              </p>
              <p>
                Nosso portfólio conta com empresas situadas em todo o Mato Grosso do Sul,
                principalmente na região norte do estado — uma proximidade que nos permite entender
                a realidade de cada cliente e evoluir junto com ela.
              </p>
              <p>
                Ao longo dos anos, ampliamos nossas soluções de gestão, desenvolvemos sistemas
                especializados e levamos nossas plataformas também para dispositivos móveis.
              </p>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="surface-card p-6">
                <p className="font-display text-4xl font-extrabold text-primary">10 mil+</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  clientes que confiam no nosso trabalho.
                </p>
              </div>
              <div className="surface-card p-6">
                <p className="font-display text-4xl font-extrabold text-primary">33+</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  anos criando soluções para todo o Brasil.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ol className="relative space-y-2 border-l border-border pl-8">
              {timeline.map((t, i) => (
                <li key={t.title} className="relative pb-8 last:pb-0">
                  <span
                    className="absolute -left-[41px] grid h-6 w-6 place-items-center rounded-full border-4 border-surface"
                    style={{ background: "var(--gradient-accent)" }}
                    aria-hidden="true"
                  />
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-foreground/60">
                    {t.year}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-bold">{t.title}</h3>
                  {i === timeline.length - 1 && (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Tecnologia para empresas, agronegócios e administração pública, com
                      atendimento próximo e especializado.
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
