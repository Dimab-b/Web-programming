function Project({ project }) {
  return (
    <article>
      <h3>{project.title}</h3>
      <p>
        <strong>Tech Stack:</strong> {project.stack}
      </p>
      <p>{project.description}</p>
      <h4>Key achievements</h4>
      <ul>
        {project.achievements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>
        GitHub:{' '}
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          {project.repoName}
        </a>
      </p>
    </article>
  )
}

export default Project
