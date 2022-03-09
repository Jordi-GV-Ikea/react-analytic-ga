import React from 'react';
import logo from './logo.svg';
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
        <img src={logo} className="App-logo" alt="logo" />
{/*         <a className="App-link"
          href="https://wonderful-mestorf-270cbb.netlify.app/"
          target="_blank"
          rel="noopener noreferrer">https://wonderful-mestorf-270cbb.netlify.app/</a>
 */}      </header>
      <p>deploy: 2</p>
        <button onClick={handleClick}>click</button>
    </div>
  );
}

export default App;
