import { useEffect, useState } from 'react'
import { MenuIcon } from './icons.jsx'

const LINKS = ['Home', 'About', 'Projects', 'Team', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-[clamp(16px,3.4vw,40px)] flex items-center justify-between min-h-[72px]">
        
        {/* Brand Image Logo & Name */}
        <a className="inline-flex items-center gap-3 text-[16px] font-semibold tracking-wide text-white" href="#top">
          {/* Replace src with your neural nexus logo image path */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[2px] flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <img 
              src="/logo.png" 
              alt="Neural Nexus Logo" 
              className="w-full h-full object-cover rounded-full bg-[#050a07]"
              onError={(e) => {
                // Fallback styling display text if image is missing
                e.target.style.display = 'none'
              }}
            />
            <span className="text-xs font-bold text-white absolute">NN</span>
          </div>
          <span className="bg-gradient-to-r from-white via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
            Neural Nexus
          </span>
        </a>

        {/* Desktop Navigation Rail */}
        <nav className="hidden lg:flex items-center gap-1 mx-auto p-1.5 rounded-full bg-[rgba(14,20,16,0.65)] border border-white/10 backdrop-blur-xl" aria-label="Primary">
          {LINKS.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-300 ${
                active === label ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setActive(label)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop Action */}
        <div className="hidden lg:flex items-center gap-4">
          <a className="text-[13.5px] text-white/70 hover:text-white transition-colors" href="#contact">
            Client Portal
          </a>
          <a className="px-5 py-2.5 rounded-full text-[13.5px] font-medium bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all" href="#projects">
            Explore Core
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden inline-flex p-2 text-white cursor-pointer"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {/* Mobile Sheet */}
      {open && (
        <div className="lg:hidden flex flex-col mx-4 px-6 pt-4 pb-6 rounded-2xl bg-[rgba(10,16,12,0.96)] border border-white/15 backdrop-blur-2xl shadow-2xl">
          {LINKS.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
              className={`py-3 text-[16px] border-b border-white/10 transition-colors ${
                active === label ? 'text-cyan-400 font-semibold' : 'text-white/80'
              }`}
              onClick={() => {
                setActive(label)
                setOpen(false)
              }}
            >
              {label}
            </a>
          ))}
          <a className="mt-5 py-3 text-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium shadow-lg" href="#projects" onClick={() => setOpen(false)}>
            Explore Core
          </a>
        </div>
      )}
    </header>
  )
}