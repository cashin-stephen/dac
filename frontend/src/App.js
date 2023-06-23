import React from 'react';
import LoadingCrane from './Components/LoadingCrane.js'
import Footer from './Components/Footer.js'
import Title from './Components/Title.js'
import Header from './Components/Header.js'
import Gallery from './Components/Gallery.js'
import About from './Components/About.js'

  const Main = () => {

    return (
      <div className="Main">
        <Header />
        <Gallery />
        <About />
      </div>
    )

  };

export default Main;
