import { useEffect, useRef, useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbggwzeb'
const MODAL_DELAY = 60000

const fieldClasses =
  'rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-emerald-900'

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false)
  const dismissedRef = useRef(false)

  const closeModal = () => {
    dismissedRef.current = true
    setIsOpen(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissedRef.current) {
        setIsOpen(true)
      }
    }, MODAL_DELAY)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        dismissedRef.current = true
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={closeModal}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-700 dark:bg-slate-800 sm:p-7"
      >
        <button
          type="button"
          onClick={closeModal}
          aria-label="Закрити"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg text-2xl leading-none text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-700 dark:hover:text-slate-200"
        >
          &times;
        </button>
        <h2 id="contact-title" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          Зворотний зв'язок
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Залиште повідомлення — і я зв'яжуся з вами.
        </p>
        <form action={FORMSPREE_ENDPOINT} method="POST" className="mt-4 grid gap-3">
          <input type="hidden" name="_subject" value="Contact form from CV" />

          <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
            Ім'я
            <input name="name" type="text" placeholder="Ваше ім'я" required className={fieldClasses} />
          </label>

          <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
            Email
            <input name="email" type="email" placeholder="you@example.com" required className={fieldClasses} />
          </label>

          <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
            Номер телефону
            <input name="phone" type="tel" placeholder="+380 00 000 00 00" required className={fieldClasses} />
          </label>

          <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
            Повідомлення
            <textarea
              name="message"
              rows="4"
              placeholder="Ваше повідомлення"
              required
              className={`${fieldClasses} resize-y`}
            />
          </label>

          <button
            type="submit"
            className="mt-1 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Надіслати
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
