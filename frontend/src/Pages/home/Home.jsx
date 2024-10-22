import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import HeroSection from './HeroSection'
import TrendingProducts from '../Shop/TrendingProducts'
import DealsSection from './DealsSection'
import Bromobanner from './Bromobanner'
import Blogs from '../blogs/Blogs'

const Home = () => {
  return (
    <>
     <Banner/>
     <Categories/>
     <HeroSection/>
     <TrendingProducts/>
     <DealsSection/>
    <Bromobanner/>
    <Blogs/>
    
    </>
  )
}

export default Home
