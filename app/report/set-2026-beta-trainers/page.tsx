"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";
import { LangSwitcher } from "@/components/LangSwitcher";
import {
  BarQuestion,
  RatingQuestion,
  ThemeQuestion,
  SummaryQuestion,
  REPORT_CSS,
} from "@/components/ReportLayout";
import { betaTrainersContent } from "@/data/beta-trainers";

export default function Page() {
  const { lang } = useLang();
  const t = betaTrainersContent[lang];

  // Attach reading label + theme-question labels dynamically per language.
  const readingLabel = lang === "en" ? "Reading" : "Leitura";
  const impactLabel = lang === "en" ? "Impact" : "Impacto";
  const frequencyLabel = lang === "en" ? "Frequency" : "Frequência";
  const latestLabel = lang === "en" ? "← Latest report" : "← Report mais recente";

  const q1 = { ...t.q1, readingLabel };
  const q2 = { ...t.q2, readingLabel };
  const q3 = { ...t.q3, readingLabel, impactLabel, frequencyLabel };
  const q4 = { ...t.q4, readingLabel };
  const q5 = { ...t.q5, readingLabel };
  const q6 = { ...t.q6, readingLabel };
  const q7 = { ...t.q7, readingLabel };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: REPORT_CSS }} />
      <div className="report-page">
        <div className="page">
          <aside className="toc">
            <span
              className="toc-logo"
              role="img"
              aria-label={t.brand.name}
            ></span>
            <p className="toc-brand">{t.brand.name}</p>
            <p className="eyebrow" style={{ margin: "0 0 6px" }}>
              {t.brand.role}
            </p>
            <p
              style={{
                fontSize: 12,
                margin: "0 0 var(--leading)",
                color:
                  "color-mix(in srgb, var(--color-text) 60%, transparent)",
                lineHeight: 1.5,
                whiteSpace: "pre-line",
              }}
            >
              {t.brand.period}
            </p>

            <Link href="/" className="toc-link-older">
              <span className="n">→</span>
              <span>{latestLabel}</span>
            </Link>

            <p className="toc-sec">{t.toc.overviewSection}</p>
            <a href="#panorama">
              <span className="n">00</span>
              <span>{t.toc.overviewItem}</span>
            </a>

            <p className="toc-sec">{t.toc.summarySection}</p>
            <a href="#destaques">
              <span className="n">→</span>
              <span>{t.toc.summaryItem}</span>
            </a>

            <p className="toc-sec">{t.toc.detailsSection}</p>
            {t.toc.questions.map((q) => (
              <a href={`#q${q.num}`} key={q.num}>
                <span className="n">{q.num}</span>
                <span>{q.label}</span>
              </a>
            ))}

            <p className="toc-sec">{t.toc.closingSection}</p>
            <a href="#fechamento">
              <span className="n">→</span>
              <span>{t.toc.closingItem}</span>
            </a>

            <p className="toc-sec">{t.toc.olderSection}</p>
            <Link
              href="/report/set-2026-piloto-inicial"
              className="toc-link-older"
            >
              <span className="n">→</span>
              <span>{t.toc.olderLink}</span>
            </Link>

            <div className="toc-lang">
              <LangSwitcher />
            </div>
          </aside>

          <main>
            <section className="hero" id="topo">
              <div className="wrap">
                <div className="hero-top">
                  <p className="brand-line">
                    <span
                      className="logo"
                      role="img"
                      aria-label={t.hero.kickerName}
                    ></span>
                    {t.hero.kickerName}
                    <span className="sep"></span>
                    <span className="label">{t.hero.kickerLabel}</span>
                  </p>
                  <div className="hero-lang">
                    <LangSwitcher />
                  </div>
                </div>
                <h1 className="display">
                  <span className="line">{t.hero.titleLine1}</span>
                  <span className="line">
                    {lang === "en" ? "of " : "de "}
                    <span className="accent">{t.hero.titleAccent}</span>
                    {t.hero.titleLine2Suffix}
                  </span>
                </h1>
                <p className="sub">{t.hero.sub}</p>

                <div className="meta">
                  <div>
                    <p className="k">{t.hero.metaPeriodK}</p>
                    <p className="v">{t.hero.metaPeriodV}</p>
                  </div>
                  <div>
                    <p className="k">{t.hero.metaResponsesK}</p>
                    <p className="v">{t.hero.metaResponsesV}</p>
                  </div>
                  <div>
                    <p className="k">{t.hero.metaTrainersK}</p>
                    <p className="v">{t.hero.metaTrainersV}</p>
                  </div>
                  <div>
                    <p className="k">{t.hero.metaDaysK}</p>
                    <p className="v">{t.hero.metaDaysV}</p>
                  </div>
                </div>

                <div className="day-strip">
                  {t.hero.days.map((d, i) => (
                    <div className="day-cell" key={i}>
                      <p className="d-day">{d.day}</p>
                      <p className="d-num">
                        {d.num}
                        <small>{d.unit}</small>
                      </p>
                      <p className="d-lbl">{d.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="metrics" id="panorama">
              <div className="wrap">
                <span className="kicker">{t.panorama.kicker}</span>
                <div className="grid">
                  {t.panorama.metrics.map((m, i) => (
                    <div className="metric" key={i}>
                      <p className="num">
                        {m.num}
                        <small>{m.unit}</small>
                      </p>
                      <p className="lbl">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="destaques" className="zebra">
              <div className="wrap">
                <div className="q-head">
                  <p className="q-num">{t.highlights.num}</p>
                  <div>
                    <h2 className="q-title">{t.highlights.title}</h2>
                    <p className="q-meta">
                      <span>{t.highlights.meta}</span>
                    </p>
                  </div>
                </div>
                <div className="q-body">
                  <div className="spacer"></div>
                  <div>
                    <div className="hl-grid">
                      <div className="hl-col pos">
                        <h3>
                          <span className="mark"></span>
                          {t.highlights.positiveTitle}
                        </h3>
                        <ul className="hl-list">
                          {t.highlights.positive.map((h, i) => (
                            <li key={i}>
                              <span
                                dangerouslySetInnerHTML={{ __html: h.html }}
                              />
                              <span className="tally">{h.tally}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="hl-col neg">
                        <h3>
                          <span className="mark"></span>
                          {t.highlights.negativeTitle}
                        </h3>
                        <ul className="hl-list">
                          {t.highlights.negative.map((h, i) => (
                            <li key={i}>
                              <span
                                dangerouslySetInnerHTML={{ __html: h.html }}
                              />
                              <span className="tally">{h.tally}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <BarQuestion q={q1} />
            <BarQuestion q={q2} />
            <ThemeQuestion q={q3} />
            <BarQuestion q={q4} />
            <BarQuestion q={q5} />
            <RatingQuestion q={q6} />
            <RatingQuestion q={q7} />
            <SummaryQuestion q={t.q8} />

            <section id="fechamento" className="close-band">
              <div className="wrap">
                <p className="brand-line">
                  <span
                    className="logo"
                    role="img"
                    aria-label={t.brand.name}
                  ></span>
                  {t.closing.kickerName}
                  <span className="sep"></span>
                  <span className="label">{t.closing.kickerLabel}</span>
                </p>
                <h2 className="display">
                  <span className="line">{t.closing.titleLine1}</span>{" "}
                  <span className="line">
                    {lang === "en" ? "The edges " : "As bordas "}
                    <span className="accent">{t.closing.titleAccent}</span>
                    {t.closing.titleLine2Suffix}
                  </span>
                </h2>
                <p>{t.closing.body}</p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
