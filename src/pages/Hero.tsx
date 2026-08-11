export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6">
      <p className="text-neutral-400 mb-4">Hi, I'm</p>
      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
        Kalkidan Abebe
      </h1>
      <p className="mt-4 text-xl text-neutral-400 max-w-xl">
        CS student building full-stack apps with React, TypeScript, FastAPI, and
        PostgreSQL. Looking for a software engineering internship.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="px-5 py-2.5 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
        >
          View Work
        </a>
        <a
          href="#contact"
          className="px-5 py-2.5 rounded-lg border border-neutral-700 hover:border-neutral-500 transition-colors"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
