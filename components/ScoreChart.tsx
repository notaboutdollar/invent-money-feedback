type ScoreChartProps = {
  title: string;
  subtitle?: string;
  counts: number[]; // esperado com 11 posições (notas 0..10)
  average: number;
  accentFrom?: number; // notas >= a essa recebem destaque
};

export function ScoreChart({
  title,
  subtitle,
  counts,
  average,
  accentFrom = 8,
}: ScoreChartProps) {
  const total = counts.reduce((a, b) => a + b, 0);
  const max = Math.max(...counts, 1);

  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-6 md:p-8">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium text-ink">{title}</h3>
          {subtitle && <p className="mt-1 text-sm text-ink/60">{subtitle}</p>}
        </div>
        <div className="text-right">
          <p className="text-2xl font-semibold text-ink">
            {average.toFixed(1)}
            <span className="text-base font-normal text-ink/50">/10</span>
          </p>
          <p className="text-xs text-ink/50">média de {total} respostas</p>
        </div>
      </div>

      <div className="flex h-64 items-stretch gap-2">
        {counts.map((count, i) => {
          const pct = total ? Math.round((count / total) * 100) : 0;
          const heightPct = (count / max) * 100;
          const highlighted = i >= accentFrom && count > 0;
          return (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <span className="h-4 text-[11px] font-semibold text-ink/70">
                {count > 0 ? `${pct}%` : ""}
              </span>
              <div className="flex w-full flex-1 items-end">
                <div
                  className={`w-full rounded-t transition-colors ${
                    highlighted ? "bg-accent" : "bg-ink/15"
                  }`}
                  style={{
                    height: `${heightPct}%`,
                    minHeight: count > 0 ? "6px" : "0px",
                  }}
                  aria-label={`Nota ${i}: ${count} ${count === 1 ? "resposta" : "respostas"}`}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-2 flex gap-2">
        {counts.map((_, i) => (
          <div
            key={i}
            className="flex-1 text-center text-[11px] text-ink/50"
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}
