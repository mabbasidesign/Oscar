import React, { Component } from 'react';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/navbar" exact component={Navbar} />
            <Route path="/home" exact component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
