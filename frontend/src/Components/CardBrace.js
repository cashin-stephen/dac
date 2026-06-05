import Card from './Card'
import house from '../images/house.png'
import compass from '../images/compass.png'
import aplus from '../images/aplus.png'
import React from 'react'

const CardBrace = () => {
  return (
        <div className="cardBrace">
            <Card text={'We offer full-scale renovations and new build construction. Our personalized service, attention to detail, and experience set us apart.'} img={house} />
            <Card text={'our unique set of skills allow us to design, engineer and build one-of-a-kind structures tailored for particular architectural, energy or individuals needs.'} img={compass} />
            <Card text={'DAC & CO Limited have designed and built a triple A rated House in North Country Dublin - one of the only three triple A rated houses constructed in Ireland.'} img={aplus} />
        </div>
  )
}

export default CardBrace
