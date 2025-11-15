import React from 'react'

const Hero = ({ onPrimaryClick, personalStoreUrl, marketplaceUrl }) => {
  return (
    <section id="top" className="pt-24 pb-16 sm:pt-28 sm:pb-24 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Sentra Bracket
          </h1>
          <p className="mt-3 text-xl text-gray-700">
            Solusi bracket TV yang kuat, rapi, dan mudah dipasang. Tersedia Wall Mount, Standing, dan Desk Mount.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="inline-flex items-center rounded-md bg-orange-600 text-white px-5 py-3 text-base font-semibold shadow hover:bg-orange-700 transition-colors">
              Lihat Produk
            </a>
            {personalStoreUrl && (
              <a href={personalStoreUrl} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-orange-300 text-orange-700 bg-white px-5 py-3 text-base font-semibold hover:bg-orange-50 transition-colors">
                Kunjungi Toko Kami
              </a>
            )}
            {marketplaceUrl && (
              <a href={marketplaceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-gray-200 text-gray-800 bg-white px-5 py-3 text-base font-semibold hover:bg-gray-50 transition-colors">
                Beli di Marketplace
              </a>
            )}
          </div>
          <p className="mt-4 text-sm text-gray-500">Gratis konsultasi penentuan bracket terbaik untuk TV Anda.</p>
        </div>

        <div className="relative">
          <div className="aspect-video rounded-xl bg-white shadow-xl ring-1 ring-orange-200 p-4 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-3 w-full">
              <div className="h-28 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600" />
              <div className="h-28 rounded-lg bg-gradient-to-br from-orange-400 to-orange-500" />
              <div className="h-28 rounded-lg bg-gradient-to-br from-orange-300 to-orange-400" />
              <div className="h-28 rounded-lg bg-gradient-to-br from-orange-400 to-orange-500" />
              <div className="h-28 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600" />
              <div className="h-28 rounded-lg bg-gradient-to-br from-orange-300 to-orange-400" />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-md ring-1 ring-orange-200 px-4 py-2 text-sm text-gray-700">
            Garansi kualitas • Support pemasangan
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
