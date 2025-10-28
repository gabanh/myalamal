import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavDropdown from "./NavDropdown";

export default function Navbar({ user, onLogout }) {
  const { pathname } = useLocation();

  const linkCls = (to) =>
    `px-3 py-2 rounded-lg hover:bg-wave/40 dark:hover:bg-white/10 ${
      pathname === to ? "bg-wave/60 dark:bg-white/10 font-bold" : ""
    }`;

  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  return (
    <header className="bg-white/90 dark:bg-night/80 backdrop-blur border-b border-wave/40 dark:border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* לוגו/כותרת */}
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="w-8 h-8" />
          <h1 className="text-lg font-extrabold text-ocean dark:text-mist">
            مدرسة الأمل
          </h1>
        </div>

        {/* תפריט ניווט */}
        <nav className="flex items-center gap-2">
          <Link to="/" className={linkCls("/")}>الرئيسية</Link>

          {/* תלמיד → طالب */}
          {user.role === "طالب" && (
            <Link to="/students" className={linkCls("/students")}>الطلاب</Link>
          )}

          {/* מורה + הנהלה */}
          {(user.role === "معلم" || user.role === "إدارة") && (
            <Link to="/teachers" className={linkCls("/teachers")}>المعلمون</Link>
          )}

          {/* הנהלה בלבד */}
          {user.role === "إدارة" && (
            <>
              <Link to="/management" className={linkCls("/management")}>الإدارة</Link>
              <Link to="/admin" className={linkCls("/admin")}>لوحة الإدارة</Link>
            </>
          )}

          <Link to="/contact" className={linkCls("/contact")}>اتصل بنا</Link>

          {/* תפריט נפתח “المزيد” עם הרשאות לפי פריט */}
          <NavDropdown
            label="المزيد"
            user={user}
            items={[
              { label: "المكتبة", to: "/library", icon: "📚" }, // לכולם
              { label: "الأخبار", to: "/news", icon: "📰", allow: ["معلم","إدارة"] },
              { label: "التقويم", to: "/calendar", icon: "📅", allow: ["طالب","معلم","إدارة"] }, // ← עודכן
              { label: "البوابة الرسمية", href: "https://example.com", icon: "🌐", allow: ["إدارة"] }
            ]}
          />

          {/* קישור לרזנמה מהתפריט הראשי (אם הוספת) */}
          <Link to="/school-calendar" className={linkCls("/school-calendar")}>
            الرزنامة المدرسية
          </Link>
        </nav>

        {/* צד ימין: מתג מצב + שלום + יציאה */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-lg border border-wave/40 dark:border-white/10 hover:bg-wave/30 dark:hover:bg-white/10 transition"
            title="מצב יום/לילה"
            aria-label="Theme toggle"
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          <span className="text-sm text-ocean/70 dark:text-mist/70">
            مرحباً، <b>{user.name || "مستخدم"}</b>
          </span>

          <button
            onClick={onLogout}
            className="bg-ocean text-sand dark:bg-white/10 dark:text-mist px-3 py-2 rounded-lg hover:bg-skyblue dark:hover:bg-white/20 transition"
          >
            تسجيل الخروج
          </button>
        </div>
      </div>
    </header>
  );
}
