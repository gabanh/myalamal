import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Management from "./pages/Management";
import Contact from "./pages/Contact";
import AdminPanel from "./pages/AdminPanel";
import SchoolCalendar from "./pages/SchoolCalendar";
import Library from "./pages/Library";
import News from "./pages/News";
import Calendar from "./pages/Calendar";

// Components
import Navbar from "./components/Navbar";
import RequireRole from "./components/RequireRole";

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
    <Router>
      <div className="min-h-screen bg-sand text-ocean dark:bg-night dark:text-mist transition-colors">
        <Navbar user={user} onLogout={handleLogout} />
        <div className="p-4 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/school-calendar" element={<SchoolCalendar />} />
            <Route path="/library" element={<Library />} />
            <Route path="/news" element={<News />} />
            <Route path="/calendar" element={<Calendar />} />

            <Route
              path="/students"
              element={
                <RequireRole user={user} allow={["طالب"]}>
                  <Students />
                </RequireRole>
              }
            />

            <Route
              path="/teachers"
              element={
                <RequireRole user={user} allow={["معلم", "إدارة"]}>
                  <Teachers />
                </RequireRole>
              }
            />

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

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
