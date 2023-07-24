import Header from './../Components/Header'
import Footer from './../Components/Footer'
import Sidebar from './../Components/Sidebar'
import React from 'react'

const Project = () => {
  return (
        <>
            <div className="Main">
                <div className="mainWrapper">
                    <Header />
                    <div className='projectPage'>
                        <Sidebar />
                        <div style={{ backgroundColor: 'red', height: '1000px', width: '500px' }} />
                    </div>
                </div>
                <Footer/>
            </div>
        </>
  )
}

export default Project
