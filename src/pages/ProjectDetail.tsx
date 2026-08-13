import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { projects } from "../data/projects";

export function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  const [activeImage, setActiveImage] = useState(0);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-36 pb-28 sm:pt-40">
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

      {/* Back button */}
      <Link
        to="/projects"
        className="
          inline-flex
          items-center
          text-sm
          text-neutral-400
          transition
          hover:text-green-400
        "
      >
        ← Back to projects
      </Link>

      {/* Header */}
      <div className="mt-10 max-w-4xl">
        <p
          className="
            text-sm
            font-medium
            uppercase
            tracking-[0.3em]
            text-green-400
          "
        >
          Case Study
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
          {project.title}
        </h1>

        <p
          className="
            mt-6
            max-w-3xl
            text-lg
            leading-relaxed
            text-neutral-400
            sm:text-xl
          "
        >
          {project.description}
        </p>
      </div>

      {/* Interactive Screenshot Gallery */}
      <div className="mt-14">
        {/* Main screenshot */}
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-neutral-950
            shadow-2xl
          "
        >
          <div className="flex min-h-[280px] items-center justify-center sm:min-h-[500px]">
            <img
              src={project.images[activeImage]}
              alt={`${project.title} screenshot ${activeImage + 1}`}
              className="
                block
                max-h-[700px]
                w-full
                object-contain
                p-3
                transition-opacity
                duration-300
                sm:p-5
              "
            />
          </div>

          {/* Image counter */}
          <div
            className="
              absolute
              bottom-5
              right-5
              rounded-full
              border
              border-white/10
              bg-black/60
              px-3
              py-1.5
              text-xs
              text-white
              backdrop-blur-md
            "
          >
            {activeImage + 1} / {project.images.length}
          </div>
        </div>

        {/* Thumbnail gallery */}
        {project.images.length > 1 && (
          <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
            {project.images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`View screenshot ${index + 1}`}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  bg-neutral-950
                  transition-all
                  duration-300
                  ${
                    index === activeImage
                      ? "border-green-400 ring-2 ring-green-400/20"
                      : "border-white/10 hover:border-white/30"
                  }
                `}
              >
                <img
                  src={image}
                  alt={`${project.title} thumbnail ${index + 1}`}
                  className={`
                    aspect-video
                    w-full
                    object-contain
                    bg-neutral-950
                    transition
                    duration-300
                    ${
                      index === activeImage
                        ? "opacity-100"
                        : "opacity-50 group-hover:scale-105 group-hover:opacity-100"
                    }
                  `}
                />

                <div
                  className={`
                    pointer-events-none
                    absolute
                    inset-0
                    transition
                    ${index === activeImage ? "bg-green-400/5" : "bg-black/10"}
                  `}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Technologies */}
      <div className="mt-12">
        <p
          className="
            text-sm
            font-medium
            uppercase
            tracking-[0.25em]
            text-green-400
          "
        >
          Technologies
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-sm
                text-neutral-300
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Overview */}
      <div
        className="
          mt-16
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-7
          backdrop-blur-xl
          sm:p-10
        "
      >
        <p
          className="
            text-sm
            font-medium
            uppercase
            tracking-[0.25em]
            text-green-400
          "
        >
          Overview
        </p>

        <p
          className="
            mt-5
            max-w-4xl
            text-base
            leading-8
            text-neutral-300
            sm:text-lg
          "
        >
          {project.longDescription}
        </p>
      </div>

      {/* Features */}
      <div className="mt-20">
        <p
          className="
            text-sm
            font-medium
            uppercase
            tracking-[0.25em]
            text-green-400
          "
        >
          Capabilities
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
          Key Features
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-5
                transition
                duration-300
                hover:-translate-y-1
                hover:border-green-400/20
                hover:bg-white/[0.07]
              "
            >
              <div className="flex items-start gap-3">
                <span
                  className="
                    mt-0.5
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-green-400/10
                    text-xs
                    text-green-400
                  "
                >
                  ✓
                </span>

                <span className="text-sm leading-relaxed text-neutral-300">
                  {feature}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Decisions */}
      <div className="mt-20">
        <p
          className="
            text-sm
            font-medium
            uppercase
            tracking-[0.25em]
            text-green-400
          "
        >
          Engineering
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
          Technical Decisions
        </h2>

        <div className="mt-8 space-y-4">
          {project.decisions.map((decision, index) => (
            <div
              key={decision}
              className="
                flex
                gap-5
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-5
              "
            >
              <span className="text-sm font-semibold text-green-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="leading-relaxed text-neutral-300">{decision}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges */}
      <div
        className="
          mt-20
          rounded-3xl
          border
          border-green-400/10
          bg-green-400/[0.03]
          p-7
          sm:p-10
        "
      >
        <p
          className="
            text-sm
            font-medium
            uppercase
            tracking-[0.25em]
            text-green-400
          "
        >
          Problem Solving
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
          Challenges
        </h2>

        <p className="mt-5 max-w-4xl leading-8 text-neutral-400">
          {project.challenges}
        </p>
      </div>

      {/* Project Links */}
      <div className="mt-14 flex flex-wrap gap-4">
        {/* Live Demo */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="
              rounded-xl
              bg-green-500
              px-6
              py-3
              font-semibold
              text-black
              transition
              hover:bg-green-400
              active:scale-95
            "
          >
            Live Demo ↗
          </a>
        )}

        {/* GitHub */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="
            rounded-xl
            border
            border-white/15
            bg-white/5
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:border-white/30
            hover:bg-white/10
            active:scale-95
          "
        >
          View Source Code ↗
        </a>
      </div>
    </section>
  );
}
