function Languages({ languages }) {
  return (
    <section id="languages">
      <h2>Languages</h2>
      <ul>
        {languages.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default Languages
