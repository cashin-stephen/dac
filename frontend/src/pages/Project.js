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
                        <h3 className='projectTitle'>{projects.name}</h3>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
  )
}

export default Project
