import Header from './../Components/Header'
import Footer from './../Components/Footer'
import Sidebar from './../Components/Sidebar'
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Gallery from '../Components/Gallery'
import Contact from '../Components/Contact'

const Project = () => {
  const [contactY, setContactY] = useState()
  const { projects } = useLoaderData()

  const getContactPosition = (myRef) => {
    try {
      const y = myRef.current.offsetTop
      setContactY(y)
    } catch {}
  }

  useEffect(() => {
    console.log(projects)
    window.scrollTo(0, 0)
  }, [projects])

  return (
        <>
            <div className="Main">
                <div className="mainWrapper">
                    <Header contactY={contactY}/>
                    <div className='projectPage'>
                        <Sidebar />
                        <div className='titleDiv'>
                            <div className='projectTitleBox'>
                                <h4 className='projectTitle'>{projects.name}</h4>
                            </div>
                        </div>

                        <div className='projectContent'>
                            <div className='descriptionDiv'>
                                <p className='description'>
                                    This is a description of {projects.name}. Here we will say wonderful things about he complexity of the problems and sophisticisty of the solutions. It will be a great <br/><br/>
                                    This is the second paragraph jalksdfnioasdvmasdino ioasjdfa ioasndf ;iaos  inf oign4 i3gn 3ignnb oign 3in 3oing igno inai na ionafs  oinasf ingoing ioqnrgoir iong poibn iongs  oignin eg iong iaiganr <br/>
                                </p>
                                <p className='description'>
                                    This is a description of {projects.name}. Here we will say wonderful things about he complexity of the problems and sophisticisty of the solutions. It will be a great <br/><br/>
                                    This is the second paragraph jalksdfnioasdvmasdino ioasjdfa ioasndf ;iaos  inf oign4 i3gn 3ignnb oign 3in 3oing igno inai na ionafs  oinasf ingoing ioqnrgoir iong poibn iongs  oignin eg iong iaiganr
                                </p>
                            </div>
                            <div className='projectImages'>
                                <div className = 'mainImage' />
                                <Gallery marginTop={'0px'} aspectRatio={'245/120'} width={'100%'}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contactContainer'>

                </div>
                <Contact getPosition={getContactPosition} marginLeft={'min(25%, 220px)'} width={'calc(100% - min(25%, 220px))'} />
                <Footer/>
            </div>
        </>
  )
}

export default Project
