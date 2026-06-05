import React, { useRef, useEffect } from 'react'
import TeamMember from './TeamMember'
import PropTypes from 'prop-types'
import daveImage from '../images/dave.jpg'
import paulImage from '../images/paul.jpg'

const Team = ({ getPosition }) => {
  const myRef = useRef()

  useEffect(() => {
    getPosition(myRef)
    window.addEventListener('resize', () => getPosition(myRef))
    return () => {
      window.removeEventListener('resize', () => getPosition(myRef))
    }
  }, [])

  return (
        <div className="team" ref={myRef} style={{
          backgroundColor: '#d3d3d3',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          paddingLeft: 'calc(50vw - 50%)',
          paddingRight: 'calc(50vw - 50%)',
          paddingTop: '40px',
          paddingBottom: '40px',
          color: '#2c3e50'
        }}>
            <h1 className="title">Our Team</h1>
            <div className="teamBrace" style={{ gap: '60px' }}>
                <TeamMember
                    name="David Cashin"
                    image={daveImage}
                    alt="David Cashin"
                    description="David Cashin is a structural engineer with over 3 decades of experience in home designing and building. He is focused on nailing every detail, and ensuring eachh build feels right."
                    secondaryDescription="In his free time, David Cashin can be found hiking the hills   and mountains of Ireland."
                />
                <TeamMember
                    name="Paul Cashin"
                    image={paulImage}
                    alt="Paul Cashin"
                    imagePosition="center 20%"
                    description="Paul Cashin is a fully qualified electrician also with over 3 decades experience in coordinating mechanical and electrical services. His no-nonsense approach to construction facilitates projects that finish on time, and on-budget."
                    secondaryDescription="When the weather is good, Paul enjoys taking his motorcycle out for an early morning spin."
                />
            </div>
        </div>
  )
}

Team.propTypes = {
  getPosition: PropTypes.func.isRequired
}

export default Team
