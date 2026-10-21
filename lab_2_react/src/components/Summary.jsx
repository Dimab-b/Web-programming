function Summary({ paragraphs }) {
  return (
    <section
      id="summary"
      className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="mb-5 border-b-2 border-slate-200 pb-3 text-2xl font-semibold tracking-tight text-slate-900">
        Professional Summary
      </h2>
      <div className="space-y-3 leading-relaxed text-slate-600">
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </section>
  )
}

export default Summary
