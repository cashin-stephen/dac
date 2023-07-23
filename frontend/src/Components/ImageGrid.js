import Panel from './Panel'
import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import data from '../data/projects.json'

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
            <Panel color={'red'} projectData={data.Project0} />
            <Panel color={'blue'} projectData={data.Project1} />
            <Panel color={'purple'} projectData={data.Project2} />
            <Panel color={'green'} projectData={data.Project3} />
            <Panel color={'orange'} projectData={data.Project4} />
            <Panel color={'brown'} projectData={data.Project5} />
        </div>
  )
}

ImageGrid.propTypes = {
  getPosition: PropTypes.func.isRequired
}

export default ImageGrid
