import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Skill from './components/Skill';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Home/>
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
      </div>
    )
  }
}

export default App;