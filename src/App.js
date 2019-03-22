import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quote from "./Quote";
import Lamp from "./Lamp";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "working": true,
      logoSpeed: "App-logo"
    };
  }

  handleClick = () => {
    this.setState({ "working": !this.state.working });
    this.state.working === true ? this.setState({ logoSpeed: "App-logo" }) : this.setState({ logoSpeed: "App-logo-speed" })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.logoSpeed} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button onClick={this.handleClick}>Speed button</button>
        </header>
        <Lamp />
        <Lamp />
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
      </div>
    );
  }
}

export default App;
