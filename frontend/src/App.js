import React from 'react';
import Header from './Components/Header.js'
import Gallery from './Components/Gallery.js'
import About from './Components/About.js'
import CardBrace from './Components/CardBrace.js'
import ImageGrid from './Components/ImageGrid.js';
import Team from './Components/Team.js';
import Services from './Components/Services.js';
import Footer from './Components/Footer.js';
import {useState} from 'react';

  const Main = () => {

    const [aboutY, setAboutY] = useState();

    const getPosition = (myRef) => {
      const y = myRef.current.offsetTop;
      setAboutY(y);
    };

    return (
      <div className="Main">
        <Header aboutY={aboutY}/>
        <Gallery />
        <About getPosition={getPosition} />
        <CardBrace />
        <ImageGrid />
        <Team />
        <Services />
        <Footer />
      </div>
    )
  };

export default Main;
