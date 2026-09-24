export default function Footer() {
  return (
    <footer className="bg-[#030604] border-t border-white/10 pt-20 pb-12 relative overflow-hidden" id="contact">
      
      {/* Background Glow Effect to match the flower */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-[clamp(16px,3.4vw,40px)] relative z-10">
        
        {/* Main Grid: Info, Flower Image, and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-16 border-b border-white/10 items-center">
          
          {/* Column 1: Contact Info (Span 4) */}
                    {/* Column 2: Cybernetic Flower Image (Span 3) */}
          <div className="lg:col-span-3 flex justify-center py-6 lg:py-0">
            <div className="relative w-full max-w-[260px] aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-cyan-500/30 via-indigo-500/20 to-transparent shadow-2xl shadow-cyan-950/50 group">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#050a07] relative">
                <img 
                  src="/2.jpg" 
                  alt="Neural Circuit Flower" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030604] via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Get in Touch</span>
            <h2 className="text-3xl font-bold text-white mt-2">Ready to Synchronize Your Enterprise?</h2>
            <p className="text-white/60 text-sm mt-3 leading-relaxed">
              Connect with our solutions architecture team to discuss custom neural deployment options or request enterprise access.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-white/80">
              <p className="flex items-center gap-2">📍 Silicon Nexus Tower, Sector 7, Cyber City</p>
              <p className="flex items-center gap-2">✉️ contact@neuralnexus.ai</p>
              <p className="flex items-center gap-2">📞 +1 (800) 555-NEURAL</p>
            </div>
          </div>



          {/* Column 3: Inquiry Form (Span 5) */}
          <div className="lg:col-span-5 bg-[rgba(14,22,18,0.8)] p-8 rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl">
            <h3 className="text-lg font-semibold text-white mb-4">Send a Direct Inquiry</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Inquiry transmission simulated successfully!'); }} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name or Organization" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Corporate Email Address" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div>
                <textarea 
                  rows="3" 
                  placeholder="Describe your infrastructure needs..." 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 resize-none transition-colors"
                />
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white font-medium text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all">
                Transmit Secure Message
              </button>
            </form>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40">
          <p>© 2026 Neural Nexus Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#top" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#top" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#top" className="hover:text-white transition-colors">Security Protocol</a>
          </div>
        </div>

      </div>
    </footer>
  )
}