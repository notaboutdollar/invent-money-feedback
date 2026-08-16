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
  Validation: "bg-amber-50 text-amber-700 ring-amber-200",
  Rules: "bg-blue-50 text-blue-700 ring-blue-200",
  Bugs: "bg-rose-50 text-rose-700 ring-rose-200",
  Feedback: "bg-violet-50 text-violet-700 ring-violet-200",
};

function SectionLabel({ name, meta }: { name: string; meta?: string }) {
  return (
    <p className="mb-5 text-sm font-medium uppercase tracking-[0.15em]">
      <span className="text-accent">{name}</span>
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
          <div className="flex h-10 w-10 shrink-0 flex-col items-start justify-center rounded-md bg-[#EA580C] px-1.5 leading-[1.05]">
            <span className="text-[9px] font-extrabold italic text-white">
              invent
            </span>
            <span className="text-[9px] font-extrabold italic text-white">
              money
            </span>
          </div>
          <p className="text-base font-medium tracking-tight">
            feedback trainers <span className="opacity-60">v1</span>
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <section className="mb-20 md:mb-28">
          <SectionLabel name="Invent Money" meta="AI Trainers Pilot" />
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            What the initial community <br className="hidden md:block" />
            is saying.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/70">
            Feedback from the first pilot trainers.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <p className="text-3xl font-semibold text-ink md:text-4xl">
                {stats.averageRecommendation}/10
              </p>
              <p className="text-sm text-ink/60">Average recommendation score</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-ink md:text-4xl">
                {stats.averagePlatformExperience}/10
              </p>
              <p className="text-sm text-ink/60">Platform score</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-ink md:text-4xl">
                {stats.respondents}
              </p>
              <p className="text-sm text-ink/60">Trainers in the pilot</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-ink md:text-4xl">
                {stats.wouldContinuePercent}%
              </p>
              <p className="text-sm text-ink/60">
                Want to continue in the next round
              </p>
            </div>
          </div>
        </section>

        <section aria-label="Pilot ratings" className="mb-20 md:mb-28">
          <SectionLabel name="Ratings" meta="17 Responses" />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            How the pilot was rated.
          </h2>
          <p className="mt-4 mb-10 max-w-2xl text-ink/70">
            Two readings that tell the same story: the opportunity is
            compelling, but the platform still has friction worth addressing.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <ScoreChart
              title="Would recommend to a friend"
              subtitle="0 = definitely not · 10 = definitely yes"
              counts={recommendationScores}
              average={stats.averageRecommendation}
            />
            <ScoreChart
              title="Platform experience"
              subtitle="0 = terrible · 10 = excellent"
              counts={platformExperienceScores}
              average={stats.averagePlatformExperience}
            />
          </div>
        </section>

        <section aria-label="Community highlights" className="mb-20 md:mb-28">
          <SectionLabel name="Highlights" meta="What worked" />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            What they liked most.
          </h2>
          <p className="mt-4 mb-10 max-w-2xl text-ink/70">
            What trainers highlighted as strengths of the pilot.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {feedback.map((item, i) => (
              <article
                key={i}
                className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6 text-left shadow-sm transition hover:shadow-md"
              >
                <p className="text-base leading-relaxed text-ink/90">
                  “{item.quote}”
                </p>
                <footer className="mt-6 border-t border-ink/10 pt-4 md:mt-auto md:pt-4">
                  <p className="font-medium text-ink">{item.name}</p>
                  {item.role && (
                    <p className="text-sm text-ink/60">{item.role}</p>
                  )}
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section aria-label="Improvement points" className="mb-20 md:mb-28">
          <SectionLabel name="Improvements" meta="9 Reports" />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            What needs to improve.
          </h2>
          <p className="mt-4 mb-10 max-w-2xl text-ink/70">
            Frustrations and bugs reported in the pilot — the raw material for
            the platform's next round.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {improvements.map((item, i) => (
              <article
                key={i}
                className="flex flex-col items-start rounded-2xl border border-ink/10 bg-white p-6 text-left shadow-sm transition hover:shadow-md"
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
                <footer className="mt-6 w-full border-t border-ink/10 pt-4 md:mt-auto">
                  <p className="font-medium text-ink">{item.name}</p>
                  <p className="text-sm text-ink/60">AI Trainer</p>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-8 border-t border-ink/10 pt-8 text-sm text-ink/50">
          © {new Date().getFullYear()} Invent Money — Community feedback
        </footer>
      </main>
    </>
  );
}
