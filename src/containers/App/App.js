import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './style.css';

import HomePage from '../HomePage'
import EditorPage from '../EditorPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/edit" component={EditorPage} />
            { /*
            <Route path="/features" component={FeaturePage} />
            <Route path="" component={NotFoundPage} /> 
            */}
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;