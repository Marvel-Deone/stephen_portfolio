const interests = ['Bioinformatics', 'Computational biology', 'Plant-derived therapeutics', 'Sustainable agriculture']

export function AboutSection() {
  return (
    <section id="about" className="border-y border-[#e5e9df] bg-white/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[.7fr_1.3fr] md:px-10 md:py-20">
        <div><p className="section-kicker">About</p><h2 className="section-title mt-4">Curious by nature.<br /><span className="text-[#789b55]">Research-led by design.</span></h2></div>
        <div className="max-w-2xl"><p className="text-base leading-8 text-[#68756e]">With a B.Tech. in Biochemistry from LAUTECH, I’m interested in how biological systems can inform practical, sustainable solutions. My work so far has brought together hands-on laboratory research, team leadership, and growing skills in data science and machine learning.</p><div className="mt-7 flex flex-wrap gap-2">{interests.map((item, index) => <span key={item} style={{ transitionDelay: `${index * 45}ms` }} className="interest-chip rounded-full border border-[#e0e6dc] bg-white px-4 py-2 text-xs text-[#596c5f]">{item}</span>)}</div></div>
      </div>
    </section>
  )
}
