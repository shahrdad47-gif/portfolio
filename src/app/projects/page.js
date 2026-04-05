export const metadata = {
  title: 'Projects — Shahrdad Mahdavi',
  description: 'Portfolio of full-stack projects: YouTube clone, B2B SaaS, fintech APIs, and more.',
}

const projects = [
  {
    name: 'NexShop — Full-Stack E-Commerce Store',
    date: '2026',
    desc: 'Premium tech e-commerce store built with Next.js 16, Neon Postgres, Drizzle ORM, and Stripe. Features 26 curated products across 6 categories, cart with cookie persistence, Stripe Checkout, webhook-driven order fulfilment, and an admin dashboard. Deployed to Vercel.',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Drizzle ORM', 'Neon Postgres', 'Stripe', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/shahrdad1/nexshop',
    demo: 'https://nexshop-eta.vercel.app',
    highlight: true,
  },
  {
    name: 'CineVault — Movie Discovery App',
    date: '2025',
    desc: 'Full-stack movie discovery platform built with Next.js 14. Features a hero slider, movie cards with live TMDB data, user authentication (NextAuth.js + JWT), watchlist, and a 1–10 star rating system. Backed by Prisma + SQLite with full REST API.',
    tags: ['Next.js', 'React', 'Prisma', 'NextAuth.js', 'SQLite', 'Tailwind CSS', 'TMDB API'],
    github: 'https://github.com/shahrdad1/cinevault',
    demo: 'https://cinevault-zeta.vercel.app',
    highlight: true,
  },
  {
    name: 'Booking & Scheduling Platform',
    date: '2025',
    desc: 'Custom booking system for a local services business. Integrated Stripe payments, real-time availability, and admin dashboard. Reduced manual admin work by 70%.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    github: null,
    demo: null,
  },
  {
    name: 'B2B SaaS Dashboard',
    date: '2022 – 2024',
    desc: 'Core architecture redesign of a B2B SaaS platform. Scaled from 10k to 80k active users with zero downtime. Redis caching reduced load time by 60%, recovering $15k/month.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    github: null,
    demo: null,
  },
  {
    name: 'Fintech REST API',
    date: '2020 – 2022',
    desc: 'REST APIs powering a fintech dashboard for 20k+ daily users. 99.9% uptime. Rewrote MongoDB pipelines from 4s to under 200ms through query optimization and indexing.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Redis', 'AWS EC2'],
    github: null,
    demo: null,
  },
  {
    name: 'React Component Library',
    date: '2020 – 2022',
    desc: 'Reusable React component library adopted across 4 internal products at ParsOnline. Reduced frontend development time by ~30% per new feature.',
    tags: ['React', 'TypeScript', 'Storybook', 'Jest'],
    github: null,
    demo: null,
  },
]

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
      <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
        Portfolio
      </p>
      <h1 className="text-4xl font-extrabold text-white mb-4">Projects</h1>
      <p className="text-gray-400 mb-12 max-w-2xl">
        A selection of projects I've built and shipped — ranging from freelance client work
        to internal products serving tens of thousands of users.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.name}
            className={`bg-card border rounded-lg p-6 flex flex-col gap-4 ${
              p.highlight ? 'border-accent' : 'border-border'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-white font-bold text-lg">{p.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{p.date}</p>
              </div>
              {p.highlight && (
                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded shrink-0">
                  Featured
                </span>
              )}
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>

            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span key={tag} className="text-xs bg-border text-blue-200 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto pt-2">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  GitHub →
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-white transition-colors flex items-center gap-1"
                >
                  Live Demo →
                </a>
              )}
              {!p.github && !p.demo && (
                <span className="text-xs text-gray-600">Client project — NDA</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
