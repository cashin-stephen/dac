import Panel from './Panel'
import React from 'react'
import PropTypes from 'prop-types'

const ImageGrid = () => (

  <div className="grid">
    <Panel color={'red'} id={0} />
    <Panel color={'blue'} id={1} />
    <Panel color={'purple'} id={2} />
    <Panel color={'green'} id={3} />
    <Panel color={'orange'} id={4} />
    <Panel color={'brown'} id={5} />
  </div>
)

ImageGrid.propTypes = {
  getPosition: PropTypes.func.isRequired
}

export default ImageGrid
