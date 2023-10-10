import React, { useEffect } from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import { useLocation } from 'react-router-dom'

const Home = () => {
  
  const path = useLocation()
  useEffect(()=>{
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    console.log("Fr")
    // window.location.reload()
  },[path])

  return (
    <div>
        <Slider/>
        <FeaturedProducts type="feature"/>
        <Categories />
        <FeaturedProducts type="trending"/>
        <Contact />
    </div>
  )
}

export default Home
