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
    <nav className="fixed top-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
      <div
        className="
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-2xl
      "
      >
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className="text-xl font-semibold tracking-tight">
            Kalkidan<span className="text-green-400">.</span>
          </NavLink>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400"
                    : "text-neutral-400 hover:text-white transition"
                }
              >
                {link.label}
              </NavLink>
            ))}

            <a
              href="https://github.com/KalkidanAB-22"
              target="_blank"
              rel="noreferrer"
              className="
                rounded-xl
                bg-white
                px-4
                py-2
                text-sm
                font-semibold
                text-black
                hover:bg-neutral-200
                transition
              "
            >
              GitHub ↗
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-xl">
            {open ? "×" : "☰"}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <NavLink
                  key={link.href}
                  onClick={() => setOpen(false)}
                  to={link.href}
                  className="text-neutral-300"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
