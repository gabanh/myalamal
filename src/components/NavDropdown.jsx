import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavDropdown({ label = "المزيد", user, items = [] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const canSee = (it) => !it.allow || it.allow.includes(user?.role);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="px-3 py-2 rounded-lg hover:bg-wave/40 dark:hover:bg-white/10"
      >
        {label}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl border border-wave/40 dark:border-white/10 bg-white dark:bg-night shadow-lg p-2 z-50">
          {items.filter(canSee).map((it) =>
            it.to ? (
              <Link
                key={it.label}
                to={it.to}
                className="block px-3 py-2 rounded-lg hover:bg-wave/30 dark:hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <span className="mr-1">{it.icon}</span> {it.label}
              </Link>
            ) : (
              <a
                key={it.label}
                href={it.href}
                target="_blank"
                rel="noreferrer"
                className="block px-3 py-2 rounded-lg hover:bg-wave/30 dark:hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <span className="mr-1">{it.icon}</span> {it.label}
              </a>
            )
          )}
        </div>
      )}
    </div>
  );
}
