export const metadata = {
  title: 'Services — Shahrdad Mahdavi',
  description: 'Full stack development, AWS/DevOps, API design, performance optimization, and legacy modernization services.',
}

const services = [
  {
    icon: '⚡',
    title: 'Full Stack Web Development',
    desc: 'End-to-end web application development — from database schema and REST API design to polished React frontends. I own the full stack so you get one developer, not a fragmented team.',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: '☁️',
    title: 'AWS Deployment & DevOps',
    desc: 'Production-ready cloud deployments on AWS (EC2, RDS, S3, CloudFront). CI/CD pipelines with GitHub Actions and Docker so your team ships daily, not bi-weekly.',
    tags: ['AWS', 'Docker', 'GitHub Actions', 'CI/CD', 'Linux'],
  },
  {
    icon: '🔐',
    title: 'Authentication & Security',
    desc: 'Secure auth systems built right — JWT with refresh token rotation, OAuth (Google), role-based access control. No shortcuts, no legacy session hacks.',
    tags: ['JWT', 'OAuth', 'Google Sign-In', 'RBAC', 'Node.js'],
  },
  {
    icon: '📊',
    title: 'Performance Optimization',
    desc: 'Diagnose and fix slow systems. Database query rewrites, Redis caching, CDN setup, and code profiling. I've cut load times by 60% and query times from 4s to 200ms.',
    tags: ['Redis', 'PostgreSQL', 'MongoDB', 'AWS CloudFront', 'Profiling'],
  },
  {
    icon: '🔄',
    title: 'Legacy System Modernization',
    desc: 'Migrate legacy PHP, monoliths, or outdated stacks to modern Node.js + React architectures. Clean, maintainable code — not just a lift-and-shift.',
    tags: ['Node.js', 'React', 'AWS', 'PostgreSQL', 'Docker'],
  },
  {
    icon: '🧩',
    title: 'API Design & Integration',
    desc: 'Clean, well-documented REST APIs and GraphQL schemas. Swagger docs included. Integrate third-party services like Stripe, Google, or any external API.',
    tags: ['REST API', 'GraphQL', 'Stripe', 'Swagger', 'Express'],
  },
]

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
      <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
        What I Offer
      </p>
      <h1 className="text-4xl font-extrabold text-white mb-4">Services</h1>
      <p className="text-gray-400 mb-12 max-w-2xl">
        I work best with businesses that need a senior developer who can take full ownership
        — not someone who needs constant direction. Here's what I specialize in.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {services.map((s) => (
          <div key={s.title} className="bg-card border border-border rounded-lg p-6 flex flex-col gap-4">
            <div className="text-3xl">{s.icon}</div>
            <h3 className="text-white font-bold text-lg">{s.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-1">{s.desc}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {s.tags.map((tag) => (
                <span key={tag} className="text-xs bg-border text-blue-200 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Who I work with */}
      <div className="bg-card border border-border rounded-lg p-8 md:p-10">
        <h2 className="text-2xl font-bold text-white mb-4">Who I Work With</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400 leading-relaxed">
          <div>
            <h4 className="text-white font-semibold mb-2">Startups</h4>
            Need to move fast and ship a real product? I'll help you go from idea to production
            without the overhead of a full team.
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Growing Businesses</h4>
            Outgrowing your current stack? I'll help you scale infrastructure and modernize
            systems before they become bottlenecks.
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Agencies</h4>
            Need a senior contractor for a specific project or to augment your team? I work
            well in collaborative environments and integrate fast.
          </div>
        </div>
      </div>
    </div>
  )
}
