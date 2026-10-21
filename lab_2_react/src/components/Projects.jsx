import Project from './Project'

function Projects({ projects }) {
  return (
    <section
      id="projects"
      className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="mb-5 border-b-2 border-slate-200 pb-3 text-2xl font-semibold tracking-tight text-slate-900">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
