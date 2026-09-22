"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";
import { LangSwitcher } from "@/components/LangSwitcher";
import {
  BarQuestion,
  RatingQuestion,
  SummaryQuestion,
  REPORT_CSS,
} from "@/components/ReportLayout";
import { openFeedbackContent } from "@/data/open-feedback";

export default function Page() {
  const { lang } = useLang();
  const t = openFeedbackContent[lang];

  const readingLabel = lang === "en" ? "Reading" : "Leitura";

  const q1 = { ...t.q1, readingLabel };
  const q2 = { ...t.q2, readingLabel };
  const q3 = { ...t.q3, readingLabel };
  const q4 = { ...t.q4, readingLabel };

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
            {t.toc.olderLinks.map((l, i) => (
              <Link
                href={l.href}
                className="toc-link-older toc-older-item"
                key={i}
              >
                <span className="n">→</span>
                <span>{l.label}</span>
              </Link>
            ))}

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
                    <span className="accent">{t.hero.titleAccent}</span>
                    {t.hero.titleLine2Suffix}
                  </span>
                </h1>
                <p className="sub">{t.hero.sub}</p>

                <div className="meta">
                  <div>
                    <p className="k">{t.hero.metaWeekK}</p>
                    <p className="v">{t.hero.metaWeekV}</p>
                  </div>
                  <div>
                    <p className="k">{t.hero.metaResponsesK}</p>
                    <p className="v">{t.hero.metaResponsesV}</p>
                  </div>
                  <div>
                    <p className="k">{t.hero.metaFluidityK}</p>
                    <p className="v">{t.hero.metaFluidityV}</p>
                  </div>
                  <div>
                    <p className="k">{t.hero.metaRecommendationK}</p>
                    <p className="v">{t.hero.metaRecommendationV}</p>
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
            <RatingQuestion q={q2} />
            <RatingQuestion q={q3} />
            <BarQuestion q={q4} />
            <SummaryQuestion q={t.q5} />
            <SummaryQuestion q={t.q6} />
            <SummaryQuestion q={t.q7} />

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
