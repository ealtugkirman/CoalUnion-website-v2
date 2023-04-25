import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';

import "@leenguyen/react-flip-clock-countdown/dist/index.css"
import Logo from './assets/CoalLogo.png'

import VideoBg from "../src/assets/video4.mp4"

import "./styles.css"

const App = () => {
  return <section className='page' >
    <div className="overlay"></div>a
    <video src={VideoBg} autoPlay loop muted></video>
    <div className="page__content text-2xl">
      <h1>
        CoalUnion 
      </h1>
      <h2>Launching Soon!</h2>
      <img className="logo shadow-2xl" src={Logo} alt="CoalUnion-logo"></img>

      {/* <h3>Learn More</h3> */}

      <FlipClockCountdown
        to={new Date("2023-07-25").getTime() + 24 * 3600 * 1000 + 5000}
        className='flip-clock'
        labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
        duration={0.5}
      />
      <button className="btn"> <a  className='link-color' href="https://twitter.com/coalunion">Get Ready</a>  </button>
    </div>
    
    </section >;
};

export default App;
