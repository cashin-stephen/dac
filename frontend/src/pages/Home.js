import React, { useEffect } from 'react'
import About from './../Components/About.js'
import CardBrace from './../Components/CardBrace.js'
import Team from './../Components/Team.js'
import Services from './../Components/Services.js'
import Contact from './../Components/Contact.js'
import PropTypes from 'prop-types'

const Home = ({ getAboutPosition, getTeamPosition, getServicesPosition, getContactPosition }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
        <About getPosition={getAboutPosition} marginTop={'140px'} />
        <Team getPosition={getTeamPosition}/>
        <CardBrace />
        <Services getPosition={getServicesPosition} />
        <Contact getPosition={getContactPosition} marginLeft={'0px'} width={'100%'}/>
    </>
  )
}

Home.propTypes = {
  getAboutPosition: PropTypes.func.isRequired,
  getTeamPosition: PropTypes.func.isRequired,
  getServicesPosition: PropTypes.func.isRequired,
  getContactPosition: PropTypes.func.isRequired
}

export default Home
