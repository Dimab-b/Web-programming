function Languages({ languages }) {
  return (
    <section
      id="languages"
      className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="mb-5 border-b-2 border-slate-200 pb-3 text-2xl font-semibold tracking-tight text-slate-900">
        Languages
      </h2>
      <ul className="flex flex-wrap gap-2">
        {languages.map((item) => (
          <li
            key={item}
            className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm text-blue-700"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Languages
