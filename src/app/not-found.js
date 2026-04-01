import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">404</p>
        <h1 className="text-5xl font-extrabold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-accent text-white px-8 py-3 rounded font-semibold hover:bg-accent/80 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
