import { useEffect, useState } from 'react'

const STORAGE_KEY = 'systemInfo'

function collectSystemInfo() {
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    languages: Array.isArray(navigator.languages)
      ? navigator.languages.join(', ')
      : navigator.language,
    online: navigator.onLine,
    cookiesEnabled: navigator.cookieEnabled,
    screen: `${window.screen.width} × ${window.screen.height}`,
    viewport: `${window.innerWidth} × ${window.innerHeight}`,
    pixelRatio: window.devicePixelRatio,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  }
}

function readStoredSystemInfo() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : collectSystemInfo()
  } catch (error) {
    console.error('Cannot read system info:', error)
    return collectSystemInfo()
  }
}

function Footer({ additionalInfo }) {
  const [systemInfo] = useState(readStoredSystemInfo)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(systemInfo))
  }, [systemInfo])

  return (
    <footer className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:p-8">
      <section id="additional">
        <h2 className="mb-5 flex items-center gap-3 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          <span className="h-5 w-1.5 rounded-full bg-emerald-500" />
          Additional Information
        </h2>
        <ul className="grid gap-2 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
          {additionalInfo.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section id="system-info" className="mt-6 border-t border-slate-100 pt-5 dark:border-slate-700">
        <h2 className="mb-4 flex items-center gap-3 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          <span className="h-5 w-1.5 rounded-full bg-emerald-500" />
          System Information
        </h2>
        <dl className="grid gap-x-6 gap-y-1 text-xs sm:grid-cols-2">
          {Object.entries(systemInfo).map(([key, value]) => (
            <div key={key} className="flex gap-2">
              <dt className="shrink-0 font-medium text-slate-500 dark:text-slate-400">{key}:</dt>
              <dd className="break-all text-slate-600 dark:text-slate-300">{String(value)}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="mt-6 border-t border-slate-100 pt-4 text-center text-xs text-slate-400 dark:border-slate-700 dark:text-slate-500">
        &copy; 2026 Dmytro Batih ·{' '}
        <a
          href="https://github.com/Dimab-b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 transition-colors hover:text-emerald-700 hover:underline dark:text-emerald-400 dark:hover:text-emerald-300"
        >
          GitHub
        </a>{' '}
        ·{' '}
        <a
          href="mailto:dimoncikbatig8@gmail.com"
          className="text-emerald-600 transition-colors hover:text-emerald-700 hover:underline dark:text-emerald-400 dark:hover:text-emerald-300"
        >
          Email
        </a>
      </p>
    </footer>
  )
}

export default Footer
