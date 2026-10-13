const experience = [
  { date: '2027 · In progress', title: 'Professional Diploma, Data Science & AI', detail: 'SQI College of ICT · Machine learning, statistical modelling, AI systems' },
  { date: '2025', title: 'B.Tech. Biochemistry · Second Class Upper', detail: 'LAUTECH · CGPA 4.09 · Group leader, final-year research project' },
  { date: '6 months', title: 'Industrial Trainee, QA/QC', detail: 'DANA Pharmaceuticals · Manufacturing quality checks and documentation' },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-[#eef1e9]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[.7fr_1.3fr] md:px-10 md:py-24">
        <div><p className="section-kicker">Experience & education</p><h2 className="section-title mt-4">Building a strong<br />foundation.</h2></div>
        <div className="space-y-0">{experience.map((item) => <div className="timeline-row" key={item.title}><span className="timeline-dot"/><p className="timeline-date">{item.date}</p><h3 className="mt-1 text-lg font-medium">{item.title}</h3><p className="mt-1 text-sm text-[#748078]">{item.detail}</p></div>)}</div>
      </div>
    </section>
  )
}
