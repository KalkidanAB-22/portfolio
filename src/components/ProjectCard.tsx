import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || project.images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setActiveImage((current) =>
        current === project.images.length - 1 ? 0 : current + 1,
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <article
        className="
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-green-400/20
          hover:bg-white/[0.05]
          hover:shadow-2xl
        "
      >
        {/* Screenshot Preview */}
        <div className="relative overflow-hidden bg-neutral-950">
          <div className="relative flex min-h-[240px] items-center justify-center sm:min-h-[300px]">
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
                    index === activeImage
                      ? "scale-100 opacity-100"
                      : "scale-[0.98] opacity-0"
                  }
                `}
              />
            ))}
          </div>

          {/* Bottom gradient */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/60
              via-transparent
              to-transparent
            "
          />

          {/* Preview badge */}
          <div
            className="
              absolute
              left-5
              top-5
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
            {isHovered ? "Preview" : "View project"}
          </div>

          {/* Open project button */}
          <div
            className="
              absolute
              right-5
              top-5
              flex
              h-10
              w-10
              translate-y-2
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/50
              text-white
              opacity-0
              backdrop-blur-md
              transition-all
              duration-300
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            ↗
          </div>

          {/* Image indicators */}
          {project.images.length > 1 && (
            <div
              className="
                absolute
                bottom-5
                left-5
                right-5
                flex
                items-center
                gap-1.5
              "
            >
              {project.images.map((_, index) => (
                <div
                  key={index}
                  className={`
                    h-1
                    rounded-full
                    transition-all
                    duration-500
                    ${
                      index === activeImage
                        ? "w-8 bg-green-400"
                        : "w-2 bg-white/30"
                    }
                  `}
                />
              ))}
            </div>
          )}
        </div>

        {/* Project information */}
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-green-400">
                Featured Project
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                {project.title}
              </h3>
            </div>

            <span
              className="
                mt-1
                text-xl
                text-neutral-600
                transition
                duration-300
                group-hover:translate-x-1
                group-hover:text-green-400
              "
            >
              →
            </span>
          </div>

          <p className="mt-4 leading-relaxed text-neutral-400">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-3
                  py-1.5
                  text-xs
                  text-neutral-400
                "
              >
                {tech}
              </span>
            ))}

            {project.stack.length > 5 && (
              <span
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-3
                  py-1.5
                  text-xs
                  text-neutral-500
                "
              >
                +{project.stack.length - 5}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
