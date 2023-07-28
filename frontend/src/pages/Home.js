import React, { useEffect } from 'react'
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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
        <Gallery marginTop={'140px'} aspectRatio={'245/72'} width={'101.2%'}/>
        <About getPosition={getAboutPosition} />
        <CardBrace />
        <ImageGrid getPosition={getProjectPosition} />
        <Team getPosition={getTeamPosition}/>
        <Services getPosition={getServicesPosition} />
        <Testimonials getPosition={getTestemonialsPosition}/>
        <Contact getPosition={getContactPosition} marginLeft={'0px'} width={'100%'}/>
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
