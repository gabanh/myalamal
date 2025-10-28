import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Management from "./pages/Management";
import Contact from "./pages/Contact";
import AdminPanel from "./pages/AdminPanel";
import Navbar from "./components/Navbar";
import RequireRole from "./components/RequireRole";

// דפים נוספים (אם יצרת אותם)
import SchoolCalendar from "./pages/SchoolCalendar";
import Library from "./pages/Library";
import News from "./pages/News";
import Calendar from "./pages/Calendar";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  if (!user) return <Login onLogin={handleLogin} />;

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-sand text-ocean dark:bg-night dark:text-mist transition-colors">
        <Navbar user={user} onLogout={handleLogout} />
        <div className="p-4 max-w-6xl mx-auto">
          <Routes>
            {/* לכולם אחרי התחברות */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/school-calendar" element={<SchoolCalendar />} />

            {/* דפים מה-dropdown */}
            <Route path="/library" element={<Library />} />
            <Route path="/news" element={<News />} />
            <Route path="/calendar" element={<Calendar />} />

            {/* תלמיד ← طالب בלבד */}
            <Route
              path="/students"
              element={
                <RequireRole user={user} allow={["طالب"]}>
                  <Students />
                </RequireRole>
              }
            />

            {/* מורה + הנהלה */}
            <Route
              path="/teachers"
              element={
                <RequireRole user={user} allow={["معلم", "إدارة"]}>
                  <Teachers />
                </RequireRole>
              }
            />

            {/* הנהלה בלבד */}
            <Route
              path="/management"
              element={
                <RequireRole user={user} allow={["إدارة"]}>
                  <Management />
                </RequireRole>
              }
            />
            <Route
              path="/admin"
              element={
                <RequireRole user={user} allow={["إدارة"]}>
                  <AdminPanel />
                </RequireRole>
              }
            />

            {/* ניתוב ברירת מחדל */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
