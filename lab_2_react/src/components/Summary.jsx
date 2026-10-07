function Summary({ paragraphs }) {
  return (
    <section id="summary">
      <h2>Professional Summary</h2>
      {paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </section>
  )
}

export default Summary
