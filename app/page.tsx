"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";
import { LangSwitcher } from "@/components/LangSwitcher";
import {
  betaTrainersContent,
  type BarQuestion as BarQuestionData,
  type RatingQuestion as RatingQuestionData,
  type ThemeQuestion as ThemeQuestionData,
  type SummaryQuestion as SummaryQuestionData,
  type BarRow,
} from "@/data/beta-trainers";

// ————————————————————————————————————————————————————————————————
// Sub-components
// ————————————————————————————————————————————————————————————————
function BarQuestion({ q }: { q: BarQuestionData & { readingLabel: string } }) {
  return (
    <section id={`q${q.num}`} className={q.zebra ? "zebra" : ""}>
      <div className="wrap">
        <div className="q-head">
          <p className="q-num">
            {q.num}
            <span className="col">{q.col}</span>
          </p>
          <div>
            <h2 className="q-title">{q.title}</h2>
            <p className="q-meta">
              <span className="type">{q.metaType}</span>
              <span>{q.metaResponses}</span>
            </p>
          </div>
        </div>
        <div className="q-body">
          <div className="spacer"></div>
          <div>
            <BarList bars={q.bars} />
            <Reading text={q.reading} label={q.readingLabel} />
          </div>
        </div>
      </div>
    </section>
  );
}

function BarList({ bars }: { bars: BarRow[] }) {
  return (
    <div className="bars">
      {bars.map((b, i) => (
        <div className="bar-row" key={i}>
          <div className="top">
            <span className="lbl">
              {b.label}
              {b.sublabel && <small className="bar-sub">{b.sublabel}</small>}
            </span>
            <span className="val">{b.count}</span>
          </div>
          <div className="bar-track">
            {b.pct > 0 && (
              <div
                className={`bar-fill${b.muted ? " muted" : ""}`}
                style={{ width: `${b.pct}%` }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function RatingQuestion({ q }: { q: RatingQuestionData & { readingLabel: string } }) {
  const max = Math.max(...q.counts, 1);
  return (
    <section id={`q${q.num}`} className={q.zebra ? "zebra" : ""}>
      <div className="wrap">
        <div className="q-head">
          <p className="q-num">
            {q.num}
            <span className="col">{q.col}</span>
          </p>
          <div>
            <h2 className="q-title">{q.title}</h2>
            <p className="q-meta">
              <span className="type">{q.metaType}</span>
              <span>{q.metaResponses}</span>
            </p>
          </div>
        </div>
        <div className="q-body">
          <div className="spacer"></div>
          <div>
            <div className="rating">
              <div className="rating-avg">
                <p className="val">
                  {q.avg}
                  <small>/5</small>
                </p>
                <p className="cap">{q.avgCap}</p>
              </div>
              <div className="rating-bars">
                {q.counts.map((c, i) => {
                  const heightPct = (c / max) * 100;
                  const isZero = c === 0;
                  return (
                    <div className="rating-col" key={i}>
                      <div
                        className={`col-bar${isZero ? " zero" : ""}`}
                        style={!isZero ? { height: `${heightPct}%` } : undefined}
                      />
                      <div className="col-lbl">
                        <span>{i + 1}</span>
                        <span className={`n${isZero ? " zero-c" : ""}`}>{c}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <Reading text={q.reading} label={q.readingLabel} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ThemeQuestion({
  q,
}: {
  q: ThemeQuestionData & {
    readingLabel: string;
    impactLabel: string;
    frequencyLabel: string;
  };
}) {
  return (
    <section id={`q${q.num}`} className={q.zebra ? "zebra" : ""}>
      <div className="wrap">
        <div className="q-head">
          <p className="q-num">
            {q.num}
            <span className="col">{q.col}</span>
          </p>
          <div>
            <h2 className="q-title">{q.title}</h2>
            <p className="q-meta">
              <span className="type">{q.metaType}</span>
              <span>{q.metaResponses}</span>
            </p>
          </div>
        </div>
        <div className="q-body">
          <div className="spacer"></div>
          <div>
            {q.themes.map((theme, i) => (
              <div className="theme-group" key={i}>
                <div className="theme-hd">
                  <h4>{theme.title}</h4>
                  <span className="cnt">{theme.count}</span>
                </div>
                <div className="answers">
                  {theme.answers.map((a, j) => (
                    <article className="answer" key={j}>
                      <div className="head">
                        <span className="id">{a.id}</span>
                        <span>{a.device}</span>
                      </div>
                      <p className="quote">{a.quote}</p>
                      {(a.impact || a.frequency) && (
                        <div className="foot">
                          {a.impact && (
                            <span>
                              <span className="k">{q.impactLabel}</span>
                              {a.impact}
                            </span>
                          )}
                          {a.frequency && (
                            <span>
                              <span className="k">{q.frequencyLabel}</span>
                              {a.frequency}
                            </span>
                          )}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            ))}
            <Reading text={q.reading} label={q.readingLabel} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryQuestion({ q }: { q: SummaryQuestionData }) {
  return (
    <section id={`q${q.num}`} className={q.zebra ? "zebra" : ""}>
      <div className="wrap">
        <div className="q-head">
          <p className="q-num">
            {q.num}
            <span className="col">{q.col}</span>
          </p>
          <div>
            <h2 className="q-title">{q.title}</h2>
            <p className="q-meta">
              <span className="type">{q.metaType}</span>
              <span>{q.metaResponses}</span>
            </p>
          </div>
        </div>
        <div className="q-body">
          <div className="spacer"></div>
          <div>
            <p className="summary-kicker">{q.summaryKicker}</p>
            <p className="summary-line">{q.summaryLine}</p>
            <div className="answers">
              {q.answers.map((a, i) => (
                <article className="answer" key={i}>
                  <div className="head">
                    <span className="id">{a.id}</span>
                    <span>{a.device}</span>
                  </div>
                  <p className="quote">{a.quote}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reading({ text, label }: { text: string; label: string }) {
  return (
    <div className="reading">
      <p className="k">{label}</p>
      <p className="v">{text}</p>
    </div>
  );
}

// ————————————————————————————————————————————————————————————————
// Page
// ————————————————————————————————————————————————————————————————
export default function Page() {
  const { lang } = useLang();
  const t = betaTrainersContent[lang];

  // Attach reading label + theme-question labels dynamically per language.
  const readingLabel = lang === "en" ? "Reading" : "Leitura";
  const impactLabel = lang === "en" ? "Impact" : "Impacto";
  const frequencyLabel = lang === "en" ? "Frequency" : "Frequência";

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

            <p className="toc-sec">{t.toc.panoramaSection}</p>
            <a href="#panorama">
              <span className="n">00</span>
              <span>{t.toc.panoramaItem}</span>
            </a>

            <p className="toc-sec">{t.toc.questionsSection}</p>
            {t.toc.questions.map((q) => (
              <a href={`#q${q.num}`} key={q.num}>
                <span className="n">{q.num}</span>
                <span>{q.label}</span>
              </a>
            ))}

            <p className="toc-sec">{t.toc.synthesisSection}</p>
            {t.toc.synthesisItems.map((s, i) => (
              <a href={i === 0 ? "#destaques" : "#fechamento"} key={i}>
                <span className="n">{s.icon}</span>
                <span>{s.label}</span>
              </a>
            ))}

            <p className="toc-sec">{t.toc.olderSection}</p>
            <Link href="/report/set-2026-piloto-inicial" className="toc-link-older">
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

            <BarQuestion q={q1} />
            <BarQuestion q={q2} />
            <ThemeQuestion q={q3} />
            <BarQuestion q={q4} />
            <BarQuestion q={q5} />
            <RatingQuestion q={q6} />
            <RatingQuestion q={q7} />
            <SummaryQuestion q={t.q8} />

            <section id="destaques">
              <div className="wrap">
                <div className="q-head">
                  <p className="q-num">
                    {t.highlights.num}
                    <span className="col">{t.highlights.col}</span>
                  </p>
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

// ————————————————————————————————————————————————————————————————
// CSS — scoped under .report-page to avoid clashing with the v1 page
// ————————————————————————————————————————————————————————————————
const REPORT_CSS = `
.report-page {
  --color-bg: #f3f2f2;
  --color-surface: #eae9e9;
  --color-text: #201e1d;
  --color-accent: #ec3013;
  --color-accent-700: #ae1800;
  --color-divider: color-mix(in srgb, #201e1d 40%, transparent);
  --color-neutral-700: #605d5d;
  --leading: 28px;
  --half: 14px;
  --edge: clamp(20px, 5vw, 72px);
  --measure: 62ch;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-archivo), system-ui, sans-serif;
  font-size: 15px;
  line-height: 1.55;
  font-weight: 400;
  min-height: 100vh;
  text-wrap: pretty;
}
.report-page *, .report-page *::before, .report-page *::after { box-sizing: border-box; }
.report-page h1, .report-page h2, .report-page h3, .report-page h4 {
  font-family: var(--font-archivo), system-ui, sans-serif;
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.015em;
  margin: 0;
}
.report-page p { margin: 0; }
.report-page a { color: var(--color-accent); text-underline-offset: 3px; text-decoration: none; }
.report-page ::selection { background: color-mix(in srgb, var(--color-accent) 30%, transparent); }

.report-page .page { display: grid; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 1080px) {
  .report-page .page { grid-template-columns: 240px minmax(0, 1fr); }
}

.report-page .wrap { max-width: 960px; padding: 0 var(--edge); }
.report-page .rule2 { height: 2px; border: 0; margin: 0; background: var(--color-divider); }
.report-page .rule1 { height: 1px; border: 0; margin: 0; background: var(--color-divider); }

.report-page .kicker {
  display: block; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--color-accent-700); font-feature-settings: "tnum" 1;
  margin: 0 0 var(--leading);
}
.report-page .eyebrow {
  font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
  color: color-mix(in srgb, var(--color-text) 60%, transparent);
}

.report-page .toc {
  position: sticky; top: 0; align-self: start; height: 100vh; overflow-y: auto;
  padding: calc(2 * var(--leading)) var(--edge);
  border-right: 2px solid var(--color-divider);
  display: none; flex-direction: column; gap: 6px;
  font-size: 12px;
}
@media (min-width: 1080px) { .report-page .toc { display: flex; } }
.report-page .toc .toc-brand {
  font-family: var(--font-archivo); font-weight: 800; font-size: 15px;
  letter-spacing: -0.005em; margin: 0 0 var(--half); text-transform: none;
}
.report-page .toc .toc-brand span { color: var(--color-accent); }
.report-page .toc .toc-sec {
  font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
  color: color-mix(in srgb, var(--color-text) 55%, transparent);
  margin: var(--leading) 0 var(--half);
}
.report-page .toc a, .report-page .toc-link-older {
  display: grid; grid-template-columns: 22px 1fr; gap: 8px; align-items: baseline;
  padding: 4px 0; color: var(--color-text); text-decoration: none;
  border-bottom: 1px solid transparent;
}
.report-page .toc a:hover, .report-page .toc-link-older:hover { color: var(--color-accent); }
.report-page .toc a .n, .report-page .toc-link-older .n {
  font-family: var(--font-archivo); font-weight: 800; font-size: 11px;
  color: color-mix(in srgb, var(--color-text) 50%, transparent);
  font-feature-settings: "tnum" 1;
}
.report-page .toc a:hover .n, .report-page .toc-link-older:hover .n { color: var(--color-accent); }
.report-page .toc-lang { margin-top: auto; padding-top: var(--leading); }

.report-page .toc-logo {
  width: 44px; height: 44px; display: block; margin: 0 0 var(--half);
  background-image: url('/invent-money-logo.jpg');
  background-size: cover; background-position: center;
}

.report-page main { min-width: 0; }
.report-page section { padding: calc(2.5 * var(--leading)) 0; }
.report-page section + section { border-top: 2px solid var(--color-divider); }
.report-page .zebra { background: var(--color-surface); }

/* Hero */
.report-page .hero { padding: calc(3 * var(--leading)) 0 calc(2.5 * var(--leading)); }
.report-page .hero-top { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin: 0 0 calc(1.5 * var(--leading)); }
.report-page .hero-lang { display: block; }
@media (min-width: 1080px) { .report-page .hero-lang { display: none; } }
.report-page .brand-line {
  display: flex; align-items: center; gap: 12px; font-family: var(--font-archivo);
  font-weight: 800; font-size: 14px; letter-spacing: -0.005em;
  margin: 0;
}
.report-page .brand-line .logo {
  width: 28px; height: 28px; display: inline-block; flex-shrink: 0;
  background-image: url('/invent-money-logo.jpg');
  background-size: cover; background-position: center;
}
.report-page .close-band .brand-line .logo { outline: 2px solid var(--color-bg); outline-offset: 1px; }
.report-page .brand-line span.sep {
  width: 20px; height: 2px; background: var(--color-divider); display: inline-block;
}
.report-page .brand-line .label { color: color-mix(in srgb, var(--color-text) 65%, transparent); font-weight: 400; }
.report-page .display {
  font-family: var(--font-archivo); font-weight: 800;
  font-size: clamp(40px, 5.4vw, 68px);
  line-height: 1.06;
  letter-spacing: -0.02em; margin: 0; margin-left: -0.05em;
  text-wrap: balance;
}
.report-page .display .line { display: block; }
.report-page .display .accent { color: var(--color-accent); }
.report-page .hero .sub {
  font-size: 17px; line-height: 1.6; max-width: var(--measure);
  margin: calc(1.5 * var(--leading)) 0 0;
  color: color-mix(in srgb, var(--color-text) 82%, transparent);
}
.report-page .hero .meta {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, auto));
  gap: var(--leading) calc(2 * var(--leading));
  margin: calc(2 * var(--leading)) 0 0;
  padding: var(--leading) 0 0;
  border-top: 2px solid var(--color-divider);
}
.report-page .hero .meta div { min-width: 0; }
.report-page .hero .meta .k { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: color-mix(in srgb, var(--color-text) 55%, transparent); margin: 0 0 4px; }
.report-page .hero .meta .v { font-family: var(--font-archivo); font-weight: 800; font-size: 22px; margin: 0; letter-spacing: -0.01em; }

/* Day strip */
.report-page .day-strip {
  display: grid; grid-template-columns: repeat(4, 1fr);
  border-top: 2px solid var(--color-text); border-bottom: 2px solid var(--color-text);
  margin-top: calc(2 * var(--leading));
}
.report-page .day-cell { padding: var(--leading) 0 calc(1.5 * var(--leading)); }
.report-page .day-cell + .day-cell { border-left: 1px solid var(--color-divider); padding-left: var(--leading); }
.report-page .day-cell .d-day { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: color-mix(in srgb, var(--color-text) 55%, transparent); margin: 0 0 6px; }
.report-page .day-cell .d-num { font-family: var(--font-archivo); font-weight: 800; font-size: clamp(32px, 3.4vw, 42px); color: var(--color-accent); line-height: 1; margin: 0 0 6px; letter-spacing: -0.02em; }
.report-page .day-cell .d-num small { font-size: 0.42em; color: color-mix(in srgb, var(--color-text) 55%, transparent); letter-spacing: 0; margin-left: 2px; font-weight: 800; }
.report-page .day-cell .d-lbl { font-size: 12px; margin: 0; color: color-mix(in srgb, var(--color-text) 75%, transparent); }
@media (max-width: 720px) {
  .report-page .day-strip { grid-template-columns: repeat(2, 1fr); }
  .report-page .day-cell + .day-cell { border-left: 0; padding-left: 0; }
  .report-page .day-cell:nth-child(2n) { border-left: 1px solid var(--color-divider); padding-left: var(--leading); }
  .report-page .day-cell:nth-child(n+3) { border-top: 1px solid var(--color-divider); }
}

/* Metrics */
.report-page .metrics { padding: calc(2 * var(--leading)) 0; }
.report-page .metrics .grid {
  display: grid; grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--leading) calc(1.5 * var(--leading));
}
@media (max-width: 720px) { .report-page .metrics .grid { grid-template-columns: repeat(2, 1fr); } }
.report-page .metric { padding-top: var(--half); border-top: 2px solid var(--color-text); }
.report-page .metric .num { font-family: var(--font-archivo); font-weight: 800; font-size: clamp(40px, 4.6vw, 56px); color: var(--color-accent); line-height: 1; margin: 0 0 8px; letter-spacing: -0.02em; }
.report-page .metric .num small { font-size: 0.42em; color: color-mix(in srgb, var(--color-text) 55%, transparent); letter-spacing: 0; margin-left: 2px; font-weight: 800; }
.report-page .metric .lbl { font-size: 12px; line-height: 1.35; color: color-mix(in srgb, var(--color-text) 75%, transparent); margin: 0; }

/* Question head */
.report-page .q-head { display: grid; grid-template-columns: minmax(60px, auto) minmax(0, 1fr); gap: 24px calc(1.5 * var(--leading)); align-items: baseline; margin: 0 0 calc(1.5 * var(--leading)); }
.report-page .q-num { font-family: var(--font-archivo); font-weight: 800; font-size: 13px; color: var(--color-accent); letter-spacing: 0.08em; font-feature-settings: "tnum" 1; margin: 0; }
.report-page .q-num .col { color: color-mix(in srgb, var(--color-text) 45%, transparent); margin-left: 8px; }
.report-page .q-title { font-family: var(--font-archivo); font-weight: 800; font-size: clamp(24px, 2.4vw, 32px); line-height: 1.15; letter-spacing: -0.015em; margin: 0 0 var(--half); }
.report-page .q-meta { display: flex; flex-wrap: wrap; gap: var(--half) var(--leading); font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: color-mix(in srgb, var(--color-text) 60%, transparent); }
.report-page .q-meta .type { color: var(--color-accent-700); font-weight: 800; }
.report-page .q-body { display: grid; grid-template-columns: minmax(60px, auto) minmax(0, 1fr); gap: 24px calc(1.5 * var(--leading)); align-items: start; }
.report-page .q-body .spacer { display: none; }
@media (min-width: 720px) { .report-page .q-body .spacer { display: block; } }

/* Bars */
.report-page .bars { display: flex; flex-direction: column; gap: var(--half); }
.report-page .bar-row { display: grid; grid-template-columns: minmax(0, 1fr); gap: 4px; padding: 6px 0; border-bottom: 1px solid var(--color-divider); }
.report-page .bar-row:last-child { border-bottom: 0; }
.report-page .bar-row .top { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; font-size: 14px; }
.report-page .bar-row .lbl { font-family: var(--font-archivo); font-weight: 800; letter-spacing: -0.005em; }
.report-page .bar-row .lbl .bar-sub { font-weight: 400; color: color-mix(in srgb, var(--color-text) 55%, transparent); margin-left: 8px; letter-spacing: 0; font-size: 12px; }
.report-page .bar-row .val { font-family: var(--font-archivo); font-weight: 800; font-feature-settings: "tnum" 1; color: var(--color-accent-700); white-space: nowrap; font-size: 14px; }
.report-page .bar-track { height: 8px; background: color-mix(in srgb, var(--color-text) 8%, transparent); }
.report-page .bar-fill { height: 100%; background: var(--color-accent); }
.report-page .bar-fill.muted { background: var(--color-neutral-700); }

/* Rating */
.report-page .rating { display: grid; grid-template-columns: minmax(0, 260px) minmax(0, 1fr); gap: calc(1.5 * var(--leading)); align-items: end; }
@media (max-width: 720px) { .report-page .rating { grid-template-columns: 1fr; } }
.report-page .rating-avg { padding-top: var(--half); border-top: 2px solid var(--color-text); }
.report-page .rating-avg .val { font-family: var(--font-archivo); font-weight: 800; font-size: clamp(64px, 8vw, 96px); line-height: 1; color: var(--color-accent); letter-spacing: -0.03em; margin: 0; }
.report-page .rating-avg .val small { font-size: 0.32em; color: color-mix(in srgb, var(--color-text) 55%, transparent); font-weight: 800; margin-left: 4px; letter-spacing: 0; }
.report-page .rating-avg .cap { font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: color-mix(in srgb, var(--color-text) 60%, transparent); margin: 8px 0 0; }
.report-page .rating-bars { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; align-items: end; height: 160px; padding-top: 4px; border-top: 1px solid var(--color-divider); }
.report-page .rating-col { display: flex; flex-direction: column; justify-content: flex-end; gap: 6px; height: 100%; }
.report-page .rating-col .col-bar { background: var(--color-accent); min-height: 2px; }
.report-page .rating-col .col-bar.zero { background: color-mix(in srgb, var(--color-text) 8%, transparent); height: 2px; }
.report-page .rating-col .col-lbl { display: flex; justify-content: space-between; font-family: var(--font-archivo); font-weight: 800; font-size: 12px; padding-top: 4px; border-top: 2px solid var(--color-text); font-feature-settings: "tnum" 1; }
.report-page .rating-col .col-lbl .n { color: var(--color-accent-700); }
.report-page .rating-col .col-lbl .n.zero-c { color: color-mix(in srgb, var(--color-text) 40%, transparent); }

/* Theme + answers */
.report-page .theme-group { margin-top: var(--leading); }
.report-page .theme-group + .theme-group { margin-top: calc(2 * var(--leading)); }
.report-page .theme-hd { display: flex; align-items: baseline; gap: 12px; padding: 0 0 var(--half); border-bottom: 2px solid var(--color-text); margin: 0 0 var(--leading); }
.report-page .theme-hd h4 { font-family: var(--font-archivo); font-weight: 800; font-size: 18px; margin: 0; letter-spacing: -0.005em; }
.report-page .theme-hd .cnt { font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-accent-700); margin-left: auto; }
.report-page .answers { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--leading); }
.report-page .answer {
  background: var(--color-bg); border-top: 2px solid var(--color-accent);
  padding: var(--leading) calc(1.2 * var(--leading));
  display: flex; flex-direction: column; gap: 10px;
}
.report-page .zebra .answer { background: var(--color-bg); }
.report-page .answer .head {
  display: flex; justify-content: space-between; align-items: baseline; gap: 12px;
  font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
  color: color-mix(in srgb, var(--color-text) 55%, transparent);
  padding-bottom: 8px; border-bottom: 1px solid var(--color-divider);
}
.report-page .answer .head .id { font-family: var(--font-archivo); font-weight: 800; color: var(--color-text); }
.report-page .answer .quote {
  font-size: 14.5px; line-height: 1.55; white-space: pre-wrap; margin: 0;
  color: color-mix(in srgb, var(--color-text) 90%, transparent);
}
.report-page .answer .foot {
  display: flex; flex-wrap: wrap; gap: 6px 10px; padding-top: 10px;
  border-top: 1px solid var(--color-divider);
  font-size: 11px; color: color-mix(in srgb, var(--color-text) 60%, transparent);
}
.report-page .answer .foot .k { font-family: var(--font-archivo); font-weight: 800; color: var(--color-text); margin-right: 4px; }

/* Reading line */
.report-page .reading {
  margin-top: calc(1.5 * var(--leading));
  padding: var(--leading) 0 0;
  border-top: 2px solid var(--color-text);
  display: grid; grid-template-columns: minmax(0, 130px) minmax(0, 1fr); gap: 24px;
}
@media (max-width: 720px) { .report-page .reading { grid-template-columns: 1fr; } }
.report-page .reading .k { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-accent-700); }
.report-page .reading .v { font-size: 15.5px; line-height: 1.6; max-width: 60ch; margin: 0; color: color-mix(in srgb, var(--color-text) 88%, transparent); }

/* Summary block (Q8) */
.report-page .summary-kicker { font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-accent-700); margin: 0 0 var(--half); }
.report-page .summary-line { font-size: 17px; line-height: 1.5; margin: 0 0 calc(1.5 * var(--leading)); max-width: 60ch; font-family: var(--font-archivo); font-weight: 800; letter-spacing: -0.005em; }

/* Highlights */
.report-page .hl-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-top: 2px solid var(--color-text); border-bottom: 2px solid var(--color-text); }
@media (max-width: 720px) { .report-page .hl-grid { grid-template-columns: 1fr; } }
.report-page .hl-col { padding: calc(1.5 * var(--leading)) calc(1.5 * var(--leading)) calc(1.5 * var(--leading)) 0; }
.report-page .hl-col + .hl-col { border-left: 2px solid var(--color-text); padding-left: calc(1.5 * var(--leading)); }
@media (max-width: 720px) {
  .report-page .hl-col + .hl-col { border-left: 0; border-top: 2px solid var(--color-text); padding-left: 0; padding-top: calc(1.5 * var(--leading)); }
}
.report-page .hl-col h3 { font-size: 22px; margin: 0 0 var(--half); }
.report-page .hl-col .mark { display: inline-block; width: 12px; height: 12px; margin-right: 10px; vertical-align: 1px; }
.report-page .hl-col.pos .mark { background: var(--color-accent); }
.report-page .hl-col.neg .mark { background: var(--color-text); }
.report-page .hl-list { list-style: none; padding: 0; margin: var(--leading) 0 0; display: flex; flex-direction: column; gap: var(--half); }
.report-page .hl-list li { padding: 10px 0; border-top: 1px solid var(--color-divider); font-size: 14.5px; line-height: 1.5; }
.report-page .hl-list li:last-child { border-bottom: 1px solid var(--color-divider); }
.report-page .hl-list li strong { font-family: var(--font-archivo); font-weight: 800; }
.report-page .hl-list li .tally { font-family: var(--font-archivo); font-weight: 800; color: var(--color-accent-700); font-size: 11px; letter-spacing: 0.08em; margin-left: 8px; font-feature-settings: "tnum" 1; }

/* Closing */
.report-page .close-band { background: var(--color-accent); color: var(--color-bg); border-top: 0; }
.report-page .close-band .display { color: var(--color-bg); }
.report-page .close-band .display .accent { color: var(--color-bg); text-decoration: underline; text-decoration-thickness: 3px; text-underline-offset: 6px; }
.report-page .close-band .brand-line { color: var(--color-bg); }
.report-page .close-band .brand-line .sep { background: var(--color-bg); }
.report-page .close-band .brand-line .label { color: color-mix(in srgb, #f3f2f2 75%, transparent); }
.report-page .close-band p { font-size: 17px; line-height: 1.6; max-width: 62ch; margin: calc(1.5 * var(--leading)) 0 0; color: var(--color-bg); }
`;
