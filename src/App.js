import React from "react";
import "./App.css";
import ReactGA from "react-ga";

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_CODE_GTAG;

ReactGA.initialize(gaTrackingId);
ReactGA.pageview("Initial page");

function App() {
  console.log("Tracking id: ", gaTrackingId);

  const handleClick = (number) => {
    ReactGA.event({
      action: `click ${number}`,
      category: `category ${number}`,
    });
  };
  const handleClickSpecial = () => {
    ReactGA.event({
      action: "action with label",
      category: "category with label",
      label: "my label",
    });
  };
  const sendMultiple = () => {
    ReactGA.send({
      hitType: "event",
      eventAction: "action multiple",
      eventCategory: "category multiple",
      eventLabel: "label multiple",
      custom: "custom 1",
      custom2: "custom 2",
      custom3: "custom 3",
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        {/*  */}
        <h2>Google Analytics</h2>
      </header>

      <div className="main>">
        <h3>Action /Category</h3>
        <button onClick={() => handleClick(1)}>
          action:click 1; category:category 1
        </button>
        <button onClick={() => handleClick(2)}>
          action:click 2; category:category 2
        </button>
        <h3>Action /Category /label</h3>
        <button onClick={() => handleClickSpecial()}>
          {" "}
          action: 'action with label', category: 'category with label', label:
          'my label',
        </button>
        <h3>Action /Category /label/ custom 1/custom 2/custom 3</h3>
        <button onClick={() => sendMultiple()}>
          action: 'action multiple', category: 'category multiple', label:
          'label multiple', custom: 'custom 1', custom2: 'custom 2', custom3:
          'custom 3',
        </button>
      </div>

      <footer>
        <span>Repository: </span>
        {
          <a
            className="App-link"
            href="https://github.com/Jordi-GV-Ikea/react-analytic-ga.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/Jordi-GV-Ikea/react-analytic-ga.git
          </a>
        }
        <p>trackingID: G-8FR4R9M037</p>
        <h3>react ga / gtag snippet</h3>
      </footer>
    </div>
  );
}

export default App;
