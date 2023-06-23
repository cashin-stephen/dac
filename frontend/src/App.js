import React from 'react';
import Header from './Components/Header.js'
import Gallery from './Components/Gallery.js'
import About from './Components/About.js'
import CardBrace from './Components/CardBrace.js'

  const Main = () => {

    return (
      <div className="Main">
        <Header />
        <Gallery />
        <About />
        <CardBrace />
      </div>
    )

  };

export default Main;
