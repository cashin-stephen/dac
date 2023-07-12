import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ text, img, linkText }) => {
  const linkPress = () => {
    console.log('Link button pressed, fill out later')
  }

  return (
        <div className="cardThing">
            <img className = "cardImg" src={img} alt="House"></img>
            <p className = "cardText">{text}</p>
            <h3 className = "linkText">{linkText}</h3>
            <button className='linkArrow' onClick={linkPress}>{'>'}</button>
        </div>
  )
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
}

export default Card
