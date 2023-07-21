import React from 'react'
import Gallery from './../Components/Gallery.js'
import About from './../Components/About.js'
import CardBrace from './../Components/CardBrace.js'
import ImageGrid from './../Components/ImageGrid.js'
import Team from './../Components/Team.js'
import Services from './../Components/Services.js'
import Testimonials from './../Components/Testemonials.js'
import Contact from './../Components/Contact.js'
import PropTypes from 'prop-types'

const Home = ({ getAboutPosition, getProjectPosition, getTeamPosition, getServicesPosition, getTestemonialsPosition, getContactPosition }) => {
  return (
    <>
        <Gallery />
        <About getPosition={getAboutPosition} />
        <CardBrace />
        <ImageGrid getPosition={getProjectPosition} />
        <Team getPosition={getTeamPosition}/>
        <Services getPosition={getServicesPosition} />
        <Testimonials getPosition={getTestemonialsPosition}/>
        <Contact getPosition={getContactPosition}/>
    </>
  )
}

Home.propTypes = {
  getAboutPosition: PropTypes.func.isRequired,
  getProjectPosition: PropTypes.func.isRequired,
  getTeamPosition: PropTypes.func.isRequired,
  getServicesPosition: PropTypes.func.isRequired,
  getTestemonialsPosition: PropTypes.func.isRequired,
  getContactPosition: PropTypes.func.isRequired
}

export default Home
