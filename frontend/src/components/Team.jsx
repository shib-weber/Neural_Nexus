const TEAM = [
  {
    name: 'Dr. Aris Vance',
    role: 'Chief Executive Officer',
    domain: 'Neural Architecture & Strategic Vision',
    bio: 'Former lead researcher in recursive neural networks with over 15 years in deep learning scale.',
  },
  {
    name: 'Elena Rostova',
    role: 'Chief Technology Officer',
    domain: 'Distributed Systems & Edge Infrastructure',
    bio: 'Specializes in high-throughput computing pipelines and ultra-low latency cluster synchronization.',
  },
  {
    name: 'Marcus Thorne',
    role: 'Head of AI Research',
    domain: 'Multi-Modal Generative Models & Ethics',
    bio: 'Pioneered autonomous self-healing algorithms and secure enterprise model guardrails.',
  },
  {
    name: 'Seraphina Chen',
    role: 'Lead UX & Systems Engineer',
    domain: 'Cognitive Human-Computer Interfaces',
    bio: 'Bridging complex data streams into intuitive, high-performance web and desktop visualizations.',
  },
]

export default function Team() {
  return (
    <section className="py-24 bg-[#050a07] relative" id="team">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-[clamp(16px,3.4vw,40px)]">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">Our Collective</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">The Neural Minds</h2>
          <p className="text-white/60 text-sm mt-3">
            Meet the domain experts engineering the next evolution of autonomous enterprise intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member) => (
            <div key={member.name} className="p-6 rounded-2xl bg-[rgba(14,22,18,0.7)] border border-white/10 hover:border-indigo-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 mb-4 flex items-center justify-center text-xl font-bold text-white shadow-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-xs text-cyan-400 font-medium mt-0.5">{member.role}</p>
                <div className="mt-3 px-2.5 py-1 rounded bg-white/5 border border-white/10 inline-block text-[11px] text-white/80">
                  {member.domain}
                </div>
                <p className="mt-3 text-xs text-white/60 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}