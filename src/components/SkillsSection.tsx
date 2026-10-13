const skills = [
  { title: 'Data & computation', items: 'Python · NumPy · pandas · scikit-learn' },
  { title: 'Laboratory', items: 'Plant compound extraction · Isolation · Herbicidal bioassays · QA/QC' },
  { title: 'Research', items: 'Literature review · Methodology design · Technical reporting' },
]

export function SkillsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
      <p className="section-kicker">Toolkit</p><h2 className="section-title mt-4">Skills I bring to the lab & screen.</h2>
      <div className="mt-9 grid gap-4 md:grid-cols-3">{skills.map((skill) => <article key={skill.title} className="rounded-2xl border border-[#e5e9df] bg-white/70 p-6"><h3 className="text-lg font-medium">{skill.title}</h3><p className="mt-3 text-sm leading-7 text-[#748078]">{skill.items}</p></article>)}</div>
    </section>
  )
}
