function Footer({ additionalInfo }) {
  return (
    <footer className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
      <section id="additional">
        <h2 className="mb-4 border-b-2 border-slate-200 pb-3 text-left text-2xl font-semibold tracking-tight text-slate-900">
          Additional Information
        </h2>
        <ul className="mx-auto max-w-2xl list-disc space-y-1 pl-5 text-left text-sm leading-relaxed text-slate-600 marker:text-blue-500">
          {additionalInfo.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <p className="mt-6 text-xs text-slate-500">
        &copy; 2026 Dmytro Batih.{' '}
        <a
          href="https://github.com/Dimab-b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 hover:underline"
        >
          GitHub
        </a>{' '}
        |{' '}
        <a
          href="mailto:dimoncikbatig8@gmail.com"
          className="text-blue-600 hover:text-blue-700 hover:underline"
        >
          Email
        </a>
      </p>
    </footer>
  )
}

export default Footer
