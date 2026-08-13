import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    if (featuredProjects.length <= 1) return;

    const interval = setInterval(() => {
      setActiveProject((current) =>
        current === featuredProjects.length - 1 ? 0 : current + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  const project = featuredProjects[activeProject];

  return (
    <main className="overflow-hidden">
      {/* =========================
          HERO
      ========================== */}

      <section className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-20 pt-32">
        {/* Background glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-24
            -z-10
            h-[30rem]
            w-[30rem]
            -translate-x-1/2
            rounded-full
            bg-green-500/10
            blur-3xl
          "
        />

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* =========================
              HERO CONTENT
          ========================== */}

          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />

              <p className="text-sm uppercase tracking-[0.25em] text-green-400">
                Computer Science Student · Full-Stack Developer
              </p>
            </div>

            <h1
              className="
                mt-6
                max-w-3xl
                text-5xl
                font-bold
                leading-[1.05]
                tracking-[-0.04em]
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              I build software
              <br />
              <span className="text-neutral-500">
                that solves real problems.
              </span>
            </h1>

            <p
              className="
                mt-7
                max-w-xl
                text-lg
                leading-8
                text-neutral-400
              "
            >
              I'm Kalkidan Abebe, a Computer Science student focused on building
              complete web applications — from responsive interfaces to APIs,
              authentication, databases, and deployment.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="
                  rounded-xl
                  bg-green-500
                  px-6
                  py-3
                  font-semibold
                  text-black
                  shadow-lg
                  shadow-green-500/10
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-green-400
                  hover:shadow-green-500/20
                  active:scale-95
                "
              >
                Explore My Work →
              </Link>

              <Link
                to="/contact"
                className="
                  rounded-xl
                  border
                  border-white/15
                  bg-white/[0.03]
                  px-6
                  py-3
                  font-semibold
                  text-white
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-white/30
                  hover:bg-white/[0.07]
                  active:scale-95
                "
              >
                Let's Talk
              </Link>
            </div>

            {/* What I Build */}
            <div className="mt-10">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-600">
                What I build
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Full-Stack Applications",
                  "REST APIs",
                  "Authentication Systems",
                  "Database-Driven Platforms",
                  "Payment Integrations",
                  "Responsive Interfaces",
                ].map((item) => (
                  <span
                    key={item}
                    className="
        rounded-full
        border
        border-white/10
        bg-white/[0.03]
        px-3.5
        py-1.5
        text-xs
        text-neutral-400
        transition
        hover:border-green-400/20
        hover:text-neutral-200
      "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* =========================
              REAL PROJECT SHOWCASE
          ========================== */}

          {project && (
            <div className="relative">
              {/* Glow behind project */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-8
                  rounded-[3rem]
                  bg-green-500/5
                  blur-3xl
                "
              />

              <Link
                to={`/projects/${project.id}`}
                className="group relative block"
              >
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.035]
                    p-3
                    shadow-2xl
                    shadow-black/30
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    group-hover:-translate-y-2
                    group-hover:border-green-400/20
                  "
                >
                  {/* Browser header */}
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      border-white/10
                      px-3
                      py-3
                    "
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                    </div>

                    <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[10px] text-neutral-500 sm:block">
                      {project.title.toLowerCase().replaceAll(" ", "-")}
                    </div>

                    <span className="text-xs text-neutral-600">↗</span>
                  </div>

                  {/* Real project screenshot */}
                  <div className="relative overflow-hidden rounded-2xl bg-neutral-950">
                    <div className="flex min-h-[300px] items-center justify-center sm:min-h-[390px]">
                      {project.images.map((image, index) => (
                        <img
                          key={image}
                          src={image}
                          alt={`${project.title} preview ${index + 1}`}
                          className={`
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-contain
                            p-3
                            transition-all
                            duration-700
                            sm:p-4
                            ${
                              index === 0
                                ? "scale-100 opacity-100"
                                : "scale-[0.98] opacity-0"
                            }
                          `}
                        />
                      ))}
                    </div>

                    {/* Image overlay */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/50
                        via-transparent
                        to-transparent
                      "
                    />

                    {/* Project label */}
                    <div
                      className="
                        absolute
                        bottom-5
                        left-5
                        rounded-full
                        border
                        border-white/10
                        bg-black/50
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-white
                        backdrop-blur-md
                      "
                    >
                      Featured Project
                    </div>
                  </div>

                  {/* Project information */}
                  <div className="px-3 pb-3 pt-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-green-400">
                          {project.stack.slice(0, 3).join(" · ")}
                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-white">
                          {project.title}
                        </h2>
                      </div>

                      <span
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          bg-white/5
                          text-neutral-400
                          transition
                          duration-300
                          group-hover:translate-x-1
                          group-hover:border-green-400/30
                          group-hover:text-green-400
                        "
                      >
                        →
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>

              {/* Project selector */}
              {featuredProjects.length > 1 && (
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex gap-2">
                    {featuredProjects.map((item, index) => (
                      <button
                        key={item.id}
                        type="button"
                        aria-label={`Show ${item.title}`}
                        onClick={() => setActiveProject(index)}
                        className={`
                          h-1
                          rounded-full
                          transition-all
                          duration-500
                          ${
                            index === activeProject
                              ? "w-10 bg-green-400"
                              : "w-3 bg-white/20 hover:bg-white/40"
                          }
                        `}
                      />
                    ))}
                  </div>

                  <p className="text-xs text-neutral-600">Selected work</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* =========================
          SELECTED WORK INTRO
      ========================== */}

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div
          className="
            flex
            flex-col
            gap-6
            border-t
            border-white/10
            pt-16
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-green-400">
              Selected work
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built, not just designed.
            </h2>
          </div>

          <Link
            to="/projects"
            className="
              text-sm
              font-medium
              text-neutral-400
              transition
              hover:text-green-400
            "
          >
            View all projects →
          </Link>
        </div>

        <p className="mt-6 max-w-2xl leading-7 text-neutral-500">
          These projects represent my current approach to software development:
          building complete applications, understanding the systems behind them,
          and solving problems beyond the interface.
        </p>
      </section>
    </main>
  );
}
