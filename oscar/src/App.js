import React, { Component } from 'react';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Oscar 2019" />
        <Home title="The Oscar Winners" />
      </div>
    );
  }
}

export default App;
