function Project({ project }) {
  return (
    <article className="py-5 transition-colors first:pt-0 last:pb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-base font-semibold text-slate-900">{project.title}</h3>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-emerald-600 transition-colors hover:text-emerald-700 hover:underline"
        >
          {project.repoName} ↗
        </a>
      </div>
      <p className="mt-1.5 text-sm text-slate-600">
        <span className="font-semibold text-slate-800">Tech Stack:</span> {project.stack}
      </p>
      <p className="mt-1 text-sm text-slate-500">{project.description}</p>
      <ul className="mt-3 grid list-disc gap-x-6 gap-y-1 pl-5 text-sm text-slate-600 marker:text-emerald-500 sm:grid-cols-2">
        {project.achievements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

export default Project
