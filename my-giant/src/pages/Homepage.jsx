import React from 'react'
import Navbar from '../components/Navbar'
import NavbarMobile from '../components/NavbarMobile'
import Header from '../components/Header'
import Destinations from '../components/Destinations'
import TravelTours from '../components/TravelTours'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <NavbarMobile />
      <Header />
      <Destinations />
      <TravelTours />
    </div>
  )
}

export default Homepage
