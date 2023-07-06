import React from 'react';
import Header from './Components/Header.js'
import Gallery from './Components/Gallery.js'
import About from './Components/About.js'
import CardBrace from './Components/CardBrace.js'
import ImageGrid from './Components/ImageGrid.js';
import Team from './Components/Team.js';
import Services from './Components/Services.js';
import Footer from './Components/Footer.js';
import Testimonials from './Components/Testemonials.js';
import {useState} from 'react';

  const Main = () => {

    const [aboutY, setAboutY] = useState();
    const [projectY, setProjectY] = useState();
    const [teamY, setTeamY] = useState();
    const [servicesY, setServicesY] = useState();
    const [testemonialsY, setTestemonialsY] = useState();

    const getAboutPosition = (myRef) => {
      const y = myRef.current.offsetTop;
      setAboutY(y);
    };

    const getProjectPosition = (myRef) => {
      const y = myRef.current.offsetTop;
      setProjectY(y);
    };

    const getTeamPosition = (myRef) => {
      const y = myRef.current.offsetTop;
      setTeamY(y);
    };

    const getServicesPosition = (myRef) => {
      const y = myRef.current.offsetTop;
      setServicesY(y);
    };

    const getTestemonialsPosition = (myRef) => {
      const y = myRef.current.offsetTop;
      setTestemonialsY(y);
    };

    return (
      <div className="Main">
        <Header aboutY={aboutY} projectY={projectY} teamY={teamY} servicesY={servicesY} testemonialsY={testemonialsY}/>
        <Gallery />
        <About getPosition={getAboutPosition} />
        <CardBrace />
        <ImageGrid getPosition={getProjectPosition} />
        <Team getPosition={getTeamPosition}/>
        <Services getPosition={getServicesPosition} />
        <Footer />
        <Testimonials getPosition={getTestemonialsPosition}/>
      </div>
    )
  };

export default Main;
