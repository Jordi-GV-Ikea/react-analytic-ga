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
        {/*  */}
        <h2>
          Google Analytics using react-ga
        </h2>
     </header>
        <button onClick={() => handleClick(1)}>action:click 1; category:category 1</button>
        <button onClick={() => handleClick(2)}>action:click 2; category:category 2</button>
        <button onClick={() => handleClickSpecial()}>action: 'custom',
    category: 'myCategory',
    label: 'new value',</button>
        <footer>
        <span>Repository: </span>
{        <a className="App-link"
          href="https://github.com/Jordi-GV-Ikea/react-analytic-ga.git"
          target="_blank"
          rel="noopener noreferrer">https://github.com/Jordi-GV-Ikea/react-analytic-ga.git</a>}
          <p>ID flujo: 3335026835</p>
          <p>ID medicion: G-TV6XY5N8M6</p>
          <p>deploy: 1</p>
      </footer>
    </div>
  );
}

export default App;
