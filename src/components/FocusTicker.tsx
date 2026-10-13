const focusAreas = ['Bioinformatics', 'Computational biology', 'Data science', 'Plant-derived therapeutics', 'Sustainable agriculture']

export function FocusTicker() {
  return (
    <section aria-label="Research interests" className="focus-ticker overflow-hidden border-y border-[#e5e9df] bg-[#eef1e9] py-5">
      <div className="focus-ticker-track flex w-max items-center whitespace-nowrap">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex items-center gap-8 pr-8">
            {focusAreas.map((area, index) => (
              <li key={area} className="flex items-center gap-8 font-display text-sm font-medium tracking-wide text-[#51665a] md:text-base">
                {area}<span aria-hidden="true" className="text-[#93a979]">{index % 2 === 0 ? '✳' : '·'}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
