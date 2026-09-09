"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";
import { LangSwitcher } from "@/components/LangSwitcher";
import { ScoreChart } from "@/components/ScoreChart";
import {
  pilotoInicialContent,
  pilotoInicialScores,
  pilotoInicialStats,
  tagStyles,
} from "@/data/piloto-inicial";

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

export default function PilotoInicialPage() {
  const { lang } = useLang();
  const t = pilotoInicialContent[lang];

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
            {t.brand}{" "}
            <span className="opacity-60">· {t.headerVersion}</span>
          </p>
          <div className="ml-auto flex items-center gap-3">
            <Link
              href="/"
              className="text-xs font-medium text-canvas/70 underline-offset-4 hover:text-canvas hover:underline"
            >
              {t.headerBack}
            </Link>
            <LangSwitcher variant="dark" />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <section className="mb-20 md:mb-28">
          <SectionLabel name={t.heroLabelName} meta={t.heroLabelMeta} />
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {t.heroTitleLine1} <br className="hidden md:block" />
            {t.heroTitleLine2}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/70">{t.heroSub}</p>

          <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <p className="text-3xl font-semibold text-ink md:text-4xl">
                {pilotoInicialStats.averageRecommendation}/10
              </p>
              <p className="text-sm text-ink/60">{t.statRecommendation}</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-ink md:text-4xl">
                {pilotoInicialStats.averagePlatformExperience}/10
              </p>
              <p className="text-sm text-ink/60">{t.statPlatform}</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-ink md:text-4xl">
                {pilotoInicialStats.respondents}
              </p>
              <p className="text-sm text-ink/60">{t.statTrainers}</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-ink md:text-4xl">
                {pilotoInicialStats.wouldContinuePercent}%
              </p>
              <p className="text-sm text-ink/60">{t.statContinue}</p>
            </div>
          </div>
        </section>

        <section aria-label={t.ratingsLabelName} className="mb-20 md:mb-28">
          <SectionLabel name={t.ratingsLabelName} meta={t.ratingsLabelMeta} />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t.ratingsTitle}
          </h2>
          <p className="mt-4 mb-10 max-w-2xl text-ink/70">{t.ratingsSub}</p>

          <div className="grid gap-6 md:grid-cols-2">
            <ScoreChart
              title={t.chartRecommend.title}
              subtitle={t.chartRecommend.subtitle}
              counts={pilotoInicialScores.recommendation}
              average={pilotoInicialStats.averageRecommendation}
              labels={{
                averageOf: t.chartAverageOf,
                tooltip: t.chartTooltip,
                ariaBar: t.chartAriaBar,
              }}
            />
            <ScoreChart
              title={t.chartPlatform.title}
              subtitle={t.chartPlatform.subtitle}
              counts={pilotoInicialScores.platform}
              average={pilotoInicialStats.averagePlatformExperience}
              labels={{
                averageOf: t.chartAverageOf,
                tooltip: t.chartTooltip,
                ariaBar: t.chartAriaBar,
              }}
            />
          </div>
        </section>

        <section aria-label={t.highlightsLabelName} className="mb-20 md:mb-28">
          <SectionLabel
            name={t.highlightsLabelName}
            meta={t.highlightsLabelMeta}
          />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t.highlightsTitle}
          </h2>
          <p className="mt-4 mb-10 max-w-2xl text-ink/70">{t.highlightsSub}</p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.feedback.map((item, i) => (
              <article
                key={i}
                className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6 text-left shadow-sm transition hover:shadow-md"
              >
                <p className="text-base leading-relaxed text-ink/90">
                  “{item.quote}”
                </p>
                <footer className="mt-6 border-t border-ink/10 pt-4 md:mt-auto md:pt-4">
                  <p className="font-medium text-ink">{item.name}</p>
                  <p className="text-sm text-ink/60">{t.role}</p>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-label={t.improvementsLabelName}
          className="mb-20 md:mb-28"
        >
          <SectionLabel
            name={t.improvementsLabelName}
            meta={t.improvementsLabelMeta}
          />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t.improvementsTitle}
          </h2>
          <p className="mt-4 mb-10 max-w-2xl text-ink/70">
            {t.improvementsSub}
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.improvements.map((item, i) => (
              <article
                key={i}
                className="flex flex-col items-start rounded-2xl border border-ink/10 bg-white p-6 text-left shadow-sm transition hover:shadow-md"
              >
                <span
                  className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${tagStyles[item.tag]}`}
                >
                  {t.tagLabel[item.tag]}
                </span>
                <p className="mt-4 text-base leading-relaxed text-ink/90">
                  “{item.quote}”
                </p>
                <footer className="mt-6 w-full border-t border-ink/10 pt-4 md:mt-auto">
                  <p className="font-medium text-ink">{item.name}</p>
                  <p className="text-sm text-ink/60">{t.role}</p>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-8 border-t border-ink/10 pt-8 text-sm text-ink/50">
          {t.footerCopy(new Date().getFullYear())}
        </footer>
      </main>
    </>
  );
}
