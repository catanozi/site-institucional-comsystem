import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileText,
  Landmark,
  Receipt,
  Search,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { Container, Reveal, SectionTag } from "./primitives";

const revenueBars = [42, 56, 49, 68, 63, 78, 72, 86, 81, 92, 88, 96];

const indicators = [
  { icon: TrendingUp, label: "Arrecadação", value: "R$ 2,48 mi", detail: "+12,4%" },
  { icon: Receipt, label: "Guias emitidas", value: "8.742", detail: "92% processadas" },
  { icon: Search, label: "Fiscalizações", value: "384", detail: "31 em análise" },
  { icon: Wallet, label: "Dívida ativa", value: "R$ 4,16 mi", detail: "Atualização mensal" },
];

const taxes = [
  { name: "ISSQN", status: "Em acompanhamento", total: "R$ 684 mil" },
  { name: "IPTU", status: "Guias disponíveis", total: "R$ 1,12 mi" },
  { name: "ITBI", status: "Processamento regular", total: "R$ 392 mil" },
];

export function MunicipalTax() {
  return (
    <section id="tributos" className="bg-background py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
          <Reveal className="lg:sticky lg:top-28">
            <SectionTag>Sistema Collect</SectionTag>
            <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-[2.5rem]">
              Gestão tributária municipal
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Sistema Collect, destinado à administração tributária de municípios, com recursos para
              arrecadação, fiscalização, controle da dívida ativa, emissão de guias e gestão
              completa de tributos municipais.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {[
                "Controle de tributos",
                "Processos organizados",
                "Rotinas automatizadas",
                "Indicadores municipais",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-soft)]"
                >
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary"
                    aria-hidden="true"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="/contato?segmento=administracao-publica&solucao=gestao-tributaria"
              className="mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              style={{ background: "var(--gradient-accent)" }}
            >
              Falar com um especialista
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal delay={90}>
            <div className="mx-auto w-full max-w-[720px] px-2 sm:px-5">
              <div className="relative rounded-[22px] border-[7px] border-navy-deep bg-navy-deep shadow-[var(--shadow-lift)] sm:rounded-[28px] sm:border-[10px]">
                <span
                  className="absolute left-1/2 top-[-4px] z-20 h-1.5 w-12 -translate-x-1/2 rounded-b-full bg-white/10 sm:top-[-6px] sm:w-16"
                  aria-hidden="true"
                />

                <div
                  className="relative aspect-[16/11] overflow-hidden rounded-[13px] p-2.5 text-navy-foreground sm:aspect-[16/10] sm:rounded-[17px] sm:p-4"
                  style={{ background: "var(--gradient-hero)" }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 grid-lines opacity-40"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-20 blur-3xl sm:h-48 sm:w-48"
                    style={{ background: "radial-gradient(circle, var(--cyan), transparent 68%)" }}
                    aria-hidden="true"
                  />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2 sm:pb-3">
                      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                        <span
                          className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-cyan/15 text-cyan sm:h-9 sm:w-9 sm:rounded-xl"
                          aria-hidden="true"
                        >
                          <Landmark className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.75} />
                        </span>
                        <div className="min-w-0">
                          <p className="truncate font-display text-[9px] font-bold sm:text-xs">
                            Painel tributário municipal
                          </p>
                          <p className="truncate text-[6px] text-navy-foreground/55 sm:mt-0.5 sm:text-[9px]">
                            Visão integrada da arrecadação
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full border border-cyan/25 bg-cyan/10 px-1.5 py-0.5 text-[5px] font-bold uppercase tracking-[0.08em] text-cyan sm:px-2.5 sm:py-1 sm:text-[8px] sm:tracking-[0.12em]">
                        Dados demonstrativos
                      </span>
                    </div>

                    <div className="mt-2 grid grid-cols-4 gap-1.5 sm:mt-3 sm:gap-2">
                      {indicators.map(({ icon: Icon, label, value, detail }) => (
                        <div
                          key={label}
                          className="min-w-0 rounded-lg border border-white/10 bg-white/[0.065] p-1.5 backdrop-blur-sm sm:rounded-xl sm:p-2.5"
                        >
                          <div className="flex items-start justify-between gap-1">
                            <p className="min-w-0 truncate text-[5.5px] font-semibold text-navy-foreground/58 sm:text-[8px]">
                              {label}
                            </p>
                            <Icon
                              className="h-2.5 w-2.5 shrink-0 text-cyan sm:h-3 sm:w-3"
                              strokeWidth={1.75}
                              aria-hidden="true"
                            />
                          </div>
                          <p className="mt-1 truncate font-display text-[8px] font-extrabold sm:mt-2 sm:text-xs">
                            {value}
                          </p>
                          <p className="mt-0.5 truncate text-[5px] font-semibold text-cyan/85 sm:text-[7px]">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-2 grid min-h-0 flex-1 grid-cols-[1.4fr_0.6fr] gap-1.5 sm:mt-3 sm:gap-2.5">
                      <div className="min-w-0 rounded-lg border border-white/10 bg-white/[0.065] p-2 backdrop-blur-sm sm:rounded-xl sm:p-3">
                        <div className="flex items-center justify-between gap-2">
                          <div className="min-w-0">
                            <p className="truncate font-display text-[7px] font-bold sm:text-[10px]">
                              Arrecadação mensal
                            </p>
                            <p className="mt-0.5 truncate text-[5px] text-navy-foreground/50 sm:text-[7px]">
                              Evolução ilustrativa dos últimos 12 meses
                            </p>
                          </div>
                          <BarChart3
                            className="h-3 w-3 shrink-0 text-cyan sm:h-4 sm:w-4"
                            strokeWidth={1.75}
                            aria-hidden="true"
                          />
                        </div>
                        <div
                          className="mt-1.5 flex h-[38px] items-end gap-[2px] sm:mt-2.5 sm:h-[70px] sm:gap-1"
                          aria-label="Gráfico demonstrativo de arrecadação mensal"
                        >
                          {revenueBars.map((height, index) => (
                            <div key={index} className="flex h-full flex-1 items-end">
                              <div
                                className="w-full rounded-t-sm bg-gradient-to-t from-primary to-cyan opacity-90 transition-opacity hover:opacity-100"
                                style={{ height: `${height}%` }}
                                title={`Mês ${index + 1}: indicador demonstrativo`}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="mt-1 flex justify-between text-[4.5px] font-semibold uppercase tracking-wide text-navy-foreground/35 sm:text-[6px]">
                          <span>Jan</span>
                          <span>Abr</span>
                          <span>Jul</span>
                          <span>Out</span>
                          <span>Dez</span>
                        </div>
                      </div>

                      <div className="flex min-w-0 flex-col rounded-lg border border-white/10 bg-white/[0.065] p-2 backdrop-blur-sm sm:rounded-xl sm:p-3">
                        <div className="flex items-center gap-1.5">
                          <Receipt
                            className="h-3 w-3 shrink-0 text-cyan sm:h-3.5 sm:w-3.5"
                            strokeWidth={1.75}
                            aria-hidden="true"
                          />
                          <p className="truncate font-display text-[7px] font-bold sm:text-[10px]">
                            Guias
                          </p>
                        </div>
                        <div className="grid flex-1 place-items-center">
                          <div className="relative grid h-10 w-10 place-items-center rounded-full border-[4px] border-white/10 sm:h-16 sm:w-16 sm:border-[6px]">
                            <div
                              className="absolute inset-[-4px] rounded-full border-[4px] border-transparent border-r-cyan border-t-cyan sm:inset-[-6px] sm:border-[6px]"
                              aria-hidden="true"
                            />
                            <div className="text-center">
                              <p className="font-display text-[9px] font-extrabold sm:text-sm">
                                92%
                              </p>
                              <p className="text-[4.5px] text-navy-foreground/50 sm:text-[6px]">
                                processadas
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="truncate text-center text-[5px] font-semibold text-navy-foreground/55 sm:text-[7px]">
                          Emissão e acompanhamento
                        </p>
                      </div>
                    </div>

                    <div className="mt-2 rounded-lg border border-white/10 bg-white/[0.065] px-2 py-1.5 backdrop-blur-sm sm:mt-3 sm:rounded-xl sm:px-3 sm:py-2.5">
                      <div className="flex items-center gap-1.5">
                        <FileText
                          className="h-2.5 w-2.5 shrink-0 text-cyan sm:h-3.5 sm:w-3.5"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                        <p className="font-display text-[6px] font-bold sm:text-[9px]">
                          Resumo de tributos
                        </p>
                      </div>
                      <div className="mt-1 grid grid-cols-3 gap-1.5 sm:mt-2 sm:gap-3">
                        {taxes.map((tax) => (
                          <div
                            key={tax.name}
                            className="min-w-0 border-r border-white/8 pr-1.5 last:border-0 last:pr-0 sm:pr-3"
                          >
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-[5.5px] font-extrabold text-cyan sm:text-[8px]">
                                {tax.name}
                              </span>
                              <span className="truncate text-[5px] font-bold sm:text-[7px]">
                                {tax.total}
                              </span>
                            </div>
                            <p className="mt-0.5 truncate text-[4.5px] text-navy-foreground/50 sm:text-[6px]">
                              {tax.status}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="relative mx-auto h-4 w-full rounded-b-[44px] border-x border-b border-navy/15 shadow-[0_12px_22px_-16px_var(--navy-deep)] sm:h-5 sm:rounded-b-[64px]"
                style={{
                  background:
                    "linear-gradient(180deg, color-mix(in oklab, var(--surface) 88%, white), color-mix(in oklab, var(--border) 78%, var(--navy)))",
                }}
                aria-hidden="true"
              >
                <span className="absolute left-1/2 top-0 h-1.5 w-16 -translate-x-1/2 rounded-b-xl bg-navy/15 sm:w-24" />
              </div>
              <div
                className="mx-auto h-1.5 w-[72%] rounded-b-full bg-navy-deep/10 blur-[1px]"
                aria-hidden="true"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
