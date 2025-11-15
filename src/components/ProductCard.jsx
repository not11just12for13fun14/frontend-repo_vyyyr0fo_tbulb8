import React from 'react'

const ProductCard = ({ title, description, priceFrom, features = [], ctaLabel = 'Beli Sekarang', productUrl, marketplaceUrl }) => {
  return (
    <div className="group bg-white rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
      <div className="h-40 rounded-lg bg-gradient-to-br from-orange-200 to-orange-300 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
      <p className="mt-3 text-2xl font-extrabold text-orange-600">Mulai {priceFrom}</p>
      <ul className="mt-3 space-y-1 text-sm text-gray-700 list-disc ml-4">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {productUrl && (
          <a href={productUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-orange-600 text-white px-4 py-2 text-sm font-semibold hover:bg-orange-700">
            {ctaLabel}
          </a>
        )}
        {marketplaceUrl && (
          <a href={marketplaceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white text-gray-800 px-4 py-2 text-sm font-semibold hover:bg-gray-50">
            Marketplace
          </a>
        )}
      </div>
    </div>
  )
}

export default ProductCard
