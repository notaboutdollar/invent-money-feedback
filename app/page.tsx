import {
  feedback,
  improvements,
  platformExperienceScores,
  recommendationScores,
  stats,
} from "@/data/feedback";
import { ScoreChart } from "@/components/ScoreChart";

const tagStyles: Record<string, string> = {
  Upload: "bg-orange-50 text-orange-700 ring-orange-200",
  Validação: "bg-amber-50 text-amber-700 ring-amber-200",
  Regras: "bg-blue-50 text-blue-700 ring-blue-200",
  Bugs: "bg-rose-50 text-rose-700 ring-rose-200",
  Feedback: "bg-violet-50 text-violet-700 ring-violet-200",
};

function SectionLabel({
  number,
  name,
  meta,
}: {
  number: string;
  name: string;
  meta?: string;
}) {
  return (
    <p className="mb-5 text-sm font-medium uppercase tracking-[0.15em]">
      <span className="text-accent">{number}</span>
      <span className="mx-2 text-ink/25">·</span>
      <span className="text-ink/70">{name}</span>
      {meta && (
        <>
          <span className="mx-2 text-ink/25">·</span>
          <span className="text-ink/50">{meta}</span>
        </>
      )}
    </p>
  );
}

export default function Page() {
  return (
    <>
      <header className="bg-ink text-canvas">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-canvas text-ink">
            <span className="text-sm font-bold">F</span>
          </div>
          <p className="text-base font-medium tracking-tight">
            feedback trainers <span className="opacity-60">v1</span>
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <section className="mb-20 md:mb-28">
          <SectionLabel
            number="00"
            name="Invent Money"
            meta="Piloto AI Trainers"
          />
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            O que a comunidade inicial <br className="hidden md:block" />
            está dizendo.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/70">
            Feedbacks reais dos primeiros trainers do piloto. Sem filtro, sem
            retoque — direto de quem está construindo com a gente.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <p className="text-3xl font-semibold text-ink md:text-4xl">
                {stats.averageRecommendation}/10
              </p>
              <p className="text-sm text-ink/60">Nota média de recomendação</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-ink md:text-4xl">
                {stats.averagePlatformExperience}/10
              </p>
              <p className="text-sm text-ink/60">Nota da plataforma</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-ink md:text-4xl">
                {stats.respondents}
              </p>
              <p className="text-sm text-ink/60">Trainers no piloto</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-ink md:text-4xl">
                {stats.wouldContinuePercent}%
              </p>
              <p className="text-sm text-ink/60">
                Querem continuar na próxima rodada
              </p>
            </div>
          </div>
        </section>

        <section aria-label="Notas do piloto" className="mb-20 md:mb-28">
          <SectionLabel
            number="01"
            name="Avaliação"
            meta="17 Respostas"
          />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Como o piloto foi avaliado.
          </h2>
          <p className="mt-4 mb-10 max-w-2xl text-ink/70">
            Duas leituras que contam a mesma história: a oportunidade convence,
            mas a plataforma ainda tem fricção que vale endereçar.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <ScoreChart
              title="Recomendaria a um amigo"
              subtitle="0 = de jeito nenhum · 10 = com certeza"
              counts={recommendationScores}
              average={stats.averageRecommendation}
            />
            <ScoreChart
              title="Experiência na plataforma"
              subtitle="0 = péssima · 10 = excelente"
              counts={platformExperienceScores}
              average={stats.averagePlatformExperience}
            />
          </div>
        </section>

        <section aria-label="Elogios da comunidade" className="mb-20 md:mb-28">
          <SectionLabel
            number="02"
            name="Elogios"
            meta="O que funcionou"
          />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            O que mais gostaram.
          </h2>
          <p className="mt-4 mb-10 max-w-2xl text-ink/70">
            O que os trainers destacaram como pontos fortes do piloto.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {feedback.map((item, i) => (
              <article
                key={i}
                className="rounded-2xl border border-ink/10 bg-white p-6 text-left shadow-sm transition hover:shadow-md"
              >
                <p className="text-base leading-relaxed text-ink/90">
                  “{item.quote}”
                </p>
                <footer className="mt-6 border-t border-ink/10 pt-4">
                  <p className="font-medium text-ink">{item.name}</p>
                  {item.role && (
                    <p className="text-sm text-ink/60">{item.role}</p>
                  )}
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section aria-label="Pontos de melhoria" className="mb-20 md:mb-28">
          <SectionLabel
            number="03"
            name="Melhorias"
            meta="9 Relatos"
          />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            O que precisa melhorar.
          </h2>
          <p className="mt-4 mb-10 max-w-2xl text-ink/70">
            Frustrações e bugs relatados no piloto — a matéria-prima para a
            próxima rodada da plataforma.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {improvements.map((item, i) => (
              <article
                key={i}
                className="rounded-2xl border border-ink/10 bg-white p-6 text-left shadow-sm transition hover:shadow-md"
              >
                <span
                  className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${
                    tagStyles[item.tag] ?? "bg-ink/5 text-ink/70 ring-ink/10"
                  }`}
                >
                  {item.tag}
                </span>
                <p className="mt-4 text-base leading-relaxed text-ink/90">
                  “{item.quote}”
                </p>
                <footer className="mt-6 border-t border-ink/10 pt-4">
                  <p className="font-medium text-ink">{item.name}</p>
                  <p className="text-sm text-ink/60">Trainer de IA</p>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-8 border-t border-ink/10 pt-8 text-sm text-ink/50">
          © {new Date().getFullYear()} Invent Money — Feedback da comunidade
        </footer>
      </main>
    </>
  );
}
