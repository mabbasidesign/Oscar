import React, { Component } from 'react';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <h2 className="logo"><a>Oscars 2019</a></h2>
          <ul>
            <li><a>Home</a></li>
            <li><a>Best Actors</a></li>
            <li><a>Best Actress</a></li>
            <li><a>Best Films</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
