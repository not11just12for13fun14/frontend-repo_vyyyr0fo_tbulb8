import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { ProductsSection, WhyUsSection, GuideSection, ContactSection } from './components/Sections'
import Footer from './components/Footer'

function App() {
  // Replace these with your actual URLs
  const personalStoreUrl = 'https://your-personal-store.example.com'
  const marketplaceUrl = 'https://marketplace.example.com/sentra-bracket'

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero personalStoreUrl={personalStoreUrl} marketplaceUrl={marketplaceUrl} />
        <ProductsSection personalStoreUrl={personalStoreUrl} marketplaceUrl={marketplaceUrl} />
        <WhyUsSection />
        <GuideSection />
        <ContactSection whatsappNumber="+6281234567890" />
      </main>
      <Footer />
    </div>
  )
}

export default App
