function Education({ education }) {
  return (
    <section id="education">
      <h2>Education</h2>
      <article>
        <h3>{education.university}</h3>
        <p>{education.degree}</p>
        <p>{education.period}</p>
      </article>
    </section>
  )
}

export default Education
