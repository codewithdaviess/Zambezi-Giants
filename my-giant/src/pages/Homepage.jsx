import React from 'react'
import Navbar from '../components/Navbar'
import NavbarMobile from '../components/NavbarMobile'
import Header from '../components/Header'
import Destinations from '../components/Destinations'
import TravelTours from '../components/TravelTours'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import UpcomingEvents from '../components/EventsList'
import Tours from '../components/Tours'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <NavbarMobile />
      <Header />
      <Destinations />
      <UpcomingEvents />
      <TravelTours />
      <Tours />
      <Partners />
      <Footer/>
    </div>
  )
}

export default Homepage
