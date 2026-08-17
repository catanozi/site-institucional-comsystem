import { useState, type FormEvent } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import {
  company,
  interestOptionByQuery,
  interestOptions,
  segmentOptionByQuery,
  segmentOptions,
} from "@/config/site";
import { cn } from "@/lib/utils";
import { Container, Reveal, SectionTag } from "./primitives";

type Errors = Record<string, string>;
type Status = "idle" | "loading" | "success" | "error";

const contactEndpoint = "https://formsubmit.co/ajax/9d93086e4d5572f56148ed8bb7725cad";
const fieldClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/12";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground"
      >
        {label}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-destructive"
        >
          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const params = new URLSearchParams(window.location.search);
  const initialSegment = segmentOptionByQuery[params.get("segmento") ?? ""] ?? "";
  const initialInterest = interestOptionByQuery[params.get("solucao") ?? ""] ?? "";
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const next: Errors = {};
    if (get("nome").length < 2) next.nome = "Informe seu nome.";
    if (get("telefone").length < 8) next.telefone = "Informe um telefone válido.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email"))) next.email = "Informe um e-mail válido.";
    if (get("mensagem").length < 10) next.mensagem = "Escreva ao menos 10 caracteres.";
    if (!data.get("consentimento")) next.consentimento = "É necessário autorizar o contato.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("loading");
    try {
      const payload = new FormData(form);
      payload.set("_subject", "Novo contato do site Comsystem");
      payload.set("_captcha", "false");
      payload.set("_next", window.location.origin + window.location.pathname);

      const response = await fetch(contactEndpoint, {
        method: "POST",
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contato" className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionTag>Contato</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-[2.4rem]">
              Vamos conversar sobre a sua operação
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Conte um pouco sobre a sua empresa e a nossa equipe retorna com a solução mais
              adequada.
            </p>

            <ul className="mt-9 space-y-4">
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-start gap-3.5 text-sm hover:text-primary"
                >
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary"
                    aria-hidden="true"
                  >
                    <Phone className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </span>
                  <span className="pt-2 font-semibold">{company.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 text-sm hover:text-primary"
                >
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary"
                    aria-hidden="true"
                  >
                    <MessageCircle className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0 pt-2 font-semibold">{company.whatsappDisplay}</span>
                </a>
              </li>
              <li className="flex items-start gap-3.5 text-sm">
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary"
                  aria-hidden="true"
                >
                  <MapPin className="h-4.5 w-4.5" strokeWidth={1.75} />
                </span>
                <address className="pt-1.5 not-italic leading-relaxed text-muted-foreground">
                  {company.address.street}
                  <br />
                  {company.address.district} — {company.address.city}/{company.address.state}
                </address>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={90}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="surface-card p-7 hover:translate-y-0 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="nome" label="Nome *" error={errors.nome}>
                  <input
                    id="nome"
                    name="nome"
                    required
                    autoComplete="name"
                    placeholder="Seu nome"
                    aria-invalid={!!errors.nome}
                    aria-describedby={errors.nome ? "nome-error" : undefined}
                    className={cn(fieldClass, errors.nome && "border-destructive")}
                  />
                </Field>
                <Field id="empresa" label="Empresa">
                  <input
                    id="empresa"
                    name="empresa"
                    autoComplete="organization"
                    placeholder="Nome da empresa"
                    className={fieldClass}
                  />
                </Field>
                <Field id="telefone" label="Telefone *" error={errors.telefone}>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="(67) 90000-0000"
                    aria-invalid={!!errors.telefone}
                    aria-describedby={errors.telefone ? "telefone-error" : undefined}
                    className={cn(fieldClass, errors.telefone && "border-destructive")}
                  />
                </Field>
                <Field id="email" label="E-mail *" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="voce@empresa.com.br"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={cn(fieldClass, errors.email && "border-destructive")}
                  />
                </Field>
                <Field id="segmento" label="Segmento">
                  <select
                    id="segmento"
                    name="segmento"
                    defaultValue={initialSegment}
                    className={fieldClass}
                  >
                    <option value="">Selecione</option>
                    {segmentOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="solucao" label="Solução de interesse">
                  <select
                    id="solucao"
                    name="solucao"
                    defaultValue={initialInterest}
                    className={fieldClass}
                  >
                    <option value="">Selecione</option>
                    {interestOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
                <div className="sm:col-span-2">
                  <Field id="mensagem" label="Mensagem *" error={errors.mensagem}>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      required
                      placeholder="Como podemos ajudar?"
                      aria-invalid={!!errors.mensagem}
                      aria-describedby={errors.mensagem ? "mensagem-error" : undefined}
                      className={cn(
                        fieldClass,
                        "resize-y",
                        errors.mensagem && "border-destructive",
                      )}
                    />
                  </Field>
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="consentimento"
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <input
                    id="consentimento"
                    name="consentimento"
                    type="checkbox"
                    className="mt-0.5 h-4.5 w-4.5 shrink-0 rounded border-input accent-[oklch(0.44_0.145_254)]"
                  />
                  <span>
                    Autorizo a Comsystem a entrar em contato comigo sobre esta solicitação.
                  </span>
                </label>
                {errors.consentimento && (
                  <p
                    role="alert"
                    className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-destructive"
                  >
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {errors.consentimento}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                style={{ background: "var(--gradient-accent)" }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Enviar mensagem
                  </>
                )}
              </button>

              <div aria-live="polite">
                {status === "success" && (
                  <p className="mt-5 flex items-start gap-2 rounded-xl bg-accent/12 p-4 text-sm font-semibold text-accent-foreground">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    Mensagem enviada! Nossa equipe entrará em contato em breve.
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-5 flex items-start gap-2 rounded-xl bg-destructive/10 p-4 text-sm font-semibold text-destructive">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
