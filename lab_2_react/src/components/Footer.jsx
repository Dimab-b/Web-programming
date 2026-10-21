function Footer({ additionalInfo }) {
  return (
    <footer className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <section id="additional">
        <h2 className="mb-5 flex items-center gap-3 text-xl font-semibold tracking-tight text-slate-900">
          <span className="h-5 w-1.5 rounded-full bg-emerald-500" />
          Additional Information
        </h2>
        <ul className="grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
          {additionalInfo.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              {item}
            </li>
          ))}
        </ul>
      </section>
      <p className="mt-6 border-t border-slate-100 pt-4 text-center text-xs text-slate-400">
        &copy; 2026 Dmytro Batih ·{' '}
        <a
          href="https://github.com/Dimab-b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 transition-colors hover:text-emerald-700 hover:underline"
        >
          GitHub
        </a>{' '}
        ·{' '}
        <a
          href="mailto:dimoncikbatig8@gmail.com"
          className="text-emerald-600 transition-colors hover:text-emerald-700 hover:underline"
        >
          Email
        </a>
      </p>
    </footer>
  )
}

export default Footer
