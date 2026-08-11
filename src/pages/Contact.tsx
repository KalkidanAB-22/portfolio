import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("sending");

    const form = e.currentTarget;

    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xnpadonp", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("sent");

        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative mx-auto max-w-5xl px-6 pt-40 pb-28">
      {/* Glow */}

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

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left side */}

        <div>
          <p
            className="
            text-sm
            uppercase
            tracking-[0.3em]
            text-green-400
          "
          >
            Contact
          </p>

          <h1
            className="
            mt-5
            text-4xl
            font-bold
            tracking-tight
            sm:text-5xl
          "
          >
            Let's build something
            <span className="text-green-400"> useful.</span>
          </h1>

          <p
            className="
            mt-6
            max-w-md
            leading-relaxed
            text-neutral-400
          "
          >
            I'm open to software engineering internships, collaboration
            opportunities, and interesting projects involving modern web
            technologies.
          </p>

          <div className="mt-10 space-y-4">
            <div
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
            "
            >
              <p className="text-sm text-neutral-500">Email</p>

              <p className="mt-1 text-white">kalkidanabebe429@gmail.com</p>
            </div>

            <div
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
            "
            >
              <p className="text-sm text-neutral-500">
                Currently interested in
              </p>

              <p className="mt-1 text-white">
                Software Engineering Internships
              </p>
            </div>
          </div>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
            shadow-2xl
          "
        >
          <div className="space-y-5">
            <div>
              <label
                className="
                mb-2
                block
                text-sm
                text-neutral-300
              "
              >
                Name
              </label>

              <input
                name="name"
                required
                placeholder="John Doe"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-black/30
                  px-4
                  py-3
                  text-white
                  outline-none
                  placeholder:text-neutral-600
                  focus:border-green-400
                "
              />
            </div>

            <div>
              <label
                className="
                mb-2
                block
                text-sm
                text-neutral-300
              "
              >
                Email
              </label>

              <input
                name="email"
                type="email"
                required
                placeholder="john@company.com"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-black/30
                  px-4
                  py-3
                  text-white
                  outline-none
                  placeholder:text-neutral-600
                  focus:border-green-400
                "
              />
            </div>

            <div>
              <label
                className="
                mb-2
                block
                text-sm
                text-neutral-300
              "
              >
                Message
              </label>

              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project, opportunity, or idea..."
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-white/10
                  bg-black/30
                  px-4
                  py-3
                  text-white
                  outline-none
                  placeholder:text-neutral-600
                  focus:border-green-400
                "
              />
            </div>

            <button
              disabled={status === "sending"}
              className="
                w-full
                rounded-xl
                bg-green-500
                px-6
                py-3
                font-semibold
                text-black
                transition
                hover:bg-green-400
                disabled:opacity-50
              "
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-green-400">
                Message sent successfully. Thanks for reaching out!
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
