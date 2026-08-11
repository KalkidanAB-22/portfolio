export function About() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 pt-40 pb-28">
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
          About Me
        </p>

        <h1
          className="
            mt-5
            text-4xl
            font-bold
            tracking-tight
            sm:text-6xl
          "
        >
          Building software
          <span className="text-green-400"> from idea to reality.</span>
        </h1>

        <p
          className="
            mt-6
            text-lg
            leading-relaxed
            text-neutral-400
          "
        >
          I'm Kalkidan Abebe, a Computer Science student focused on building
          modern full-stack web applications. I enjoy turning ideas into
          practical software products with clean interfaces and reliable backend
          systems.
        </p>
      </div>

      {/* Story */}

      <div
        className="
          mt-14
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
          leading-relaxed
          text-neutral-300
          backdrop-blur-xl
          sm:p-10
        "
      >
        <p>
          My journey in software development started with learning programming
          fundamentals and gradually moving toward building complete
          applications that solve real problems. Through my projects, I have
          focused on understanding how different parts of software connect
          together.
        </p>

        <p className="mt-6">
          I build frontend experiences using React and TypeScript, design APIs
          with FastAPI and Node.js, and work with relational databases such as
          PostgreSQL. I enjoy the challenge of connecting user interfaces,
          backend logic, and data into a complete product.
        </p>

        <p className="mt-6">
          My current focus is improving as a software engineer by building
          production-style applications, learning better architecture patterns,
          and writing software that is maintainable and easy to use.
        </p>
      </div>

      {/* Skills */}

      <div className="mt-16">
        <h2
          className="
            text-2xl
            font-semibold
          "
        >
          Technologies I Work With
        </h2>

        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-3
          "
        >
          {[
            "React",
            "TypeScript",
            "Tailwind CSS",
            "FastAPI",
            "Node.js",
            "Express",
            "PostgreSQL",
            "SQLAlchemy",
            "Git",
            "REST APIs",
          ].map((skill) => (
            <span
              key={skill}
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
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Current Goal */}

      <div
        className="
          mt-16
          rounded-3xl
          border
          border-green-400/20
          bg-green-400/5
          p-8
        "
      >
        <h2
          className="
            text-xl
            font-semibold
          "
        >
          Currently
        </h2>

        <p
          className="
            mt-3
            text-neutral-300
          "
        >
          Looking for software engineering internship opportunities where I can
          contribute, learn from experienced developers, and continue building
          impactful products.
        </p>
      </div>
    </section>
  );
}
