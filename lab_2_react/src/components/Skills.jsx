function Skills({ skills }) {
  return (
    <section id="skills" className="mt-6 border-t border-slate-700 pt-5">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
        Technical Skills
      </h2>
      <div className="space-y-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="mb-1.5 text-xs font-semibold text-emerald-400">{category}</h3>
            <ul className="flex flex-wrap gap-1.5">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-slate-800 px-2 py-0.5 text-xs text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
