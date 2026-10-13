import { Arrow } from './Arrow'

export function HeroSection() {
  return (
    <section id="home" className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-12 md:grid-cols-[1.1fr_.9fr] md:px-10 md:pb-32 md:pt-20">
      <div className="hero-copy relative z-10">
        <div className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[.2em] text-[#6f865f]"><span className="h-px w-8 bg-[#91a87d]" />Research · Data · Biochemistry</div>
        <h1 className="font-display max-w-3xl text-5xl font-medium leading-[1.04] tracking-[-.055em] sm:text-6xl md:text-[5.25rem]">Exploring biology<br />through <span className="hero-gradient-text">data & discovery.</span></h1>
        <p className="mt-7 max-w-xl text-base leading-8 text-[#68756e] md:text-lg">I’m <strong className="font-semibold text-[#17332d]">Adeloye Stephen Oluwatofunmi</strong>, an aspiring bioinformatics researcher connecting biochemistry, computational thinking, and bioinformatics.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-full bg-[#17332d] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#294f42]">Explore my work <Arrow /></a>
          <a href="#contact" className="rounded-full border border-[#d9dfd4] px-6 py-3 text-sm font-medium transition hover:bg-white">Get in touch <Arrow diagonal /></a>
        </div>
        {/* <div className="mt-12 flex items-center gap-3 text-sm text-[#738078]"><span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8fae6d] opacity-40" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#789b55]" />
        </span>
        Based in Oyo State, Nigeria
        </div> */}
      </div>
      <div className="portrait-float relative mx-auto w-full max-w-[470px] md:ml-auto">
        <div aria-hidden="true" className="science-orbit absolute -left-10 top-6 z-10 hidden h-24 w-24 rounded-full border border-dashed border-[#9eae83] sm:block"><span className="orbit-dot absolute -right-1 top-1/2 h-3 w-3 rounded-full bg-[#dc9c64]" /><span className="orbit-dot orbit-dot-delay absolute bottom-0 left-4 h-2.5 w-2.5 rounded-full bg-[#789b55]" /></div>
        <div className="absolute -right-4 -top-5 h-full w-full rounded-[2rem] border border-[#dfe4d9] md:-right-6 md:-top-7" />
        <div className="group relative aspect-[4/4.5] overflow-hidden rounded-[2rem] bg-[#e7e9df]"><img src="/stephen-adeloye.jpg" alt="Portrait of Adeloye Stephen Oluwatofunmi" className="h-full w-full object-cover object-[center_29%] transition-transform duration-700 group-hover:scale-[1.035]" /></div>
        <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[#e7e9df] bg-white px-5 py-4 shadow-[0_12px_40px_rgba(23,51,45,.08)]"><p className="text-[10px] uppercase tracking-[.17em] text-[#809080]">Focus</p><p className="mt-1 text-sm font-medium">Biochemistry × data science</p></div>
        <div aria-hidden="true" className="ambient-glow absolute -right-10 top-10 -z-10 h-32 w-32 rounded-full bg-[#e9eddc] blur-2xl" />
      </div>
    </section>
  )
}
