import React from 'react';
import './App.css';
import ReactGA from 'react-ga';

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_CODE;

ReactGA.initialize(gaTrackingId);
ReactGA.pageview('Initial page');

function App() {
  console.log('Tracking id: ',gaTrackingId)


const handleClick = () => {
  console.log('HandleClick was clicked');
  ReactGA.event({
    action: 'click',
    category: 'button'
  })
}
  return (
    <div className="App">
      <header className="App-header">
        <h4>
          Google Analytics using reac-ga
        </h4>
{        <a className="App-link"
          href="https://zen-hamilton-5670d5.netlify.app/"
          target="_blank"
          rel="noopener noreferrer">https://zen-hamilton-5670d5.netlify.app/</a>
}      </header>
      <p>deploy: 6</p>
        <button onClick={handleClick}>click</button>
        <p>ID flujo: 3335026835</p>
        <p>ID medicion: G-TV6XY5N8M6</p>
    </div>
  );
}

export default App;
