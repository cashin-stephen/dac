import React, { useRef, useEffect } from 'react'
import TeamMember from './TeamMember'
import PropTypes from 'prop-types'

const Team = ({ getPosition }) => {
  const myRef = useRef()

  useEffect(() => {
    getPosition(myRef)
  }, [getPosition])

  useEffect(() => {
    window.addEventListener('resize', () => getPosition(myRef))
  }, [getPosition])

  return (
        <div className="team" ref={myRef}>
            <h1 className="title">Our Team</h1>
            <div className="teamBrace">
                <TeamMember />
                <TeamMember />
            </div>
        </div>
  )
}

Team.propTypes = {
  getPosition: PropTypes.func.isRequired
}

export default Team
