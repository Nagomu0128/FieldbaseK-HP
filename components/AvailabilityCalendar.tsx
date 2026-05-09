"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];

function formatDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function buildMonthGrid(year: number, month: number): (Date | null)[] {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startWeekday = firstDay.getDay();
  const daysInMonth = lastDay.getDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export default function AvailabilityCalendar() {
  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [busyDates, setBusyDates] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const start = new Date(viewYear, viewMonth, 1);
    const end = new Date(viewYear, viewMonth + 1, 0, 23, 59, 59);

    setLoading(true);
    setError(null);

    fetch(
      `/api/availability?timeMin=${encodeURIComponent(
        start.toISOString()
      )}&timeMax=${encodeURIComponent(end.toISOString())}`,
      { signal: controller.signal }
    )
      .then(async (res) => {
        if (!res.ok) throw new Error("取得に失敗しました");
        const data = (await res.json()) as { busyDates: string[] };
        setBusyDates(new Set(data.busyDates));
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError("空き状況の取得に失敗しました");
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [viewYear, viewMonth]);

  const cells = useMemo(
    () => buildMonthGrid(viewYear, viewMonth),
    [viewYear, viewMonth]
  );

  const goPrev = () => {
    const m = viewMonth - 1;
    if (m < 0) {
      setViewYear(viewYear - 1);
      setViewMonth(11);
    } else {
      setViewMonth(m);
    }
  };

  const goNext = () => {
    const m = viewMonth + 1;
    if (m > 11) {
      setViewYear(viewYear + 1);
      setViewMonth(0);
    } else {
      setViewMonth(m);
    }
  };

  const goToday = () => {
    setViewYear(today.getFullYear());
    setViewMonth(today.getMonth());
  };

  const isCurrentMonth =
    viewYear === today.getFullYear() && viewMonth === today.getMonth();

  const monthLabel = `${viewYear}年 ${viewMonth + 1}月`;

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 sm:p-6 border-b bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={goPrev}
            aria-label="前の月"
            className="rounded-full h-9 w-9 sm:h-10 sm:w-10 shrink-0"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>

          <div className="flex items-baseline gap-2 sm:gap-3 min-w-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight truncate">
              {monthLabel}
            </h3>
            {loading && (
              <Loader2 className="w-4 h-4 animate-spin text-text-sub shrink-0" />
            )}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={goNext}
            aria-label="次の月"
            className="rounded-full h-9 w-9 sm:h-10 sm:w-10 shrink-0"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 justify-between sm:justify-end">
          <Button
            variant="ghost"
            size="sm"
            onClick={goToday}
            disabled={isCurrentMonth}
            className="text-xs sm:text-sm"
          >
            今月へ
          </Button>

          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 text-green-600 font-bold">
                ○
              </span>
              <span className="text-text-sub">空き</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-100 text-red-600 font-bold">
                ×
              </span>
              <span className="text-text-sub">予約済</span>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="px-4 py-3 text-sm text-red-700 bg-red-50 border-b border-red-200">
          {error}
        </div>
      )}

      {/* Weekday headers */}
      <div className="grid grid-cols-7 bg-gray-50 border-b text-center text-xs sm:text-sm font-bold tracking-wide">
        {WEEKDAYS.map((day, i) => (
          <div
            key={day}
            className={`py-2 sm:py-3 ${
              i === 0
                ? "text-red-500"
                : i === 6
                ? "text-blue-500"
                : "text-gray-700"
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 bg-gray-200 gap-px">
        {cells.map((date, idx) => {
          if (!date) {
            return (
              <div
                key={`empty-${idx}`}
                className="aspect-square sm:aspect-[4/3] bg-gray-50"
              />
            );
          }

          const key = formatDateKey(date);
          const isPast = date < today;
          const isToday = date.getTime() === today.getTime();
          const isBusy = busyDates.has(key);
          const isAvailable = !isPast && !isBusy;
          const dayOfWeek = date.getDay();

          let cellBg = "bg-white";
          if (isPast) cellBg = "bg-gray-50";
          else if (isBusy) cellBg = "bg-red-50";
          else if (isAvailable) cellBg = "bg-green-50/60";

          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: (idx % 7) * 0.015 }}
              className={`relative aspect-square sm:aspect-[4/3] p-1 sm:p-2 flex flex-col transition-colors ${cellBg} ${
                !isPast ? "hover:brightness-95" : ""
              }`}
            >
              {/* Date number */}
              <div className="flex items-start justify-between">
                <span
                  className={`text-xs sm:text-sm md:text-base font-bold leading-none ${
                    isPast
                      ? "text-gray-300"
                      : dayOfWeek === 0
                      ? "text-red-500"
                      : dayOfWeek === 6
                      ? "text-blue-500"
                      : "text-gray-800"
                  }`}
                >
                  {date.getDate()}
                </span>
                {isToday && (
                  <span className="text-[9px] sm:text-[10px] font-bold px-1 py-px sm:px-1.5 sm:py-0.5 rounded-full bg-primary text-white leading-none">
                    今日
                  </span>
                )}
              </div>

              {/* Status indicator */}
              {!isPast && (
                <div className="flex-1 flex items-center justify-center">
                  {isBusy ? (
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="text-lg sm:text-2xl md:text-3xl font-black text-red-500 leading-none">
                        ×
                      </span>
                      <span className="hidden sm:inline text-[9px] md:text-xs font-medium text-red-500/80 leading-none">
                        予約済
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="text-lg sm:text-2xl md:text-3xl font-black text-green-500 leading-none">
                        ○
                      </span>
                      <span className="hidden sm:inline text-[9px] md:text-xs font-medium text-green-600/80 leading-none">
                        空き
                      </span>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Footer note */}
      <div className="px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-text-sub border-t bg-gray-50/50 leading-relaxed">
        <p>
          ※ 表示は予約の有無のみで、予約内容の詳細は表示されません。
          <br className="sm:hidden" />
          最新の空き状況は、お問い合わせ時にご確認ください。
        </p>
      </div>
    </div>
  );
}
