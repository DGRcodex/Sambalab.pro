export const metadata = {
  title: 'Gaud-e Unlock the Power',
  description: 'Gaud-e Landing Page',


}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FinalFeatures from '@/components/final-features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <FinalFeatures />
      <Testimonials />
      <Newsletter />
     
    </>
  )
}
