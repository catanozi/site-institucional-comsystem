import { ArrowRight, Check } from "lucide-react";
import { otherServices, solutions } from "@/config/site";
import { Container, Reveal, SectionTag } from "./primitives";

export function Solutions() {
  return (
    <section id="solucoes" className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionTag>Soluções</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-[2.6rem]">
            Soluções completas em tecnologia
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tecnologia para empresas, agronegócio e administração pública, integrando sistemas,
            infraestrutura, segurança, nuvem e desenvolvimento digital.
          </p>
        </Reveal>
      </Container>

      <div className="mx-auto mt-14 grid w-full max-w-[1400px] gap-6 px-5 sm:grid-cols-2 sm:px-8 xl:grid-cols-4">
        {solutions.map(({ id, icon: Icon, title, description, items, href }, i) => (
          <Reveal key={id} delay={i * 90} className="h-full">
            <article className="surface-card relative flex h-full flex-col overflow-hidden p-8">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-[0.07]"
                style={{ background: "var(--gradient-accent)" }}
                aria-hidden="true"
              />
              <span
                className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-primary-foreground"
                style={{ background: "var(--gradient-accent)" }}
                aria-hidden="true"
              >
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="relative mt-6 font-display text-xl font-bold sm:min-h-14">{title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground sm:min-h-28">
                {description}
              </p>
              <ul className="relative mt-6 space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={href}
                className="relative mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold text-primary transition-colors hover:text-tech-blue"
              >
                Conhecer solução
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>

      <Container>
        <div className="mt-24 border-t border-border pt-20 sm:mt-28 sm:pt-24">
          <Reveal className="max-w-2xl">
            <h3 className="font-display text-3xl font-extrabold leading-tight sm:text-[2.4rem]">
              Outros Serviços
            </h3>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={(i % 3) * 70} className="h-full">
                <article className="surface-card flex h-full flex-col p-7">
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/8 text-primary"
                    aria-hidden="true"
                  >
                    <Icon className="h-5.5 w-5.5" strokeWidth={1.75} />
                  </span>
                  <h4 className="mt-5 font-display text-lg font-bold leading-snug">{title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
