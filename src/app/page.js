import Link from 'next/link'

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '80k', label: 'Users Scaled To' },
  { value: '60%', label: 'Load Time Reduced' },
  { value: '15k', label: 'Monthly Revenue Recovered' },
]

const skills = [
  { group: 'Frontend', tags: ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS'] },
  { group: 'Backend', tags: ['Node.js', 'Express', 'Python', 'REST API', 'GraphQL'] },
  { group: 'Database', tags: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
  { group: 'DevOps', tags: ['AWS', 'Docker', 'GitHub Actions', 'CI/CD', 'Linux'] },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Available for freelance & remote work
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Shahrdad<br />
            <span className="text-accent">Mahdavi</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium mb-4">
            Senior Full Stack Developer
          </p>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed mb-10">
            Senior Full Stack Developer with 6+ years of experience building and scaling
            production web applications for businesses across e-commerce, fintech, and SaaS.
            I architect and deliver complete solutions — REST APIs, database design, React
            frontends, and AWS deployments — so you get one experienced developer who owns
            the entire project.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="bg-accent text-white px-8 py-3 rounded font-semibold hover:bg-accent/80 transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="border border-border text-gray-300 px-8 py-3 rounded font-semibold hover:border-accent hover:text-white transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-extrabold text-accent mb-1">{s.value}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
          Tech Stack
        </p>
        <h2 className="text-3xl font-bold text-white mb-12">Core Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s) => (
            <div key={s.group} className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                {s.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-border text-blue-200 px-3 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to build something great?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Whether you need a full product built from scratch, a legacy system modernized,
            or a critical performance issue fixed — I'm here to help.
          </p>
          <Link
            href="/contact"
            className="bg-accent text-white px-10 py-3 rounded font-semibold hover:bg-accent/80 transition-colors"
          >
            Let's Work Together
          </Link>
        </div>
      </section>
    </>
  )
}
