import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './style.css';

import Navbar from '../../components/Navbar'

import HomePage from '../HomePage'
import EditorPage from '../EditorPage'

class App extends Component {
  // state 설정
  constructor(){
      super()
      
      this.state = {
        // 토글 on/off
        collapsed: true,
      }
      this.toggleNavbar = this.toggleNavbar.bind(this)
    }
  //함수 생성
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar
          collapsed={this.state.collapsed}
          toggleNavbar={this.toggleNavbar}
        />
        <div className="App-header">
          <Switch>
            <Route exact path="/" component={EditorPage} />
            <Route path="/edit" component={EditorPage} />
            { /*
            <Route path="/features" component={FeaturePage} />
            <Route path="" component={NotFoundPage} /> 
            */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
