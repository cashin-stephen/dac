import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const About = ({ getPosition }) => {
  const myRef = useRef()

  useEffect(() => {
    getPosition(myRef)
    window.addEventListener('resize', () => getPosition(myRef))
    return () => {
      window.removeEventListener('resize', () => getPosition(myRef))
    }
  }, [])

  return (
        <div className="about" ref={myRef}>
            <h1 className="title">About Us</h1>
            <p className="aboutText">
                DAC & Co. LTD is a family buiness owned and managed by Dave and Paul Cashin.
                Dave Cashin is a structural engineer with 23 years experience in home designing
                and building while Paul Cashin is a fully qualified electrician also with 24 years
                experience in coordinating mechanical and electrical services. They have worked
                together throughout their careers making a very solid team. The company employs a
                team of 8 full time professionals.
            </p>
            <div className="aboutEndLine"></div>
        </div>
  )
}

About.propTypes = {
  getPosition: PropTypes.func.isRequired
}

export default About
