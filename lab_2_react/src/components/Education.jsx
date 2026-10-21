function Education({ education }) {
  return (
    <section
      id="education"
      className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="mb-5 border-b-2 border-slate-200 pb-3 text-2xl font-semibold tracking-tight text-slate-900">
        Education
      </h2>
      <article className="rounded-r-xl border border-slate-200 border-l-4 border-l-blue-600 bg-slate-50 p-5">
        <h3 className="text-lg font-semibold text-slate-900">{education.university}</h3>
        <p className="mt-1 text-sm text-slate-600">{education.degree}</p>
        <p className="mt-1 text-sm text-slate-500">{education.period}</p>
      </article>
    </section>
  )
}

export default Education
