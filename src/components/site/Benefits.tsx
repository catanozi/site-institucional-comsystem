import { benefits } from "@/config/site";
import { Container, Reveal, SectionTag } from "./primitives";

export function Benefits() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <SectionTag>Benefícios</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-[2.6rem]">
            O que muda no dia a dia da sua operação
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title }, i) => (
            <Reveal key={title} delay={i * 50}>
              <div className="group h-full bg-card p-8 transition-colors duration-300 hover:bg-secondary">
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl bg-primary/8 text-primary transition-transform duration-300 group-hover:scale-105"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-base font-bold leading-snug">{title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
