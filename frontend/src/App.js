import React from 'react';
import LoadingCrane from './Components/LoadingCrane.js'
import Footer from './Components/Footer.js'
import Title from './Components/Title.js'

  const Main = () => {

    return (
      <div className="Main">
        <Title />
        <LoadingCrane />
        <Footer />
      </div>
    )

  };

export default Main;
