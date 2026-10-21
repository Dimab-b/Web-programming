function Skills({ skills }) {
  return (
    <section
      id="skills"
      className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="mb-5 border-b-2 border-slate-200 pb-3 text-2xl font-semibold tracking-tight text-slate-900">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-blue-400"
          >
            <h3 className="mb-2 text-sm font-semibold text-blue-700">{category}</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600 marker:text-blue-500">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
