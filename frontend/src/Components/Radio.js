import React from 'react'
import PropTypes from 'prop-types'

const RadioBrace = ({ index, num }) => {
  const rows = []
  for (let i = 0; i < num; i++) {
    if (i === index) {
      rows.push(<span className="dot" key={i}>
                    <span className="activeDot"></span>
                </span>)
    } else {
      rows.push(<span className="dot" key={i}></span>)
    }
  }
  return (
        <div className = "radioTest">
            {rows}
        </div>

  )
}

RadioBrace.propTypes = {
  index: PropTypes.number.isRequired,
  num: PropTypes.number.isRequired
}

export default RadioBrace
