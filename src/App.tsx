import { useState } from 'react'
import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { Facts } from './components/Facts'
import { MatrixSection } from './components/MatrixSection'
import { ProcessSection } from './components/ProcessSection'
import { IndustriesSection } from './components/IndustriesSection'
import { ScalePricing } from './components/ScalePricing'
import { AboutSection } from './components/AboutSection'
import { FaqSection } from './components/FaqSection'
import { QuoteSection } from './components/QuoteSection'
import { SiteFooter } from './components/SiteFooter'
import { MobileBar } from './components/MobileBar'
import type { Selection } from './types'

export default function App() {
  // What the visitor picked in the quick-start bar, handed to the quote form.
  const [selection, setSelection] = useState<Selection | null>(null)

  function handleStart(next: Selection) {
    setSelection(next)
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="grain">
      <a
        href="#main"
        className="absolute left-[-9999px] top-4 z-100 rounded-md bg-gold px-3.5 py-2.5 text-navy focus:left-4"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        <Hero onStart={handleStart} />
        <Facts />
        <MatrixSection />
        <ProcessSection />
        <IndustriesSection />
        <ScalePricing />
        <AboutSection />
        <FaqSection />
        <QuoteSection selection={selection} />
      </main>

      <SiteFooter />
      <MobileBar />
    </div>
  )
}
