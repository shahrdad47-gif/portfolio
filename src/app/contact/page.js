'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.')
        setStatus('error')
      } else {
        setStatus('sent')
      }
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
      <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
        Get In Touch
      </p>
      <h1 className="text-4xl font-extrabold text-white mb-4">Contact Me</h1>
      <p className="text-gray-400 mb-12 max-w-xl">
        Have a project in mind or want to discuss how I can help? Send me a message and
        I'll get back to you within 24 hours.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Info */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-white font-semibold mb-1">Email</h3>
            <a
              href="mailto:Shahrdad47@gmail.com"
              className="text-accent hover:underline"
            >
              Shahrdad47@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Location</h3>
            <p className="text-gray-400">Yerevan, Armenia — Available Remotely Worldwide</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Availability</h3>
            <p className="text-gray-400">
              Open to freelance projects, remote contracts, and long-term engagements.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Response Time</h3>
            <span className="text-xs bg-green-900/40 text-green-400 border border-green-800 px-3 py-1 rounded">
              Usually within 24 hours
            </span>
          </div>
        </div>

        {/* Form */}
        {status === 'sent' ? (
          <div className="bg-card border border-border rounded-lg p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4 text-green-400">✓</div>
              <h3 className="text-white font-bold text-lg mb-2">Message Sent!</h3>
              <p className="text-gray-400 text-sm">
                Thanks for reaching out. I'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-lg p-8 flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-gray-400 font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-dark border border-border rounded px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-gray-400 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="bg-dark border border-border rounded px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-gray-400 font-medium">Message</label>
              <textarea
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project..."
                className="bg-dark border border-border rounded px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-400">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-accent text-white py-3 rounded font-semibold hover:bg-accent/80 transition-colors mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
