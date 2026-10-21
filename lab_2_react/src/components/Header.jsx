function Header() {
  return (
    <header className="flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900 p-8 text-slate-200 shadow-lg md:flex-row md:items-start md:justify-between">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Dmytro Batih
        </h1>
        <p className="mt-2 font-medium tracking-wide text-blue-300">
          Junior / Trainee .NET Developer
        </p>
      </div>
      <address className="not-italic md:min-w-72">
        <p className="mb-3 text-sm text-slate-300">
          Lviv Region, Ukraine (open to remote and on-site work in Lviv)
        </p>
        <ul className="grid gap-1 text-sm">
          <li>
            Email:{' '}
            <a
              href="mailto:dimoncikbatig8@gmail.com"
              className="text-blue-200 transition-colors hover:text-white hover:underline"
            >
              dimoncikbatig8@gmail.com
            </a>
          </li>
          <li>
            Phone:{' '}
            <a
              href="tel:+380937356829"
              className="text-blue-200 transition-colors hover:text-white hover:underline"
            >
              +380 93 735 6829
            </a>
          </li>
          <li>
            GitHub:{' '}
            <a
              href="https://github.com/Dimab-b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 transition-colors hover:text-white hover:underline"
            >
              github.com/Dimab-b
            </a>
          </li>
          <li>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/dmytro-batih-867963407/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 transition-colors hover:text-white hover:underline"
            >
              linkedin.com/in/dmytro-batih
            </a>
          </li>
        </ul>
      </address>
    </header>
  )
}

export default Header
