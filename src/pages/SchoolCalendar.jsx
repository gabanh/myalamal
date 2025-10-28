import React from "react";

export default function SchoolCalendar() {
  return (
    <div className="rounded-2xl overflow-hidden border border-wave/40 dark:border-white/10 bg-white/90 dark:bg-night/80 shadow-lg h-[85vh]">
      <iframe
                src="/calendar-alamal.html"
        title="الرزنامة المدرسية"
        className="w-full h-full border-0"
      />
    </div>
  );
}
