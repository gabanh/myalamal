import React from "react";

export default function QuickLinkButton({ href, label, icon = "🔗" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                 bg-ocean text-sand shadow hover:bg-skyblue transition
                 dark:bg-white/10 dark:text-mist dark:hover:bg-white/20"
    >
      <span className="text-lg">{icon}</span>
      <span className="font-bold">{label}</span>
    </a>
  );
}
