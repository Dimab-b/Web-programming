function Education({ education }) {
  return (
    <section
      id="education"
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="mb-5 flex items-center gap-3 text-xl font-semibold tracking-tight text-slate-900">
        <span className="h-5 w-1.5 rounded-full bg-emerald-500" />
        Education
      </h2>
      <div className="relative border-l-2 border-emerald-200 pl-5">
        <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
        <h3 className="text-base font-semibold text-slate-900">{education.university}</h3>
        <p className="mt-0.5 text-sm text-slate-600">{education.degree}</p>
        <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-slate-400">
          {education.period}
        </p>
      </div>
    </section>
  )
}

export default Education
