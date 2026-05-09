import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;
const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;
const TIME_ZONE = "Asia/Tokyo";

type FreeBusyResponse = {
  calendars?: Record<
    string,
    {
      busy?: { start: string; end: string }[];
      errors?: { domain: string; reason: string }[];
    }
  >;
};

function toJstDateKey(iso: string): string {
  const date = new Date(iso);
  const jst = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 10);
}

function expandBusyDates(busy: { start: string; end: string }[]): string[] {
  const dates = new Set<string>();
  for (const { start, end } of busy) {
    const startKey = toJstDateKey(start);
    const endKey = toJstDateKey(end);
    const cursor = new Date(`${startKey}T00:00:00Z`);
    const last = new Date(`${endKey}T00:00:00Z`);
    while (cursor <= last) {
      dates.add(cursor.toISOString().slice(0, 10));
      cursor.setUTCDate(cursor.getUTCDate() + 1);
    }
  }
  return Array.from(dates).sort();
}

export async function GET(req: NextRequest) {
  if (!CALENDAR_ID || !API_KEY) {
    return NextResponse.json(
      { error: "Calendar is not configured" },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(req.url);
  const timeMin = searchParams.get("timeMin");
  const timeMax = searchParams.get("timeMax");

  if (!timeMin || !timeMax) {
    return NextResponse.json(
      { error: "timeMin and timeMax are required (ISO 8601)" },
      { status: 400 }
    );
  }

  const url = `https://www.googleapis.com/calendar/v3/freeBusy?key=${encodeURIComponent(API_KEY)}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      timeMin,
      timeMax,
      timeZone: TIME_ZONE,
      items: [{ id: CALENDAR_ID }],
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("[availability] FreeBusy HTTP error", response.status, text);
    return NextResponse.json(
      { error: "Failed to fetch availability", status: response.status, details: text },
      { status: 502 }
    );
  }

  const data = (await response.json()) as FreeBusyResponse;
  const calendar = data.calendars?.[CALENDAR_ID];

  if (calendar?.errors?.length) {
    console.error("[availability] Calendar access error", calendar.errors);
    return NextResponse.json(
      { error: "Calendar access error", details: calendar.errors },
      { status: 502 }
    );
  }

  const busyDates = expandBusyDates(calendar?.busy ?? []);

  return NextResponse.json(
    { busyDates },
    { headers: { "Cache-Control": "public, max-age=60, s-maxage=60" } }
  );
}
