import Panel from './Panel'
import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const ImageGrid = ({ getPosition }) => {
  const myRef = useRef()

  useEffect(() => {
    getPosition(myRef)
  }, [getPosition])

  useEffect(() => {
    window.addEventListener('resize', () => getPosition(myRef))
  }, [getPosition])

  return (

        <div className="grid" ref={myRef}>
            <Panel color={'red'} />
            <Panel color={'blue'} />
            <Panel color={'purple'} />
            <Panel color={'green'} />
            <Panel color={'orange'} />
            <Panel color={'brown'} />
        </div>
  )
}

ImageGrid.propTypes = {
  getPosition: PropTypes.func.isRequired
}

export default ImageGrid
