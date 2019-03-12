import React, { Component } from 'react';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Actors from './components/actors';
import Actress from './components/actress';
import Films from './components/films';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar title="Oscar2019" />
            <Switch>
              <Route exact path="/" render={() => <Home title="Oscar Winnwers" />} />
              <Route path="/actors" component={Actors} />
              <Route path="/actress" component={Actress} />
              <Route path="/films" component={Films} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
