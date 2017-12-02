import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactbulma';
import styled from 'styled-components';


const StyledButton = styled(Button)`
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <StyledButton primary>Primary</StyledButton>
      </div>
    );
  }
}

export default App;
