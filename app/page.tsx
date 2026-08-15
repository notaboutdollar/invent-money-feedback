import { feedback, stats } from "@/data/feedback";

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <header className="mb-16 md:mb-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Invent Money
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          O que a comunidade inicial <br className="hidden md:block" />
          está dizendo.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink/70">
          Feedbacks reais dos primeiros trainers do piloto. Sem filtro, sem
          retoque — direto de quem está construindo com a gente.
        </p>

        <div className="mt-10 flex flex-wrap gap-10">
          <div>
            <p className="text-3xl font-semibold text-ink md:text-4xl">
              {stats.averageRecommendation}/10
            </p>
            <p className="text-sm text-ink/60">Nota média de recomendação</p>
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
            <p className="text-sm text-ink/60">Querem continuar na próxima rodada</p>
          </div>
        </div>
      </header>

      <section
        aria-label="Depoimentos da comunidade"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {feedback.map((item, i) => (
          <article
            key={i}
            className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <p className="text-base leading-relaxed text-ink/90">“{item.quote}”</p>
            <footer className="mt-6 border-t border-ink/10 pt-4">
              <p className="font-medium text-ink">{item.name}</p>
              {item.role && (
                <p className="text-sm text-ink/60">{item.role}</p>
              )}
            </footer>
          </article>
        ))}
      </section>

      <footer className="mt-24 border-t border-ink/10 pt-8 text-sm text-ink/50">
        © {new Date().getFullYear()} Invent Money — Feedback da comunidade
      </footer>
    </main>
  );
}
