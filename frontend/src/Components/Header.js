import logo from '.././images/DAC_TEXT_GIRDLE.png'
import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useLocation, Link } from 'react-router-dom'

// consider refactoring...
// Some functions responsible for dynamic sizings are reliant on element ids
// Thus timeouts are used to ensure they load before the functions are called

const Header = ({ aboutY, teamY, servicesY, testemonialsY, contactY }) => {
  const [logoWidth, setLogoWidth] = useState('min(80%, 300px)')
  const [linkHeight, setLinkHeight] = useState(48)
  const [linkWidth, setlinksWidth] = useState(1000)
  const navigate = useNavigate()
  const location = useLocation()

  const headerOffset = -25

  const movePage = (offset, section) => {
    if (section !== 'contact' && location.pathname !== '/') {
      navigate({
        pathname: '/',
        search: 'section=' + section
      })
    }
    window.scrollTo({ top: offset - headerOffset, left: 0, behavior: 'smooth' })
  }

  const resizeHeader = () => {
    const documentElement = document.documentElement
    if (documentElement.scrollTop < 50) {
      setLogoWidth('min(80%, 300px)')
      setLinkHeight(48)
    } else {
      setLogoWidth('min(40%, 220px)')
      setLinkHeight(28)
    }
  }

  const evaluateLinks = useCallback(() => {
    // monitor for performance Important
    setlinksWidth(document.querySelector('.info').offsetWidth)
  }, [])

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
    setTimeout(() => evaluateLinks(), 500)
  }, [linkHeight])

  // condtional rendering was causing errors, flip collapsed Link to false to demonstrate
  const navLinks =
    <div className="localLinks" style={{ marginTop: linkHeight }}>
        {linkWidth > 190 ? <button className="localLinkButton" onClick={() => movePage(aboutY, 'about')}>About Us</button> : null }
        {linkWidth > 290 ? <Link preventScrollReset={false} className='localLinkButton'to={'/projects/0'}>Projects</Link> : null }
        {linkWidth > 420 ? <button className="localLinkButton" onClick={() => movePage(teamY, 'team')}>Our Team</button> : null }
        {linkWidth > 550 ? <button className="localLinkButton" onClick={() => movePage(servicesY, 'services')}>Our Services</button> : null }
        {linkWidth > 680 ? <button className="localLinkButton" onClick={() => movePage(testemonialsY, 'testemonials')}>Testemonials</button> : null }
        {linkWidth > 810 ? <button className="localLinkButton" onClick={() => movePage(contactY, 'contact')}>Contact Us</button> : null }
        {linkWidth < 810
          ? <div className='moreDropdown'>
            <button className="localLinkButton">More ▽</button>
            <div className='dropdownLinks'>
            {linkWidth < 190 ? <button className="dropdownItems" onClick={() => movePage(aboutY, 'about')}>About Us</button> : null }
            {linkWidth < 290 ? <Link className="dropdownItems" to={'/projects/0'}><p>Projects</p></Link> : null }
            {linkWidth < 420 ? <button className="dropdownItems" onClick={() => movePage(teamY, 'team')}>Our Team</button> : null }
            {linkWidth < 550 ? <button className="dropdownItems" onClick={() => movePage(servicesY, 'services')}>Our Services</button> : null }
            {linkWidth < 680 ? <button className="dropdownItems" onClick={() => movePage(testemonialsY, 'testemonials')}>Testemonials</button> : null }
            {linkWidth < 810 ? <button className="dropdownItems" onClick={() => movePage(contactY, 'contact')}>Contact Us</button> : null }
          </div>
        </div>
          : null
        }
    </div>

  return (
        <header className = "header">
            <Link className="logoLink" style={{ width: logoWidth }} to={'/'}>
            <div style={{ display: 'inline-block', textAlign: 'center' }}></div>
            <img className = "logo" src={logo} alt="DAC & Co. ltd Building Contractors"/>
            </Link>
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
