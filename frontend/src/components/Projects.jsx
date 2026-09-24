const PROJECTS = [
  {
    title: 'Synapse Engine',
    category: 'Cognitive Computing',
    desc: 'An enterprise-grade neural framework capable of multi-modal pattern recognition and automated decision pipelines.',
    tag: 'Active Deployment',
  },
  {
    title: 'Aether Cloud',
    category: 'Distributed Infrastructure',
    desc: 'Ultra-low latency serverless clusters optimized specifically for large language model inference and training.',
    tag: 'High Performance',
  },
  {
    title: 'Vortex Quantum Guard',
    category: 'Cybersecurity AI',
    desc: 'Autonomous threat detection grid utilizing recurrent neural networks to neutralize zero-day exploits instantly.',
    tag: 'Enterprise Shield',
  },
]

export default function Projects() {
  return (
    <section className="py-24 bg-[#070e0a] relative" id="projects">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-[clamp(16px,3.4vw,40px)]">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Our Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">Projects We Execute</h2>
          <p className="text-white/60 text-sm mt-3">
            Delivering bleeding-edge technological solutions custom-tailored for high-growth enterprises and research labs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((p) => (
            <div key={p.title} className="group p-8 rounded-2xl bg-[rgba(16,25,20,0.6)] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-cyan-300 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    {p.tag}
                  </span>
                  <span className="text-xs text-white/40">{p.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{p.title}</h3>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">{p.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium text-white/80 group-hover:text-cyan-400">
                <span>Explore Technical Specs</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}