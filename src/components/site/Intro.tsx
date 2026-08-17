import { advantages } from "@/config/site";
import { Container, Reveal, SectionTag } from "./primitives";

export function Intro() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <SectionTag>Por que a Comsystem</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-[2.6rem]">
            Soluções inteligentes para empresas que querem crescer
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Desenvolvemos sistemas capazes de centralizar processos, organizar informações e
            proporcionar mais controle para gestores — do balcão da loja à administração da fazenda.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 70}>
              <article className="surface-card h-full p-7">
                <span
                  className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-primary/8 text-primary"
                  aria-hidden="true"
                >
                  <Icon className="h-5.5 w-5.5" strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
