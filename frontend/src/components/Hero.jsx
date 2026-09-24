import { useEffect, useRef, useState } from 'react'

const HERO_VIDEO_URL = '/hero.mp4'

const STATS = [
  { figure: '2M+', label: 'People', foot: 'Happy Customers' },
  { figure: '1000+', label: 'Products', foot: 'Retail Market' },
]

export default function Hero() {
  const videoRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const play = video.play()
    if (play?.catch) play.catch(() => {})
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
      setReady(true)
    }
  }, [])

  return (
    <section className="relative bg-yellow-500 isolate flex flex-col min-h-[100svh] pt-[72px] pb-[clamp(20px,3vh,34px)] overflow-hidden bg-[radial-gradient(120%_90%_at_50%_40%,#16241b_0%,#050a07_100%)]" id="top">
      
      {/* Background Media */}
      <div className="absolute inset-0 z-[-1]" aria-hidden="true">
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-1200 ease-[cubic-bezier(0.22,1,0.36,1)] ${ready ? 'opacity-100' : 'opacity-0'}`}
          src={HERO_VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setReady(true)}
        />
        <div className="absolute inset-0 bg-[radial-gradient(92%_68%_at_50%_52%,rgba(6,12,8,0)_42%,rgba(5,10,7,0.58)_100%)] linear-gradient(180deg,rgba(5,10,7,0.66)_0%,rgba(5,10,7,0.12)_22%,rgba(5,10,7,0)_50%,rgba(5,10,7,0.72)_100%)]" />
      </div>

      {/* Center Body Block */}
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-[clamp(16px,3.4vw,40px)] flex flex-col flex-1 items-center justify-center text-center">
        <h1 className="text-[calc(clamp(1.9rem,4.3vw,3.5rem)*1)] font-normal leading-[1.16] tracking-[-0.005em] text-white drop-shadow-[0_2px_26px_rgba(4,10,6,0.6)] animate-[bloom_1s_cubic-bezier(0.22,1,0.36,1)_both]">
          <span className="block text-[0.76em] font-300 text-white/90">Discover Beauty</span>
          Made for Modern Elegance.
        </h1>
        <a className="btn btn--pearl mt-[calc(clamp(22px,3.4vh,36px)*1)] px-[28px] py-3 text-[14px] animate-[bloom_1s_cubic-bezier(0.22,1,0.36,1)_0.1s_both]" href="#products">
          Explore Our Products
        </a>
      </div>

      {/* Footer Row */}
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-[clamp(16px,3.4vw,40px)] flex flex-col lg:flex-row items-stretch lg:items-end justify-between gap-[clamp(14px,2.4vw,30px)] pt-[clamp(18px,3vh,32px)] text-center lg:text-left">
        
        <article className="card card--note max-w-none lg:max-w-[320px] p-[15px] rounded-[12px] bg-[rgba(22,32,26,0.55)] border border-white/13 backdrop-blur-[16px] backdrop-saturate-[115%] animate-[bloom_1s_cubic-bezier(0.22,1,0.36,1)_0.3s_both]">
          <h2 className="text-[14.5px] font-medium tracking-[0.005em] text-white">Beauty That Speaks for Itself</h2>
          <p className="mt-[6px] text-[11.5px] font-light leading-[1.55] text-white/56">
            From radiant skincare to flawless makeup, explore products designed for every skin type and style.
          </p>
        </article>

        <p className="order-first sm:order-none pb-[6px] text-[12.5px] font-light text-white/76 drop-shadow-[0_1px_14px_rgba(4,10,6,0.7)]">
          Beauty glowinn in innerway of smile.
        </p>

        <div className="flex justify-center gap-[clamp(10px,1.4vw,16px)]">
          {STATS.map((s) => (
            <article key={s.figure} className="card card--stat flex-1 lg:flex-none min-w-[112px] flex flex-col p-[15px] rounded-[12px] bg-[rgba(22,32,26,0.55)] border border-white/13 backdrop-blur-[16px] backdrop-saturate-[115%] animate-[bloom_1s_cubic-bezier(0.22,1,0.36,1)_0.3s_both]">
              <strong className="text-[23px] font-medium leading-[1.1] text-white">{s.figure}</strong>
              <span className="text-[12px] font-light text-white/56">{s.label}</span>
              <span className="mt-[14px] text-[11px] font-light text-white/76">{s.foot}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}