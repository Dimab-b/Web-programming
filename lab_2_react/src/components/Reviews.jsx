import { useEffect, useState } from 'react'

const VARIANT = 4
const REVIEWS_URL = `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`

function Reviews() {
  const [comments, setComments] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    async function loadComments() {
      try {
        setStatus('loading')
        const response = await fetch(REVIEWS_URL)
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }
        const data = await response.json()
        if (!ignore) {
          setComments(data)
          setStatus('success')
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message)
          setStatus('error')
        }
      }
    }

    loadComments()

    return () => {
      ignore = true
    }
  }, [])

  return (
    <section
      id="reviews"
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-700 dark:bg-slate-800"
    >
      <h2 className="mb-5 flex items-center gap-3 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        <span className="h-5 w-1.5 rounded-full bg-emerald-500" />
        Reviews
      </h2>

      {status === 'loading' && (
        <p className="text-sm text-slate-500 dark:text-slate-400">Завантаження відгуків…</p>
      )}

      {status === 'error' && (
        <p className="text-sm text-red-600 dark:text-red-400">
          Не вдалося завантажити відгуки: {error}
        </p>
      )}

      {status === 'success' && comments.length === 0 && (
        <p className="text-sm text-slate-500 dark:text-slate-400">Відгуків поки немає.</p>
      )}

      {status === 'success' && comments.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          {comments.map((comment) => (
            <article
              key={comment.id}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-emerald-300 dark:border-slate-700 dark:bg-slate-900/50 dark:hover:border-emerald-700"
            >
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {comment.name}
              </h3>
              <p className="mt-0.5 break-all text-xs text-emerald-600 dark:text-emerald-400">
                {comment.email}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {comment.body}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Reviews
