import React from 'react';
import Header from './Components/Header.js'
import Gallery from './Components/Gallery.js'
import About from './Components/About.js'
import CardBrace from './Components/CardBrace.js'
import ImageGrid from './Components/ImageGrid.js';
import Team from './Components/Team.js';

  const Main = () => {

    return (
      <div className="Main">
        <Header />
        <Gallery />
        <About />
        <CardBrace />
        <ImageGrid />
        <Team />
      </div>
    )

  };

export default Main;
