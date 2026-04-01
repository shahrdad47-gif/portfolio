export const metadata = {
  title: 'About — Shahrdad Mahdavi',
  description: 'Senior Full Stack Developer with 6+ years building production web apps in e-commerce, fintech, and SaaS.',
}

const experience = [
  {
    role: 'Freelance Full Stack Developer',
    company: 'Self-employed',
    date: 'Jan 2025 – Present',
    bullets: [
      'Delivered full-stack web applications for clients across e-commerce, real estate, and service industries using React, Node.js, and PostgreSQL.',
      'Built a custom booking and scheduling platform integrating Stripe payments, reducing client manual admin work by 70%.',
      'Contracted by a digital agency to migrate a legacy PHP CMS to a modern Node.js + React stack, cutting page load time in half.',
      'Handled end-to-end ownership — requirements, architecture, development, AWS deployment, and post-launch support.',
    ],
  },
  {
    role: 'Senior Full Stack Developer',
    company: 'Etiya',
    date: 'Aug 2022 – Dec 2024',
    bullets: [
      'Spearheaded the redesign of a B2B SaaS platform (React, Node.js, PostgreSQL), scaling from 10k to 80k active users with no downtime.',
      'Owned the full feature lifecycle across a team of 6 — sprint planning, code reviews, and technical interviews.',
      'Rearchitected the payment flow with Redis-based session caching, cutting load time by 60% and recovering ~$15k/month in lost conversions.',
      'Standardised CI/CD using GitHub Actions and Docker Compose, shrinking release cycles from bi-weekly to daily.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'ParsOnline',
    date: 'Jul 2020 – Jun 2022',
    bullets: [
      'Built and maintained REST APIs powering a fintech dashboard used by 20k+ users daily with 99.9% uptime.',
      'Engineered a reusable React component library adopted across 4 internal products, cutting frontend dev time by ~30%.',
      'Rewrote MongoDB aggregation pipelines bringing query time from 4s down to under 200ms.',
      'Migrated a monolith to AWS (EC2, RDS, S3, CloudFront), improving scalability and reducing infrastructure costs by 25%.',
    ],
  },
  {
    role: 'Junior Full Stack Developer',
    company: 'Bamilo',
    date: 'Jun 2019 – Jun 2020',
    bullets: [
      'Built product listing, cart, and order history pages in React for an e-commerce platform serving 5k+ daily users.',
      'Implemented JWT authentication with refresh token rotation and role-based access control.',
      'Pushed test coverage from 40% to 85% using Jest and React Testing Library.',
      'Documented all API endpoints in Swagger, reducing integration bugs between frontend and backend teams by half.',
    ],
  },
]

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
      <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
        About Me
      </p>
      <h1 className="text-4xl font-extrabold text-white mb-6">My Story</h1>
      <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-16">
        Self-taught Full Stack Developer who started coding at 19 out of pure passion — and
        never stopped. Over 6+ years I've worked across the full stack from day one: designing
        REST APIs and database schemas, building responsive React interfaces, and deploying
        production systems on AWS. I've led features end-to-end, improved performance at
        scale, and mentored junior developers along the way.
      </p>

      <h2 className="text-2xl font-bold text-white mb-8">Work Experience</h2>
      <div className="flex flex-col gap-10">
        {experience.map((job) => (
          <div key={job.role} className="bg-card border border-border rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-bold text-white">{job.role}</h3>
                <p className="text-accent font-semibold text-sm">{job.company}</p>
              </div>
              <span className="text-xs text-gray-500 bg-border px-3 py-1 rounded self-start md:self-auto">
                {job.date}
              </span>
            </div>
            <ul className="list-disc list-inside space-y-2">
              {job.bullets.map((b, i) => (
                <li key={i} className="text-gray-400 text-sm leading-relaxed">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
