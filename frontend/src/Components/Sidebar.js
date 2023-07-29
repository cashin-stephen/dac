import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const headerOffset = 90
  const [localHeight, setLocalHeight] = useState(window.innerHeight - headerOffset)
  const [textOffset, setTextOffset] = useState(50)

  const adjusTextOffset = () => {
    const documentElement = document.documentElement
    if (documentElement.scrollTop < 50) {
      setTextOffset(50)
    } else {
      setTextOffset(15)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', () => setLocalHeight(window.innerHeight - headerOffset))
    window.addEventListener('scroll', () => adjusTextOffset())
    return () => {
      window.removeEventListener('resize', () => setLocalHeight(window.innerHeight - headerOffset))
      window.removeEventListener('scroll', () => adjusTextOffset())
    }
  }, [])

  return (
    <div className='projectSidebar' style={{ height: localHeight, marginTop: headerOffset }}>
        <div className='sideBarContent' style={{ marginTop: textOffset + 'px' }}>
            <h3>Projects</h3>
            <div className='projectList'>
                <Link className='sideBarLink' to={'../../projects/0'}>
                    <p className='projectText'>Project 0</p>
                </Link>
                <Link className='sideBarLink' to={'../../projects/1'}>
                    <p className='projectText'>Project 1</p>
                </Link>
                <Link className='sideBarLink' to={'../../projects/2'}>
                    <p className='projectText'>Project 2</p>
                </Link>
                <Link className='sideBarLink' to={'../../projects/3'}>
                    <p className='projectText'>Project 3</p>
                </Link>
                <Link className='sideBarLink' to={'../../projects/4'}>
                    <p className='projectText'>Project 4</p>
                </Link>
                <Link className='sideBarLink' to={'../../projects/5'}>
                    <p className='projectText'>Project 5</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
