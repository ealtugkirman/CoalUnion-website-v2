import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';

import "@leenguyen/react-flip-clock-countdown/dist/index.css"

import VideoBg from "../src/assets/video.mp4"

import "./styles.css"

const App = () => {
  return <section className='page' >
    <div className="overlay"></div>
    <video src={VideoBg} autoPlay Loop muted></video>
    <div className="page__content">
      <h1>
        Launching Soon
      </h1>
      <h3>Learn More</h3>

      <FlipClockCountdown
        to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
        className='flip-clock'
        labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
        duration={0.5}
      />
      <button className="btn"> <a href="https://google.com">Learn More</a>  </button>
    </div>
    
    </section >;
};

export default App;
