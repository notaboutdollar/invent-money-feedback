"use client";

import { useLang, type Lang } from "./LangProvider";

type Props = {
  variant?: "light" | "dark";
  className?: string;
};

export function LangSwitcher({ variant = "light", className = "" }: Props) {
  const { lang, setLang } = useLang();

  const base =
    "inline-flex items-center rounded-full border text-[11px] font-semibold uppercase tracking-[0.12em] overflow-hidden";
  const border =
    variant === "dark"
      ? "border-white/25 bg-black/40"
      : "border-black/15 bg-white/70 backdrop-blur";

  const btn = (active: boolean) =>
    [
      "px-2.5 py-1 transition-colors",
      active
        ? variant === "dark"
          ? "bg-white text-black"
          : "bg-black text-white"
        : variant === "dark"
        ? "text-white/70 hover:text-white"
        : "text-black/60 hover:text-black",
    ].join(" ");

  const handle = (l: Lang) => () => setLang(l);

  return (
    <div
      className={`${base} ${border} ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={handle("en")}
        className={btn(lang === "en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={handle("pt")}
        className={btn(lang === "pt")}
        aria-pressed={lang === "pt"}
      >
        PT
      </button>
    </div>
  );
}
