import React from 'react'

import WelcomeBanner from '../components/WelcomeBanner'
import FeaturedCitySection from '../components/FeaturedCIty'
import SearchCity from '../components/SearchCity'


function Home(props) {
  return (
    <div>
      <WelcomeBanner />
      <FeaturedCitySection />
      <SearchCity />
    </div>
  )
}

export default Home
