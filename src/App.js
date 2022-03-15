import React from "react";
import "./App.css";
import ReactGA from "react-ga";

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_CODE;

ReactGA.initialize(gaTrackingId);
ReactGA.pageview("Initial page");

function App() {

  const handleClick = (number) => {
    ReactGA.event({
      action: `click_${number}`,
      category: `category_${number}`,
    });
  };
  const handleClickSpecial = () => {
    window.sendEvent({
      event_category: "self_serve_actions",
      event_action: "delivery_tracking_active",
      event_label: "<id> - <order type> - <status>",
    });
  };

  const sendMultiple = () => {
    ReactGA.send({
      hitType: "event",
      eventAction: "action_multiple",
      eventCategory: "category_multiple",
      eventLabel: "label_multiple",
      custom: "custom_1",
      custom2: "custom_2",
      custom3: "custom_3",
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        {/*  */}
        <h3> Analytic Team India </h3>
        <p className="subtitle">UA tag</p>
      </header>

      <div className="main>">
        <h4>1-lowercase text and remove blank spaces</h4>
        <button onClick={() => handleClick(1)}>
          action:click_1; category:category_1
        </button>
        <button onClick={() => handleClick(2)}>
          action:click_2; category:category_2
        </button>

        <h4>2-window.sendEvent()</h4>
        <button onClick={() => handleClickSpecial()}>
          event_category: 'self_serve_actions',   event_action:
          'delivery_tracking_active',   event_label: id-ordertype-status
        </button>

        {/* 
        <h4>Action /Category /label/ custom 1/custom 2/custom 3</h4>
        <button onClick={() => sendMultiple()}>
          action: 'action multiple', category: 'category multiple', label:
          'label multiple', custom: 'custom 1', custom2: 'custom 2', custom3:
          'custom 3',
        </button> */}
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
        <p>TrackingID:UA-222880655-1 / react-ga</p>
      </footer>
    </div>
  );
}

export default App;
