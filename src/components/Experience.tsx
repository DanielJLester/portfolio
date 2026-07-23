import { roles } from '../data/roles'

export default function Experience() {
  const sortedRoles = [...roles].sort((a, b) => a.order - b.order)

  return (
    <section id="experience" className="border-t border-white/10 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Experience</h2>
        <ol className="mt-10 space-y-0">
          {sortedRoles.map((role) => (
            <li
              key={`${role.org}-${role.period}`}
              className="grid grid-cols-[auto_1fr] gap-x-6 border-b border-white/5 py-5 last:border-none sm:grid-cols-[160px_1fr]"
            >
              <span className="text-sm text-neutral-500">{role.period}</span>
              <div>
                <p className="font-medium text-white">{role.name}</p>
                <p className="text-sm text-neutral-400">{role.org}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
