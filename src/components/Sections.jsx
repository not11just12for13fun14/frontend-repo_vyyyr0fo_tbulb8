import React from 'react'
import ProductCard from './ProductCard'

const ProductsSection = ({ personalStoreUrl, marketplaceUrl }) => {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Pilih Tipe Bracket</h2>
        <p className="mt-2 text-gray-600 text-center">Tiga pilihan utama untuk kebutuhan pemasangan TV Anda</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            title="Wall Mount"
            description="Bracket dinding untuk tampilan minimalis dan hemat ruang."
            priceFrom="Rp149.000"
            features={["Kuat & stabil", "Bisa tilt/swivel (opsional)", "Untuk berbagai ukuran TV"]}
            productUrl={personalStoreUrl}
            marketplaceUrl={marketplaceUrl}
          />
          <ProductCard
            title="Standing"
            description="Bracket berdiri fleksibel, cocok untuk ruang meeting atau pameran."
            priceFrom="Rp499.000"
            features={["Roda fleksibel", "Rak perangkat opsional", "Tinggi dapat diatur"]}
            productUrl={personalStoreUrl}
            marketplaceUrl={marketplaceUrl}
          />
          <ProductCard
            title="Desk Mount"
            description="Bracket meja untuk monitor/TV kecil, rapi dan ergonomis."
            priceFrom="Rp199.000"
            features={["Arm gas spring (opsional)", "Manajemen kabel rapi", "Instalasi mudah"]}
            productUrl={personalStoreUrl}
            marketplaceUrl={marketplaceUrl}
          />
        </div>
      </div>
    </section>
  )
}

const WhyUsSection = () => {
  const items = [
    { title: 'Kualitas Teruji', desc: 'Material kokoh dan aman untuk TV Anda.' },
    { title: 'Harga Bersahabat', desc: 'Pilihan terbaik sesuai anggaran.' },
    { title: 'Dukungan Pemasangan', desc: 'Bisa bantu pasang di area layanan.' },
  ]
  return (
    <section id="why-us" className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Kenapa Sentra Bracket?</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="bg-white rounded-xl border border-orange-100 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-orange-700">{it.title}</h3>
              <p className="mt-2 text-gray-700">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const GuideSection = () => {
  return (
    <section id="guide" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Panduan Singkat</h2>
        <ol className="mt-6 list-decimal space-y-3 text-gray-700 ml-6">
          <li>Pilih tipe bracket sesuai ukuran dan kebutuhan.</li>
          <li>Pastikan material dinding/meja mendukung pemasangan.</li>
          <li>Gunakan jasa pemasangan kami bila diperlukan.</li>
        </ol>
      </div>
    </section>
  )
}

const ContactSection = ({ whatsappNumber = '+6281234567890' }) => {
  const waUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=Halo%20Sentra%20Bracket,%20saya%20butuh%20konsultasi%20bracket%20TV.`
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Butuh Bantuan Pilih Bracket?</h2>
        <p className="mt-2 text-gray-700">Chat langsung dengan kami via WhatsApp untuk konsultasi gratis.</p>
        <a href={waUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center rounded-md bg-green-600 text-white px-6 py-3 text-base font-semibold shadow hover:bg-green-700">
          Chat WhatsApp
        </a>
      </div>
    </section>
  )
}

export { ProductsSection, WhyUsSection, GuideSection, ContactSection }
