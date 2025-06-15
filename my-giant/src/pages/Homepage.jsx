import React from 'react'
import Navbar from '../components/Navbar'
import NavbarMobile from '../components/NavbarMobile'
import Header from '../components/Header'
import Destinations from '../components/Destinations'
import TravelTours from '../components/TourTypes'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import UpcomingEvents from '../components/EventsList'
import Tours from '../components/Tours'
import TourTypes from '../components/TourTypes'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <NavbarMobile />
      <Header />
      <TourTypes/>
      <Destinations />
      <Tours />
      <Partners />
      <Footer/>
    </div>
  )
}

export default Homepage
