import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const About = ({ getPosition, marginTop }) => {
  const myRef = useRef()

  useEffect(() => {
    getPosition(myRef)
    window.addEventListener('resize', () => getPosition(myRef))
    return () => {
      window.removeEventListener('resize', () => getPosition(myRef))
    }
  }, [])

  return (
        <div className="about" ref={myRef} style={{ marginTop }}>
            <h1 className="title">About Us</h1>
            <p className="aboutText">
                DAC & Co. LTD is a family business owned and managed by David Cashin and Paul Cashin.
                The pair manage and coordinate a team of 5-10 professionals that specialise in
                quality home construction and improvement. Operating in North Dublin for over 30 years,
                evidence of their work can be seen throughout the city. David and Paul have worked together
                throughout their careers, priding themselves on leading a solid, reliable team, that is
                passionate about the projects they work on.
            </p>
            <div className="aboutEndLine"></div>
        </div>
  )
}

About.propTypes = {
  getPosition: PropTypes.func.isRequired,
  marginTop: PropTypes.string
}

export default About
