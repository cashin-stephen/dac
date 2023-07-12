import logo from '.././images/DAC_TEXT_GIRDLE.png'
import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Header = ({ aboutY, projectY, teamY, servicesY, testemonialsY, contactY }) => {
  const [logoHeight, setLogoHeight] = useState(100)
  const [linkHeight, setLinkHeight] = useState(90)
  //   const [collapsedLinks, setCollapsedLinks] = useState(false)

  const headerOffset = -25

  const movePage = (offset) => {
    window.scrollTo({ top: offset - headerOffset, left: 0, behavior: 'smooth' })
  }

  const resizeHeader = () => {
    const documentElement = document.documentElement
    if (documentElement.scrollTop < 50) {
      setLogoHeight(100)
      setLinkHeight(90)
    } else {
      setLogoHeight(65)
      setLinkHeight(55)
    }
  }

  const evaluateLinks = useCallback(() => {
    const linksWidth = document.querySelector('.localLinks').offsetWidth
    if (linksWidth < 6) {
      console.log('resize')
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', () => resizeHeader())
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => evaluateLinks())
  }, [evaluateLinks])

  return (
        <header className = "header">
            <a href={'/'}>
            <img className = "logo" src={logo} style={{ height: logoHeight }} alt="DAC & Co. ltd Building Contractors"/>
            </a>
            <div className="info">
                <div className="headerContact">
                    <div className="headerEmail">
                        <h5>086 2603225</h5>
                    </div>
                    <div className="headerEmail">
                        <h5>email@email.com</h5>
                    </div>
                </div>
                <div className="localLinks" style={{ height: linkHeight }}>
                    <button className="localLinkButton" onClick={() => movePage(aboutY)}>About Us</button>
                    <button className="localLinkButton" onClick={() => movePage(projectY)}>Projects</button>
                    <button className="localLinkButton" onClick={() => movePage(teamY)}>Our Team</button>
                    <button className="localLinkButton" onClick={() => movePage(servicesY)}>Our Services</button>
                    <button className="localLinkButton" onClick={() => movePage(testemonialsY)}>Testemonials</button>
                    <button className="localLinkButton" onClick={() => movePage(contactY)}>Contact Us</button>
                </div>
            </div>
        </header>

  )
}

Header.propTypes = {
  aboutY: PropTypes.number,
  projectY: PropTypes.number,
  teamY: PropTypes.number,
  servicesY: PropTypes.number,
  testemonialsY: PropTypes.number,
  contactY: PropTypes.number
}

export default Header
