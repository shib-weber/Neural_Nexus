export default function About() {
  return (
    <section className="py-24 bg-[#050a07] relative overflow-hidden" id="about">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-[clamp(16px,3.4vw,40px)]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs tracking-wide mb-4">
              Who We Are
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-snug">
              Pioneering Cognitive Architecture for Enterprise Ecosystems
            </h2>
            <p className="mt-6 text-white/70 text-base leading-relaxed">
              Neural Nexus is a collective of elite artificial intelligence researchers, distributed systems architects, and neural engineers. We build self-optimizing software engines capable of processing complex unstructured data at unprecedented speeds.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-[rgba(18,28,22,0.6)] border border-white/10">
                <h3 className="text-3xl font-bold text-cyan-400">99.9%</h3>
                <p className="text-xs text-white/60 mt-1">Model Inference Precision</p>
              </div>
              <div className="p-5 rounded-xl bg-[rgba(18,28,22,0.6)] border border-white/10">
                <h3 className="text-3xl font-bold text-indigo-400">&lt; 12ms</h3>
                <p className="text-xs text-white/60 mt-1">Global Latency Response</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-3xl blur-2xl" />
            <div className="relative p-8 rounded-3xl bg-[rgba(14,22,18,0.8)] border border-white/15 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white mb-4">Core Philosophy</h3>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">✓</span>
                  <span><strong>Decentralized Processing:</strong> Distributing neural workloads across edge networks for absolute resilience.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">✓</span>
                  <span><strong>Ethical AI Guardrails:</strong> Built-in bias verification layers ensuring absolute transparency and compliance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">✓</span>
                  <span><strong>Adaptive Synergy:</strong> Systems that evolve dynamically based on real-time organizational feedback loops.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}