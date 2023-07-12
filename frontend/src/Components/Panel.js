import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Panel = ({ color }) => {
  const [width, setWidth] = useState('0px')

  const linkPress = () => {
    console.log(color + ' panel pressed, fill out later')
  }

  return (

    <div className="panel" style={{ backgroundColor: color }}
        onMouseEnter={() => setWidth('200px')}
        onMouseLeave={() => setWidth('0px')}>
        <div className="panelBanner" style={{ width }}>
            <button className="panelBanner" onClick={linkPress}>
                <h5 className = "panelText">VIEW PROJECT</h5>
            </button>
        </div>
    </div>

  )
}

Panel.propTypes = {
  color: PropTypes.string.isRequired
}

export default Panel
