import Project from './Project'

function Projects({ projects }) {
  return (
    <section
      id="projects"
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="mb-2 flex items-center gap-3 text-xl font-semibold tracking-tight text-slate-900">
        <span className="h-5 w-1.5 rounded-full bg-emerald-500" />
        Projects
      </h2>
      <div className="divide-y divide-slate-100">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
