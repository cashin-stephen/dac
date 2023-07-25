import React, { useEffect, useState } from 'react'
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Home from './pages/Home.js'
import { getProjects } from './data/data.js'

export async function loader ({ params }) {
  const projects = await getProjects(params.projectId)
  return { projects }
}

const Main = () => {
  const [aboutY, setAboutY] = useState()
  const [projectY, setProjectY] = useState()
  const [teamY, setTeamY] = useState()
  const [servicesY, setServicesY] = useState()
  const [testemonialsY, setTestemonialsY] = useState()
  const [contactY, setContactY] = useState()
  const [intiialY, setInitialY] = useState(false)
  const headerOffset = -25

  const getAboutPosition = (myRef) => {
    const y = myRef.current.offsetTop
    setAboutY(y)
  }

  const getProjectPosition = (myRef) => {
    const y = myRef.current.offsetTop
    setProjectY(y)
  }

  const getTeamPosition = (myRef) => {
    const y = myRef.current.offsetTop
    setTeamY(y)
  }

  const getServicesPosition = (myRef) => {
    const y = myRef.current.offsetTop
    setServicesY(y)
  }

  const getTestemonialsPosition = (myRef) => {
    const y = myRef.current.offsetTop
    setTestemonialsY(y)
  }

  const getContactPosition = (myRef) => {
    const y = myRef.current.offsetTop
    setContactY(y)
  }

  // Bad code, revisit if you have integrity
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const section = params.get('section')
    let currentY
    if (section !== null) {
      // eslint-disable-next-line no-eval
      currentY = eval(section + 'Y')
      if (!intiialY) {
        window.scrollTo({ top: currentY - headerOffset, left: 0, behavior: 'smooth' })
        if (!isNaN(currentY)) {
          setInitialY(true)
        }
      }
    }
  }, [teamY])

  return (
      <div className="Main">
        <div className="mainWrapper">
          <Header aboutY={aboutY} projectY={projectY} teamY={teamY} servicesY={servicesY} testemonialsY={testemonialsY} contactY={contactY}/>
          <Home getAboutPosition={getAboutPosition} getProjectPosition={getProjectPosition} getTeamPosition={getTeamPosition} getServicesPosition={getServicesPosition} getTestemonialsPosition={getTestemonialsPosition} getContactPosition={getContactPosition}/>
        </div>
        <Footer />
      </div>
  )
}

export default Main
