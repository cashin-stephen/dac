import React from 'react'
import PropTypes from 'prop-types'

const TeamMember = ({ name, image, description, secondaryDescription, alt, imagePosition = 'center' }) => {
  return (
        <div className="teamItem">
            {image
              ? (
                <img src={image} alt={alt} className="teamImg" style={{ objectFit: 'cover', objectPosition: imagePosition }} />
                )
              : (
                <div className="teamImg" />
                )}
            <div>
                <h3>{name}</h3>
                <p className="teamText">
                    {description}
                </p>
                {secondaryDescription && (
                    <p className="teamText">
                        {secondaryDescription}
                    </p>
                )}
            </div>
        </div>
  )
}

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string.isRequired,
  secondaryDescription: PropTypes.string,
  alt: PropTypes.string,
  imagePosition: PropTypes.string
}

export default TeamMember
