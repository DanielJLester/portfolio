import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center">
      <h1 className="text-3xl font-semibold text-white">Page not found</h1>
      <p className="mt-3 text-neutral-400">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-light"
      >
        Back home
      </Link>
    </div>
  )
}
