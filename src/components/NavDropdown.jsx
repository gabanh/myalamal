import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Dropdown גנרי עם הרשאות:
 * items: [{ label, to? | href?, icon?, allow?: ["תلميذ","معلم","إدارة"] }]
 * אם allow לא קיים – הפריט מוצג לכולם.
 */
export default function NavDropdown({ label = "المزيد", items = [], user }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const visibleItems = items.filter(
    (it) => !it.allow || (user && it.allow.includes(user.role))
  );

  if (visibleItems.length === 0) return null;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="px-3 py-2 rounded-lg hover:bg-wave/40 dark:hover:bg-white/10"
      >
        {label} ▾
      </button>

      {open && (
        <div
          className="absolute top-full right-0 mt-2 w-56 rounded-xl overflow-hidden shadow-lg
                     bg-white dark:bg-night/90 border border-wave/40 dark:border-white/10 z-50"
        >
          {visibleItems.map((it, idx) =>
            it.to ? (
              <Link
                key={idx}
                to={it.to}
                className="block px-4 py-2 text-right hover:bg-wave/30 dark:hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {it.icon} {it.label}
              </Link>
            ) : (
              <a
                key={idx}
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-right hover:bg-wave/30 dark:hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {it.icon} {it.label}
              </a>
            )
          )}
        </div>
      )}
    </div>
  );
}
