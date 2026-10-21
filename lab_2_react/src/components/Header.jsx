function Header() {
  return (
    <header>
      <h1 className="text-3xl font-bold tracking-tight text-white">Dmytro Batih</h1>
      <p className="mt-1 text-sm font-medium text-emerald-400">
        Junior / Trainee .NET Developer
      </p>
      <address className="mt-5 not-italic">
        <p className="text-sm leading-relaxed text-slate-400">
          Lviv Region, Ukraine (open to remote and on-site work in Lviv)
        </p>
        <ul className="mt-3 space-y-1.5 text-sm">
          <li className="flex gap-3">
            <span className="w-16 shrink-0 text-xs uppercase tracking-wide text-slate-500">
              Email
            </span>
            <a
              href="mailto:dimoncikbatig8@gmail.com"
              className="break-all text-slate-300 transition-colors hover:text-emerald-400"
            >
              dimoncikbatig8@gmail.com
            </a>
          </li>
          <li className="flex gap-3">
            <span className="w-16 shrink-0 text-xs uppercase tracking-wide text-slate-500">
              Phone
            </span>
            <a
              href="tel:+380937356829"
              className="text-slate-300 transition-colors hover:text-emerald-400"
            >
              +380 93 735 6829
            </a>
          </li>
          <li className="flex gap-3">
            <span className="w-16 shrink-0 text-xs uppercase tracking-wide text-slate-500">
              GitHub
            </span>
            <a
              href="https://github.com/Dimab-b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 transition-colors hover:text-emerald-400"
            >
              Dimab-b
            </a>
          </li>
          <li className="flex gap-3">
            <span className="w-16 shrink-0 text-xs uppercase tracking-wide text-slate-500">
              LinkedIn
            </span>
            <a
              href="https://www.linkedin.com/in/dmytro-batih-867963407/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 transition-colors hover:text-emerald-400"
            >
              dmytro-batih
            </a>
          </li>
        </ul>
      </address>
    </header>
  )
}

export default Header
