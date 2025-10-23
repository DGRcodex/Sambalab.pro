export const metadata = {
  title: 'Sambalab',
  description: 'Landing Page with Sambalab',


}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FinalFeatures from '@/components/final-features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Blocks from '@/components/blocks'
import Equipo from '@/components/equipo'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <FinalFeatures />
      <Blocks /> 
      <Equipo />
   
     
    </>
  )
}
