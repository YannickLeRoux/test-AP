import React, { Component } from 'react';
import './App.css';

import LandingPage from './routes/LandingPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
