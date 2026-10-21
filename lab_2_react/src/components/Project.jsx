function Project({ project }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-slate-50 p-5 transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
      <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-600">
        <span className="font-semibold text-slate-800">Tech Stack:</span> {project.stack}
      </p>
      <p className="mt-2 text-sm text-slate-600">{project.description}</p>
      <h4 className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
        Key achievements
      </h4>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 marker:text-blue-500">
        {project.achievements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-4 text-sm">
        GitHub:{' '}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 hover:text-blue-700 hover:underline"
        >
          {project.repoName}
        </a>
      </p>
    </article>
  )
}

export default Project
