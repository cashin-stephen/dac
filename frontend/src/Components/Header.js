import logo from '.././images/DAC_TEXT_GIRDLE.png'
import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// consider refactoring...

const Header = ({ aboutY, projectY, teamY, servicesY, testemonialsY, contactY }) => {
  const [logoHeight, setLogoHeight] = useState(100)
  const [linkHeight, setLinkHeight] = useState(70)
  const [linkWidth, setlinksWidth] = useState(0)

  const headerOffset = -25

  const movePage = (offset) => {
    window.scrollTo({ top: offset - headerOffset, left: 0, behavior: 'smooth' })
  }

  const resizeHeader = () => {
    const documentElement = document.documentElement
    if (documentElement.scrollTop < 50) {
      setLogoHeight(100)
      setLinkHeight(73)
    } else {
      setLogoHeight(65)
      setLinkHeight(38)
    }
  }

  const evaluateLinks = useCallback(() => {
    // monitor for performance Important
    setlinksWidth(document.querySelector('.info').offsetWidth)
    console.log(linkWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', () => resizeHeader())
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => evaluateLinks())
  }, [evaluateLinks])

  useEffect(() => {
    evaluateLinks()
    console.log(window.location.href)
  }, [])

  // condtional rendering was causing errors, flip collapsed Link to false to demonstrate
  const navLinks =
    <div className="localLinks" style={{ marginTop: linkHeight }}>
        {linkWidth > 190 ? <button className="localLinkButton" onClick={() => movePage(aboutY)}>About Us</button> : null }
        {linkWidth > 290 ? <button className="localLinkButton" onClick={() => movePage(projectY)}>Projects</button> : null }
        {linkWidth > 420 ? <button className="localLinkButton" onClick={() => movePage(teamY)}>Our Team</button> : null }
        {linkWidth > 550 ? <button className="localLinkButton" onClick={() => movePage(servicesY)}>Our Services</button> : null }
        {linkWidth > 680 ? <button className="localLinkButton" onClick={() => movePage(testemonialsY)}>Testemonials</button> : null }
        {linkWidth > 810 ? <button className="localLinkButton" onClick={() => movePage(contactY)}>Contact Us</button> : null }
        {linkWidth < 810
          ? <div className='moreDropdown'>
            <button className="localLinkButton">More ▽</button>
            <div className='dropdownLinks'>
            {linkWidth < 190 ? <button onClick={() => movePage(aboutY)}>About Us</button> : null }
            {linkWidth < 290 ? <button onClick={() => movePage(projectY)}>Projects</button> : null }
            {linkWidth < 420 ? <button onClick={() => movePage(teamY)}>Our Team</button> : null }
            {linkWidth < 550 ? <button onClick={() => movePage(servicesY)}>Our Services</button> : null }
            {linkWidth < 680 ? <button onClick={() => movePage(testemonialsY)}>Testemonials</button> : null }
            {linkWidth < 810 ? <button onClick={() => movePage(contactY)}>Contact Us</button> : null }
          </div>
        </div>
          : null
        }
    </div>

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
                    {navLinks}
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
