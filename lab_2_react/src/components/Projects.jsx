import Project from './Project'

function Projects({ projects }) {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </section>
  )
}

export default Projects
