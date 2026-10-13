import { Arrow } from './Arrow'

export type ProjectCardProps = {
  eyebrow: string
  title: string
  subtitle?: string
  description: string
  technologies: string[]
  highlights: string[]
  href?: string
  actionLabel?: string
  videoSrc?: string
  note?: string
}

export function ProjectCard({
  eyebrow,
  title,
  subtitle,
  description,
  technologies,
  highlights,
  href,
  actionLabel,
  videoSrc,
  note,
}: ProjectCardProps) {
  return (
    <article className="project-card flex h-full flex-col rounded-[1.5rem] border border-[#dfe5da] bg-[#fbfcf8] p-6 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <span className="text-[10px] font-semibold uppercase tracking-[.17em] text-[#718b5c]">{eyebrow}</span>
        {href && <span className="rounded-full bg-[#eaf0e3] px-3 py-1 text-[10px] font-medium text-[#607a4c]">Live</span>}
      </div>

      {videoSrc && (
        <figure className="mt-6 overflow-hidden rounded-2xl border border-[#e2e7dc] bg-[#17332d]">
          <video controls preload="metadata" playsInline aria-label={`Video walkthrough: ${title}`} className="aspect-video w-full">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support embedded video. You can open the project site to view the walkthrough.
          </video>
          <figcaption className="px-4 py-2.5 text-xs text-white/75">Project walkthrough</figcaption>
        </figure>
      )}

      <div className="mt-5">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-[#17332d]">{title}</h3>
        {subtitle && <p className="mt-1 text-sm font-medium text-[#718b5c]">{subtitle}</p>}
        <p className="mt-3 text-sm leading-7 text-[#718078]">{description}</p>
      </div>

      <ul className="mt-5 space-y-2.5">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2.5 text-sm leading-6 text-[#56675d]">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#89a76b]" />
            {highlight}
          </li>
        ))}
      </ul>

      {note && <p className="mt-4 border-l-2 border-[#d9a575] pl-3 text-xs leading-5 text-[#778178]">{note}</p>}

      <div className="mt-auto pt-6">
        <ul aria-label="Technologies" className="flex flex-wrap gap-2">
          {technologies.map((technology) => <li key={technology} className="rounded-full border border-[#e2e7dc] px-3 py-1.5 text-[10px] text-[#65746a]">{technology}</li>)}
        </ul>
        {href && actionLabel && <a className="mt-6 inline-flex items-center text-sm font-semibold text-[#557344] hover:text-[#17332d]" href={href} target="_blank" rel="noreferrer">{actionLabel}<Arrow diagonal /></a>}
      </div>
    </article>
  )
}
