import { NavLink } from "react-router-dom";
import { useState } from "react";

const links = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 top-6 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/70 shadow-2xl backdrop-blur-xl">
        {/* Main navbar */}
        <div className="flex items-center justify-between px-5 py-4 sm:px-6">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="text-xl font-semibold tracking-tight text-white"
          >
            Kalkidan<span className="text-green-400">.</span>
          </NavLink>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "font-medium text-green-400"
                      : "text-neutral-400 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <a
              href="https://github.com/KalkidanAB-22"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              GitHub ↗
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white transition hover:bg-white/10 md:hidden"
          >
            {open ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          className={`border-t border-white/10 md:hidden ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col px-5 py-5">
            {links.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 transition ${
                    isActive
                      ? "bg-green-500/10 text-green-400"
                      : "text-neutral-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Mobile GitHub */}
            <a
              href="https://github.com/KalkidanAB-22"
              target="_blank"
              rel="noreferrer"
              className="mt-3 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
