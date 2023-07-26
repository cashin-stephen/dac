import Header from './../Components/Header'
import Footer from './../Components/Footer'
import Sidebar from './../Components/Sidebar'
import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Project = () => {
  const { projects } = useLoaderData()

  useEffect(() => {
    console.log(projects)
  }, [])

  return (
        <>
            <div className="Main">
                <div className="mainWrapper">
                    <Header />
                    <div className='projectPage'>
                        <Sidebar />
                        <div className='titleDiv'>
                            <div className='projectTitleBox'>
                                <h4 className='projectTitle'>{projects.name}</h4>
                            </div>
                        </div>
                        <div className='descriptionDiv'>
                            <p className='description'>
                                Lots of word to go here, Lots of word to go here, Lots of word to go here, Lots of word to go here, Lots of word to go here, <br/><br/>
                                Lots of word to go here, Lots of word to go here, Lots of word to go here, Lots of word to go here, Lots of word to go here, Lots of word to go here, Lots of word to go here, Lots of word to go here, Lots of word to go here
                            </p>
                        </div>

                    </div>
                </div>
                <Footer/>
            </div>
        </>
  )
}

export default Project
