export default function Footer() {
  return (
    <footer className="bg-[#030604] border-t border-white/10 pt-20 pb-12 relative" id="contact">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-[clamp(16px,3.4vw,40px)]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Get in Touch</span>
            <h2 className="text-3xl font-bold text-white mt-2">Ready to Synchronize Your Enterprise?</h2>
            <p className="text-white/60 text-sm mt-3 max-w-md">
              Connect with our solutions architecture team to discuss custom neural deployment options or request enterprise access.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-white/80">
              <p>📍 Silicon Nexus Tower, Sector 7, Cyber City</p>
              <p>✉️ contact@neuralnexus.ai</p>
              <p>📞 +1 (800) 555-NEURAL</p>
            </div>
          </div>

          <div className="bg-[rgba(14,22,18,0.8)] p-8 rounded-2xl border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">Send a Direct Inquiry</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Inquiry transmission simulated successfully!'); }} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name or Organization" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Corporate Email Address" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <textarea 
                  rows="3" 
                  placeholder="Describe your infrastructure needs..." 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-sm shadow-lg hover:shadow-cyan-500/25 transition-all">
                Transmit Secure Message
              </button>
            </form>
          </div>
        </div>

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