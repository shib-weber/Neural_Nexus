import { useEffect, useRef, useState } from 'react'

const TOTAL_FRAMES = 300 // Match your total generated frames count

export default function HeroScroller() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const [images, setImages] = useState([])
  const [loadedCount, setLoadedCount] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  // 1. Preload individual high-res image frames into memory with error handling
  useEffect(() => {
    const loadedImages = []
    let isMounted = true

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image()
      img.src = `/frames/frame_${String(i).padStart(4, '0')}.jpg`
      
      img.onload = () => {
        if (isMounted) {
          setLoadedCount((prev) => prev + 1)
        }
      }
      
      img.onerror = () => {
        console.warn(`Failed to load frame: ${img.src}`)
        if (isMounted) {
          setLoadedCount((prev) => prev + 1)
        }
      }

      loadedImages.push(img)
    }
    setImages(loadedImages)

    return () => {
      isMounted = false
    }
  }, [])

  // 2. Track smooth scroll progress across the scroll runway
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const container = containerRef.current
      const rect = container.getBoundingClientRect()
      const totalScrollHeight = container.offsetHeight - window.innerHeight

      if (totalScrollHeight <= 0) return

      let progress = -rect.top / totalScrollHeight
      progress = Math.max(0, Math.min(1, progress))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 3. Render crisp high-DPI frames onto the canvas with smart closest-frame matching
  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 2

    const displayWidth = canvas.clientWidth
    const displayHeight = canvas.clientHeight

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr
      canvas.height = displayHeight * dpr
    }

    ctx.scale(dpr, dpr)
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'

    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(scrollProgress * TOTAL_FRAMES)
    )

    // Find target image, or search outwards (both backward & forward) for the closest loaded frame
    let currentImage = images[frameIndex]
    if (!currentImage || !currentImage.complete || currentImage.naturalWidth === 0) {
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prevIdx = frameIndex - offset
        const nextIdx = frameIndex + offset
        
        if (prevIdx >= 0 && images[prevIdx]?.complete && images[prevIdx]?.naturalWidth > 0) {
          currentImage = images[prevIdx]
          break
        }
        if (nextIdx < TOTAL_FRAMES && images[nextIdx]?.complete && images[nextIdx]?.naturalWidth > 0) {
          currentImage = images[nextIdx]
          break
        }
      }
    }

    if (currentImage && currentImage.complete && currentImage.naturalWidth > 0) {
      ctx.clearRect(0, 0, displayWidth, displayHeight)
      ctx.drawImage(currentImage, 0, 0, displayWidth, displayHeight)
    }
  }, [scrollProgress, images])

  const isReady = loadedCount >= TOTAL_FRAMES * 0.5 

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-[#050a07]" id="home">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#050a07]">
        
        {/* Crisp Canvas with object-cover for mobile & desktop */}
        <canvas 
          ref={canvasRef} 
          className="w-full h-full object-cover block bg-[#050a07]"
        />

        {/* Professional Loading Screen */}
        {!isReady && (
          <div className="absolute inset-0 bg-[#050a07] flex flex-col items-center justify-center z-50 text-white">
            <div className="w-10 h-10 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin mb-4 shadow-lg shadow-cyan-500/20" />
            <p className="text-xs font-medium tracking-widest uppercase text-cyan-300">
              Loading Neural Assets... {((loadedCount / TOTAL_FRAMES) * 100).toFixed(0)}%
            </p>
          </div>
        )}

        {/* Bottom Vignette */}
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-48 bg-gradient-to-t from-[#050a07] to-transparent pointer-events-none z-10" />

        {/* Main Content Container (Anchored at the Bottom-Left) */}
        <div className="absolute inset-0 z-20 w-full max-w-[1240px] mx-auto px-4 sm:px-[clamp(16px,3.4vw,40px)] flex flex-col justify-end pb-12 sm:pb-16 pointer-events-none">
          
          {/* Initial Heading */}
          <div 
            className="flex flex-col items-start text-left max-w-xl sm:max-w-2xl transition-opacity duration-200"
            style={{ 
              opacity: Math.max(0, 1 - scrollProgress * 4),
              transform: `translateY(${scrollProgress * -20}px)`
            }}
          >
            <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Synthesizing Intelligence <br />
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent drop-shadow-md">
                Beyond Human Limitation.
              </span>
            </h1>
          </div>

        </div>

        {/* Multi-Card Sequence appearing cleanly in the center on scroll */}
        <div 
          className="absolute inset-x-4 inset-y-0 max-w-4xl mx-auto flex items-center justify-center transition-all duration-500 pointer-events-auto z-20"
          style={{
            opacity: scrollProgress >= 0.3 && scrollProgress <= 0.75 ? 1 : 0,
            transform: `translateY(${scrollProgress >= 0.3 && scrollProgress <= 0.75 ? '0px' : '30px'})`,
            pointerEvents: scrollProgress >= 0.3 && scrollProgress <= 0.75 ? 'auto' : 'none'
          }}
        >
          {/* Increased Gap between the two cards using gap-6 sm:gap-8 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full px-2">
            {/* Card 1 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[rgba(12,20,16,0.7)] border border-cyan-500/40 backdrop-blur-2xl shadow-2xl shadow-cyan-950/80 text-left">
              <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-semibold">Active Node 01</span>
              <h3 className="text-lg sm:text-xl font-semibold text-white mt-1">2,000+ Synchronized Nodes</h3>
              <p className="text-white/70 text-xs mt-2 leading-relaxed">
                Trace real-time data flow across global enterprise clusters and automated intelligence routing structures.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[rgba(12,20,16,0.7)] border border-indigo-500/40 backdrop-blur-2xl shadow-2xl shadow-indigo-950/80 text-left">
              <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-semibold">Security Matrix</span>
              <h3 className="text-lg sm:text-xl font-semibold text-white mt-1">99.98% Shield Integrity</h3>
              <p className="text-white/70 text-xs mt-2 leading-relaxed">
                Continuous vulnerability scanning and automated threat mitigation backed by self-healing neural algorithms.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}