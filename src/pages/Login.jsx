import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("طالب"); // ← ברירת מחדל חדשה
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (role === "طالب" && password === "1234") ||      // ← עודכן
      (role === "معلم" && password === "teach2025") ||
      (role === "إدارة" && password === "admin2025")
    ) {
      onLogin({ name, role });
    } else {
      alert("كلمة المرور غير صحيحة");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-skyblue via-wave to-sand text-ocean">
      <form
        onSubmit={handleSubmit}
        className="w-72 bg-white/95 backdrop-blur-md text-ocean rounded-2xl shadow-xl p-6 border border-wave/40"
      >
        <div className="text-center mb-4">
          <img src="/logo.svg" alt="logo" className="w-10 mx-auto mb-2" />
          <h2 className="text-xl font-extrabold text-ocean">تسجيل الدخول</h2>
          <p className="text-xs text-ocean/70 mt-1">
            مرحباً بكم في بوابة مدرسة الأمل
          </p>
        </div>

        <label className="block mb-1 text-sm font-semibold text-ocean/80">الاسم</label>
        <input
          type="text"
          placeholder="اكتب اسمك"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-wave/60 focus:border-ocean focus:ring-1 focus:ring-ocean rounded-lg px-3 py-1.5 mb-3 outline-none transition bg-white text-sm"
          required
        />

        <label className="block mb-1 text-sm font-semibold text-ocean/80">الدور</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border border-wave/60 focus:border-ocean focus:ring-1 focus:ring-ocean rounded-lg px-3 py-1.5 mb-3 outline-none transition bg-white text-sm"
        >
          <option>طالب</option> {/* ← עודכן */}
          <option>معلم</option>
          <option>إدارة</option>
        </select>

        <label className="block mb-1 text-sm font-semibold text-ocean/80">كلمة المرور</label>
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-wave/60 focus:border-ocean focus:ring-1 focus:ring-ocean rounded-lg px-3 py-1.5 mb-4 outline-none transition bg-white text-sm"
          required
        />

        <button
          type="submit"
          className="w-full bg-ocean text-sand p-2 rounded-lg font-bold text-sm shadow hover:bg-skyblue transform hover:-translate-y-0.5 transition-all duration-300"
        >
          دخول
        </button>
      </form>
    </div>
  );
}
