import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export function Projects() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-40 pb-28">
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          -z-10
          h-96
          w-96
          -translate-x-1/2
          rounded-full
          bg-green-500/10
          blur-3xl
        "
      />

      {/* Header */}
      <div className="max-w-3xl">
        <p
          className="
            text-sm
            uppercase
            tracking-[0.3em]
            text-green-400
          "
        >
          Projects
        </p>

        <h1
          className="
            mt-5
            text-4xl
            font-bold
            tracking-tight
            text-white
            sm:text-6xl
          "
        >
          Applications I have
          <span className="text-green-400"> built.</span>
        </h1>

        <p
          className="
            mt-6
            text-lg
            leading-relaxed
            text-neutral-400
          "
        >
          A collection of full-stack applications focused on real-world
          problems, clean architecture, and modern web development practices.
        </p>
      </div>

      {/* Projects */}
      <div
        className="
          mt-16
          grid
          gap-10
          lg:grid-cols-2
        "
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
