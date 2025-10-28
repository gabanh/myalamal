import React, { useEffect, useState } from "react";
import AnnouncementCard from "../components/AnnouncementCard";
import WeatherCard from "../components/WeatherCard";
import QuickLinkButton from "../components/QuickLinkButton"; // <<< חדש

export default function Dashboard() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("announcements") || "[]");
    setAnnouncements(saved);
  }, []);

  const weather = [
    { day: "الأحد", temp: 27 },
    { day: "الإثنين", temp: 28 },
    { day: "الثلاثاء", temp: 29 },
    { day: "الأربعاء", temp: 30 },
  ];

  // >>> כאן מנהלים את רשימת האתרים (תעדכן כתובות ושמות):
  const quickLinks = [
    { label: "موقع المدرسة", href: "https://example.com", icon: "🏫" },
    { label: "وزارة التعليم", href: "https://www.education.gov", icon: "🏛️" },
    { label: "نظام الامتحانات", href: "https://exams.example.com", icon: "📝" },
    { label: "البريد المدرسي", href: "https://mail.example.com", icon: "✉️" },
  ];

  return (
    <div className="space-y-6">
      {/* מזג אוויר */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {weather.map((w) => (
          <WeatherCard key={w.day} day={w.day} temp={w.temp} />
        ))}
      </div>

      {/* קישורים מהירים לאתרים */}
      <div className="rounded-2xl p-6 border bg-white/90 text-ocean border-wave/40 shadow-sm
                      dark:bg-night/80 dark:text-mist dark:border-white/10 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">🔗 روابط سريعة</h2>
          <span className="text-ocean/60 dark:text-mist/60 text-sm">يفتح في تبويب جديد</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {quickLinks.map((link) => (
            <QuickLinkButton
              key={link.href}
              href={link.href}
              label={link.label}
              icon={link.icon}
            />
          ))}
        </div>
      </div>

      {/* מודעות */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {announcements.length
          ? announcements.map((a, i) => (
              <AnnouncementCard key={i} title={a.title} content={a.content} />
            ))
          : (
            <>
              <AnnouncementCard title="تنويه هام" content="—" />
              <AnnouncementCard title="أخبار المدرسة" content="—" />
              <AnnouncementCard title="مواعيد هامة" content="—" />
            </>
          )}
      </div>

      {/* קופסת מידע */}
      <div className="rounded-2xl p-6 border bg-white/90 text-ocean border-wave/40 shadow-sm
                      dark:bg-night/80 dark:text-mist dark:border-white/10 transition-colors">
        <h2 className="text-xl font-bold mb-2">📚 قائمة الكتب</h2>
        <p className="text-ocean/80 dark:text-mist/80">
          يمكنكم تحميل قائمة الكتب للسنة الدراسية الجديدة عبر البوابة.
        </p>
      </div>
    </div>
  );
}
