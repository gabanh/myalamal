// src/pages/SchoolCalendar.jsx
import React from "react";

export default function SchoolCalendar() {
  const BASE = import.meta.env.BASE_URL || "/";
  // نربط مباشرة بملف HTML الأصلي مع كسر كاش بسيط
  const calendarSrc = `${BASE}calendar%202026.html?v=20251030`;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-night transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-extrabold text-ocean dark:text-mist mb-4">
          📅 الرزنامة المدرسية (الملف الأصلي)
        </h1>

        <div className="rounded-xl overflow-hidden shadow-md border border-wave/30 dark:border-white/10 bg-white dark:bg-night">
          <iframe
            title="School Calendar"
            src={calendarSrc}
            className="w-full"
            style={{ minHeight: "80vh", border: 0 }}
            loading="lazy"
          />
        </div>

        <div className="mt-4 text-center">
          <a
            href={calendarSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            فتح الملف مباشرة ↗
          </a>
        </div>
      </div>
    </main>
  );
}
