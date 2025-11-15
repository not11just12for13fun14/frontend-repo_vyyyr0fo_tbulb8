import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Sentra Bracket. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#products" className="hover:underline">Produk</a>
          <a href="#why-us" className="hover:underline">Why Us</a>
          <a href="#contact" className="hover:underline">Kontak</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
