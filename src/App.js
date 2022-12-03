import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';

import "@leenguyen/react-flip-clock-countdown/dist/index.css"

import VideoBg from "../src/assets/video3.mp4"

import "./styles.css"

const App = () => {
  return <section className='page' >
    <div className="overlay"></div>
    <video src={VideoBg} autoPlay loop muted></video>
    <div className="page__content">
      <h1>
        CoalUnion 
      </h1>
      <h2>Launching Soon!</h2>
      <img class="logo" src="https://cdn.glitch.global/5e8af274-91e7-4fb5-97f4-c5839d809c90/logo-nobg-v1.0.png?v=1669643929046" alt="CoalUnion-logo"></img>

      {/* <h3>Learn More</h3> */}

      <FlipClockCountdown
        to={new Date("2023-02-25").getTime() + 24 * 3600 * 1000 + 5000}
        className='flip-clock'
        labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
        duration={0.5}
      />
      <button className="btn"> <a href="https://twitter.com/coalunion">Get Ready</a>  </button>
    </div>
    
    </section >;
};

export default App;
