import React, { Component } from 'react';
import GitHubWidget from './components/GitHubWidget';
import './App.css';

class App extends Component {
  render() {
    const widgetStyle = {
      display: 'flex',
      justifyContent: 'center',

    }
    return (
      <div className="App" style={widgetStyle}>
        <GitHubWidget />

      </div>
    );
  }
}

export default App;
