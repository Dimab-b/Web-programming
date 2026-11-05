function Summary({ paragraphs }) {
  return (
    <section
      id="summary"
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:p-8"
    >
      <h2 className="mb-5 flex items-center gap-3 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        <span className="h-5 w-1.5 rounded-full bg-emerald-500" />
        Professional Summary
      </h2>
      <div className="space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </section>
  )
}

export default Summary
