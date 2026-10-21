function Languages({ languages }) {
  return (
    <section id="languages" className="mt-6 border-t border-slate-700 pt-5">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
        Languages
      </h2>
      <ul className="space-y-2 text-sm">
        {languages.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-slate-300">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Languages
