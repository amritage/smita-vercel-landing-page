export function Navigation() {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-slate-900">
              FabricPro
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Products
            </a>
            <a href="#about" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              About
            </a>
            <a href="#faq" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Contact
            </a>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Get Quote
            </a>
          </div>

          <div className="md:hidden">
            <button className="text-slate-700 hover:text-slate-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
