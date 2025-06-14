import React from 'react'
import HeroSection from '../components/HeroSection'
import InvestmentOpp from '../components/InvestmentOpp'
import Features from '../components/Features'
import DataShow from '../components/DataShow'

const Homepage = () => {
  return (
    <div>
        <HeroSection />
        <DataShow />
        <InvestmentOpp />
        <Features />
      
    </div>
  )
}

export default Homepage
