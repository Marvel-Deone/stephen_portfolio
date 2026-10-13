import { Arrow } from './Arrow'

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-[#17332d] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-10 md:py-20">
        <div><p className="text-xs uppercase tracking-[.2em] text-[#b5c7a6]">Contact</p><h2 className="font-display mt-4 text-4xl font-medium tracking-[-.04em] md:text-5xl">Let’s explore what’s possible.</h2><p className="mt-4 text-sm text-white/60">Open to research collaborations and opportunities.</p></div>
        <div className="flex flex-col items-start gap-3 text-sm"><a className="text-[#d5e6c5] hover:text-white" href="mailto:stephenadeloyet@gmail.com">stephenadeloyet@gmail.com <Arrow diagonal /></a><a className="text-[#d5e6c5] hover:text-white" href="https://www.linkedin.com/in/adeloye-stephen-tofunmi" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow diagonal /></a><a className="text-white/60 hover:text-white" href="tel:+2348082775019">+234 808 277 5019</a><a className="text-white/60 hover:text-white" href="tel:+2349068907933">+234 906 890 7933</a><p className="text-white/50">Oyo State, Nigeria</p></div>
      </div>
      <div className="mx-auto flex max-w-7xl justify-between border-t border-white/10 px-6 py-5 text-xs text-white/40 md:px-10"><span>© {new Date().getFullYear()} Adeloye Stephen Oluwatofunmi</span><a href="#home" className="hover:text-white">Back to top ↑</a></div>
    </footer>
  )
}
