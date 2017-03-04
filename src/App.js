import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slideshow from './slideshow';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      showButton: true
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
      showButton: false
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        { this.state.showButton ? <Button onClick={this._onButtonClick}>Button</Button> : null }
        { this.state.showComponent ? <Slideshow /> : null }
      
      </div>
    );
  }
}

export default App;
