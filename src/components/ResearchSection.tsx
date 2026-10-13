import { Arrow } from './Arrow'

export function ResearchSection() {
  return (
    <section id="research" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="section-kicker">Selected research</p><h2 className="section-title mt-4">Research with a purpose.</h2></div><span className="text-sm text-[#829087]">LAUTECH · Department of Biochemistry</span></div>
      <article className="mt-10 overflow-hidden rounded-[1.75rem] bg-[#17332d] text-white">
        <div className="grid md:grid-cols-[1.15fr_.85fr]">
          <div className="p-7 md:p-12"><span className="rounded-full border border-white/20 px-3 py-1.5 text-[10px] uppercase tracking-[.15em] text-[#c4d2b5]">Final-year research · 2025</span><h3 className="font-display mt-7 max-w-2xl text-3xl font-medium leading-tight tracking-[-.035em] md:text-4xl">Investigating neem leaf extract as a potential bioherbicide</h3><p className="mt-5 max-w-2xl text-sm leading-7 text-white/65">Studied the effects of <em>Azadirachta indica</em> leaf methanol extract on acetolactate synthase, thioesterase, and antioxidant enzymes in two weeds: <em>Euphorbia heterophylla</em> and <em>Chromolaena odorata</em>.</p><a className="mt-8 inline-flex items-center text-sm font-medium text-[#d5e6c5] transition hover:text-white" href="https://doi.org/10.55677/ijlsar/V05I02Y2026-05" target="_blank" rel="noreferrer">Read the publication <Arrow diagonal /></a></div>
          <div className="relative flex min-h-64 flex-col justify-between overflow-hidden bg-[#294b3b] p-7 md:p-10"><div aria-hidden="true" className="absolute -right-16 -top-20 h-72 w-72 rounded-full border border-white/10" /><div aria-hidden="true" className="absolute -right-6 -top-10 h-52 w-52 rounded-full border border-white/10" /><p className="relative text-xs uppercase tracking-[.2em] text-[#c4d2b5]">A collaborative study</p><div className="relative"><p className="font-display text-5xl font-medium">10</p><p className="mt-2 max-w-xs text-sm leading-6 text-white/65">student researchers coordinated from project design to final report</p></div><p className="relative text-xs text-white/45">Plant-derived compounds · Sustainable agriculture</p></div>
        </div>
      </article>
    </section>
  )
}
