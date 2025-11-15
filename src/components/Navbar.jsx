import React from 'react'

const Navbar = () => {
  const navItems = [
    { href: '#products', label: 'Products' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#guide', label: 'Installation' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold">SB</div>
          <span className="text-lg font-semibold text-gray-900">Sentra Bracket</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#products" className="hidden sm:inline-flex items-center rounded-md bg-orange-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-orange-700 transition-colors">
          Shop Now
        </a>
      </div>
    </header>
  )
}

export default Navbar
