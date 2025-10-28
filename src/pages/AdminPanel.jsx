import React, { useState, useEffect } from "react";

export default function AdminPanel() {
  const [announcements, setAnnouncements] = useState(() => {
    const saved = localStorage.getItem("announcements");
    return saved ? JSON.parse(saved) : [];
  });

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  useEffect(() => {
    localStorage.setItem("announcements", JSON.stringify(announcements));
  }, [announcements]);

  const addAnnouncement = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;
    setAnnouncements([...announcements, { title: newTitle, content: newContent }]);
    setNewTitle("");
    setNewContent("");
  };

  const deleteAnnouncement = (index) => {
    setAnnouncements((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="rounded-2xl p-6 border bg-white/90 text-ocean border-wave/40 shadow-sm
                    dark:bg-night/80 dark:text-mist dark:border-white/10 transition-colors">
      <h2 className="text-2xl font-extrabold mb-4 text-center">لوحة الإدارة</h2>

      <form onSubmit={addAnnouncement} className="mb-6 grid gap-3">
        <input
          type="text"
          placeholder="عنوان الإعلان"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full border border-wave/60 rounded-lg px-3 py-2 bg-white focus:border-ocean focus:ring-1 focus:ring-ocean outline-none
                     dark:bg-night/60 dark:border-white/10 dark:focus:border-white/30 dark:focus:ring-white/20 transition"
        />
        <textarea
          placeholder="محتوى الإعلان"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className="w-full border border-wave/60 rounded-lg px-3 py-2 h-28 bg-white focus:border-ocean focus:ring-1 focus:ring-ocean outline-none
                     dark:bg-night/60 dark:border-white/10 dark:focus:border-white/30 dark:focus:ring-white/20 transition"
        />
        <button
          type="submit"
          className="justify-self-start bg-ocean text-sand px-4 py-2 rounded-lg font-bold shadow hover:bg-skyblue transition
                     dark:bg-white/10 dark:text-mist dark:hover:bg-white/20"
        >
          إضافة إعلان
        </button>
      </form>

      <div>
        <h3 className="font-bold text-lg mb-3">الإعلانات الحالية:</h3>
        {announcements.length === 0 ? (
          <p className="text-ocean/70 dark:text-mist/70">لا توجد إعلانات حالياً.</p>
        ) : (
          announcements.map((a, i) => (
            <div
              key={i}
              className="rounded-xl p-4 mb-3 border bg-sand text-ocean border-wave/40 flex justify-between items-center
                         dark:bg-night/60 dark:text-mist dark:border-white/10"
            >
              <div>
                <p className="font-bold">{a.title}</p>
                <p className="opacity-80">{a.content}</p>
              </div>
              <button
                onClick={() => deleteAnnouncement(i)}
                className="px-3 py-2 rounded-lg font-bold border border-red-300 text-red-700 hover:bg-red-50
                           dark:border-red-700/40 dark:text-red-300 dark:hover:bg-red-500/10 transition"
              >
                حذف
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
