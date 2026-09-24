import { useEffect, useState } from 'react'
import { MenuIcon } from './icons.jsx'

const LINKS = ['Home', 'About', 'Projects', 'Team', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [open, setOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      {/* Glass navigation container wrapper with subtle top padding */}
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-[clamp(16px,3.4vw,40px)] flex items-center justify-between h-20">
        
        {/* Brand Image Logo & Name */}
        <a className="inline-flex items-center gap-3 text-[16px] font-semibold tracking-wide text-white group" href="#top">
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-[1.5px] flex items-center justify-center shadow-lg shadow-cyan-500/10 group-hover:shadow-cyan-500/25 transition-all">
            <div className="w-full h-full rounded-full bg-[#050a07] flex items-center justify-center overflow-hidden relative">
              <span className="text-xs font-bold text-cyan-400 absolute">NN</span>
              <img 
                src="/logo.png" 
                alt="Neural Nexus Logo" 
                className="w-full h-full object-cover rounded-full relative z-10"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
          </div>
          <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-300 bg-clip-text text-transparent font-bold tracking-tight">
            Neural Nexus
          </span>
        </a>

        {/* Desktop Navigation Pill (Pure Glassmorphism - No Solid Black Background) */}
        <nav className="hidden lg:flex items-center gap-1 mx-auto p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]" aria-label="Primary">
          {LINKS.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-300 ${
                active === label 
                  ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/30 shadow-inner' 
                  : 'text-white/70 hover:text-white hover:bg-white/[0.04]'
              }`}
              onClick={() => setActive(label)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-5">
          <a className="text-[13.5px] font-medium text-white/70 hover:text-white transition-colors" href="#contact">
            Client Portal
          </a>
          <a className="px-5 py-2.5 rounded-full text-[13.5px] font-medium bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all" href="#projects">
            Explore Core
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 text-white backdrop-blur-md cursor-pointer hover:bg-white/[0.08] transition-all"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {/* Mobile Glass Sheet Menu */}
      {open && (
        <div className="lg:hidden absolute inset-x-4 top-24 flex flex-col px-6 py-7 rounded-3xl bg-[#050a07]/85 border border-white/15 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-1">
            {LINKS.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`py-3.5 px-4 rounded-xl text-[15px] font-medium transition-all ${
                  active === label 
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold' 
                    : 'text-white/80 hover:bg-white/[0.04] hover:text-white'
                }`}
                onClick={() => {
                  setActive(label)
                  setOpen(false)
                }}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
            <a 
              className="w-full py-3.5 text-center rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white font-medium shadow-lg shadow-cyan-500/20" 
              href="#projects" 
              onClick={() => setOpen(false)}
            >
              Explore Core
            </a>
          </div>
        </div>
      )}
    </header>
  )
}