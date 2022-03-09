import React from 'react';
import './App.css';
import ReactGA from 'react-ga';

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_CODE;

ReactGA.initialize(gaTrackingId);
ReactGA.pageview('Initial page');

function App() {
  console.log('Tracking id: ',gaTrackingId)


const handleClick = (number) => {
  const actionSelected = `click ${number}`;
  const categorySelected = `category ${number}`;
    console.log('HandleClick was clicked');
  ReactGA.event({
    action: actionSelected,
    category: `category ${number}`,
  })
}
const handleClickSpecial = () => {
  ReactGA.event({
    action: 'custom',
    category: 'myCategory',
    label: 'new value',
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
      <p>deploy: 8</p>
      <p>Action 1 // Category 1</p>
        <button onClick={() => handleClick(1)}>click 1</button>
        <p>Action 2 / Category 2</p>
        <button onClick={() => handleClick(2)}>click 2</button>
        <p>Action custom/ Category myCategory / label: new value</p>
        <button onClick={() => handleClickSpecial()}>with label</button>
        <p>ID flujo: 3335026835</p>
        <p>ID medicion: G-TV6XY5N8M6</p>
    </div>
  );
}

export default App;
