"use client";

import { useState } from "react";
import Link from "next/link";
import { nav, site } from "@/lib/data";

function getStoredTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  try {
    return (localStorage.getItem("theme") as "light" | "dark" | null) || "light";
  } catch {
    return "light";
  }
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(getStoredTheme);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage may be unavailable (private browsing, etc.) — safe to ignore
    }
  }

  return (
    <header
      className="sticky top-0 z-20 border-b backdrop-blur"
      style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--bg) 85%, transparent)" }}
    >
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span
            className="flex size-8 items-center justify-center rounded-full text-sm font-semibold"
            style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
          >
            {site.initials}
          </span>
          <span>{site.name}</span>
        </Link>

        <button
          aria-label="Toggle navigation"
          className="flex flex-col gap-1.5 sm:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="h-0.5 w-6" style={{ background: "var(--fg)" }} />
          <span className="h-0.5 w-6" style={{ background: "var(--fg)" }} />
          <span className="h-0.5 w-6" style={{ background: "var(--fg)" }} />
        </button>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-full left-0 w-full flex-col gap-4 border-b px-6 py-4 sm:static sm:flex sm:w-auto sm:flex-row sm:items-center sm:gap-6 sm:border-0 sm:px-0 sm:py-0`}
          style={{ borderColor: "var(--border)", background: "var(--bg)" }}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors"
              style={{ color: "var(--fg-muted)" }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="flex size-8 items-center justify-center rounded-full border text-sm"
            style={{ borderColor: "var(--border)" }}
            suppressHydrationWarning
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </nav>
      </div>
    </header>
  );
}
