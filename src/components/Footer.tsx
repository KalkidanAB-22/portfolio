export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Kalkidan Abebe. Built with React.
        </p>

        <div className="flex gap-5 text-sm">
          <a
            href="https://github.com/KalkidanAB-22"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 transition hover:text-green-600"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 transition hover:text-green-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
