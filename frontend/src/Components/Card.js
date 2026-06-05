import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ text, img }) => {
  return (
        <div className="cardThing">
            <img className = "cardImg" src={img} alt="House"></img>
            <p className = "cardText">{text}</p>
        </div>
  )
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default Card
