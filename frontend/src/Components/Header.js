import logo from '.././images/DAC_TEXT_GIRDLE.png'
import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import dropdownImg from '.././images/dropdown.png'
import dropdownImgActive from '.././images/dropdownActive.png'

// consider refactoring...

const Header = ({ aboutY, projectY, teamY, servicesY, testemonialsY, contactY }) => {
  const [logoHeight, setLogoHeight] = useState(100)
  const [linkHeight, setLinkHeight] = useState(70)
  const [collapsedLinks, setCollapsedLinks] = useState(true)
  const [showDropdown, setShowDropdown] = useState(false)
  const [dropdownActive, setdropdownActive] = useState(false)
  const [dropdownHeight, setdropDownHeight] = useState(1)
  const [dropdownWidth, setDropdownWidth] = useState(1)

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
    const linksWidth = document.querySelector('.info').offsetWidth
    console.log(linksWidth)
    if (linksWidth < 690 && collapsedLinks === true) {
      console.log('resize')
      setCollapsedLinks(false)
    } else {
      setCollapsedLinks(true)
    }
  }, [])

  const dropdownLinks = () => {
    setShowDropdown(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => resizeHeader())
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => evaluateLinks())
  }, [evaluateLinks])

  useEffect(() => {
    evaluateLinks()
  }, [])

  useEffect(() => {
    setTimeout(() => setdropDownHeight(100), 500)
    setTimeout(() => setDropdownWidth(100), 500)
  }, [showDropdown])

  // condtional rendering was causing errors, flip collapsed Link to false to demonstrate
  const navLinks =
    <div className="localLinks" style={{ marginTop: linkHeight }}>
        <button className="localLinkButton" onClick={() => movePage(aboutY)}>About Us</button>
        <button className="localLinkButton" onClick={() => movePage(projectY)}>Projects</button>
        <button className="localLinkButton" onClick={() => movePage(teamY)}>Our Team</button>
        <button className="localLinkButton" onClick={() => movePage(servicesY)}>Our Services</button>
        <button className="localLinkButton" onClick={() => movePage(testemonialsY)}>Testemonials</button>
        <button className="localLinkButton" onClick={() => movePage(contactY)}>Contact Us</button>
    </div>

  const dropdownList =
    <div className='dropdownBox' style={{ width: dropdownWidth, height: dropdownHeight }}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
    </div>

  const test =
    <div className='dropdownLinks' style={{ marginTop: (linkHeight - 20) }}>
        <button className='dropdownButton' onClick={dropdownLinks} onMouseEnter={() => setdropdownActive(true)} onMouseLeave={() => setdropdownActive(false)}>
            <img className = 'dropdownImg' src={dropdownActive ? dropdownImgActive : dropdownImg} alt='3 horizontal lines vertically aligned acting as a dropdown'></img>
        </button>
        {showDropdown ? dropdownList : null }
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
                    {collapsedLinks ? navLinks : test}
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
