function Footer({ additionalInfo }) {
  return (
    <footer>
      <section id="additional">
        <h2>Additional Information</h2>
        <ul>
          {additionalInfo.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <p>
        <small>
          &copy; 2026 Dmytro Batih.{' '}
          <a href="https://github.com/Dimab-b" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{' '}
          | <a href="mailto:dimoncikbatig8@gmail.com">Email</a>
        </small>
      </p>
    </footer>
  )
}

export default Footer
