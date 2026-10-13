import { useState } from 'react'
import { Arrow } from './Arrow'

const navigation = [
  ['About', '#about'],
  ['Research', '#research'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
] as const

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
      <a href="#home" onClick={closeMenu} className="font-display text-xl font-semibold tracking-tight">SA<span className="text-[#789b55]">.</span></a>
      <nav aria-label="Main navigation" className="hidden items-center gap-9 text-sm text-[#62716b] md:flex">
        {navigation.map(([label, href]) => <a key={href} className="transition hover:text-[#17332d]" href={href}>{label}</a>)}
      </nav>
      <button type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className="ml-auto mr-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#d9dfd4] text-lg md:hidden">{menuOpen ? '×' : '☰'}</button>
      <a href="mailto:stephenadeloyet@gmail.com" className="rounded-full border border-[#d9dfd4] px-4 py-2 text-xs font-medium transition hover:border-[#789b55] hover:bg-white">Let’s connect <Arrow diagonal /></a>
      {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute left-6 right-6 top-[calc(100%-0.5rem)] flex flex-col gap-1 rounded-2xl border border-[#e5e9df] bg-white p-3 shadow-xl md:hidden">{navigation.map(([label, href]) => <a key={href} href={href} onClick={closeMenu} className="rounded-xl px-4 py-3 text-sm text-[#62716b] hover:bg-[#f7f7f2]">{label}</a>)}</nav>}
    </header>
  )
}
