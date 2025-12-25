import React, { useMemo, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarPage() {
  const [value, setValue] = useState(new Date());

  const events = useMemo(
    () => [
      { title: "اجتماع إداري", date: "2025-11-03" },
      { title: "زيارة ميدانية", date: "2025-11-05" },
      { title: "عرض مشروع", date: "2025-11-10" },
    ],
    []
  );

  const selectedKey = value.toISOString().slice(0, 10);
  const todaysEvents = events.filter((e) => e.date === selectedKey);

  return (
    <div dir="rtl" style={{ padding: "2rem", background: "#f8f9fa" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>📅 الرزنامة</h1>

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          background: "#fff",
          padding: "1rem",
          borderRadius: 12,
          boxShadow: "0 4px 10px rgba(0,0,0,.1)",
        }}
      >
        <Calendar onChange={setValue} value={value} />

        <div style={{ marginTop: "1rem" }}>
          <h3 style={{ margin: 0 }}>الأحداث في {selectedKey}</h3>
          {todaysEvents.length === 0 ? (
            <p style={{ marginTop: 8, opacity: 0.7 }}>لا يوجد أحداث.</p>
          ) : (
            <ul style={{ marginTop: 8 }}>
              {todaysEvents.map((e, i) => (
                <li key={i}>{e.title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
