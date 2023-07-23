import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Panel = ({ color, projectData }) => {
  const [width, setWidth] = useState('0px')

  return (

    <div className="panel" style={{ backgroundColor: color }}
        onMouseEnter={() => setWidth('200px')}
        onMouseLeave={() => setWidth('0px')}>
        <div className="panelBanner" style={{ width }}>
            <div className="panelBanner" >
              <Link className='projectLink' to={'projects/' + projectData.id}>
                <h5 className = "panelText">VIEW PROJECT</h5>
              </Link>
            </div>
        </div>
    </div>

  )
}

Panel.propTypes = {
  color: PropTypes.string.isRequired,
  projectData: PropTypes.object.isRequired
}

export default Panel
