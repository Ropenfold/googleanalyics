import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactGA from "react-ga";

function initializeReactGA() {
  ReactGA.initialize("UA-138250476-1");
  ReactGA.pageview("/homepage");
}

class App extends Component {
  onButtonClick = () => {
    console.log("button pressed");
    ReactGA.event({
      category: "buttonpressing",
      action: "Pressed THE button"
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.onButtonClick}>press for event</button>
        </header>
      </div>
    );
  }
}

export default App;
