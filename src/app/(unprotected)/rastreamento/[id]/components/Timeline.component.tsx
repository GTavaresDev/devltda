"use client";

import { useState } from "react";

import { CardDescription } from "@/components/ui/card";

type TimelineItem = {
  id: number;
  title: string;
  subTitle: string;
  content: string;
};

type TimelineProps = {
  items: TimelineItem[];
  currentStatusId: number;
};

export default function Timeline({ items, currentStatusId }: TimelineProps) {
  const [expanded, setExpanded] = useState(false);
  const completedCount = items.filter(
    (item) => item.id <= currentStatusId,
  ).length;
  const progressPercent =
    items.length === 0 ? 0 : Math.round((completedCount / items.length) * 100);

  return (
    <button
      type="button"
      onClick={() => setExpanded((current) => !current)}
      className="relative block w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-7 text-left transition-colors hover:border-zinc-700 sm:p-8"
      aria-expanded={expanded}
    >
      <div
        className="pointer-events-none absolute -top-20 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl"
        aria-hidden
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Rastreamento
          </p>
          <h2 className="mt-0.5 text-base font-semibold text-zinc-100">
            Andamento da encomenda
          </h2>
        </div>

        <div className="flex flex-col items-end gap-2">
          <span className="text-xs text-zinc-500">
            {progressPercent}% concluido
          </span>
          <div className="h-1.5 w-24 overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-emerald-400 transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400">
              <svg
                viewBox="0 0 24 24"
                className={[
                  "h-4 w-4 transition-transform duration-200",
                  expanded ? "rotate-180" : "",
                ].join(" ")}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>

            <span>Mais detalhes</span>
          </div>
        </div>
      </div>

      <div className="relative mt-7 space-y-0 border-t border-zinc-800 pt-7">
        {items.map((item, index) => {
          const completed = item.id < currentStatusId;
          const current = item.id === currentStatusId;
          const pending = item.id > currentStatusId;
          const last = index === items.length - 1;

          return (
            <div
              key={item.id}
              className={[
                "flex transition-all duration-300 ease-out",
                expanded ? "gap-5" : "gap-6",
              ].join(" ")}
            >
              <div className="flex flex-col items-center">
                <div
                  className={[
                    "relative flex shrink-0 items-center justify-center",
                    expanded ? "h-9 w-9" : "h-10 w-10",
                  ].join(" ")}
                >
                  {(completed || current) && (
                    <div
                      className={[
                        "absolute inset-0 rounded-full",
                        current
                          ? "animate-pulse bg-emerald-400/20"
                          : "bg-emerald-900/40",
                      ].join(" ")}
                    />
                  )}

                  <div
                    className={[
                      "relative z-10 flex items-center justify-center rounded-full border-2 transition-all duration-500",
                      expanded ? "h-6 w-6" : "h-7 w-7",
                      completed
                        ? "border-emerald-400 bg-emerald-400"
                        : current
                          ? "border-emerald-400 bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.35)]"
                          : "border-zinc-700 bg-zinc-900",
                    ].join(" ")}
                  >
                    {completed && (
                      <svg
                        viewBox="0 0 12 12"
                        className="h-3 w-3 text-zinc-900"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 6l3 3 5-5" />
                      </svg>
                    )}
                    {current && (
                      <div className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
                    )}
                    {pending && (
                      <div className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
                    )}
                  </div>
                </div>

                {!last && (
                  <div
                    className={[
                      "relative mx-auto w-px flex-1 overflow-hidden rounded-full bg-zinc-800",
                      expanded ? "mt-1" : "mt-2 min-h-10",
                    ].join(" ")}
                  >
                    <div
                      className="w-full bg-emerald-400 transition-all duration-500 ease-out"
                      style={{ height: completed ? "100%" : "0%" }}
                    />
                  </div>
                )}
              </div>

              <div
                className={[
                  expanded ? "pb-8" : "pb-10",
                  last ? "pb-0" : "",
                ].join(" ")}
              >
                {expanded ? (
                  <div className="mb-1 flex items-center gap-2">
                    {current && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-800 bg-emerald-950 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                        <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                        Atual
                      </span>
                    )}
                    {completed && (
                      <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                        Concluido
                      </span>
                    )}
                    {pending && (
                      <span className="inline-flex items-center rounded-full border border-zinc-800 bg-transparent px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-700">
                        Pendente
                      </span>
                    )}
                  </div>
                ) : null}

                <p
                  className={[
                    "text-sm font-semibold leading-tight",
                    current
                      ? "text-zinc-50"
                      : completed
                        ? "text-zinc-300"
                        : "text-zinc-600",
                  ].join(" ")}
                >
                  {item.title}
                </p>

                {expanded && item.subTitle ? (
                  <p
                    className={[
                      "mt-0.5 text-xs",
                      current
                        ? "text-zinc-400"
                        : completed
                          ? "text-zinc-500"
                          : "text-zinc-700",
                    ].join(" ")}
                  >
                    {item.subTitle}
                  </p>
                ) : null}

                {expanded && item.content ? (
                  <p
                    className={[
                      "mt-1 text-xs leading-relaxed",
                      current
                        ? "text-zinc-500"
                        : completed
                          ? "text-zinc-600"
                          : "text-zinc-800",
                    ].join(" ")}
                  >
                    {item.content}
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </button>
  );
}
