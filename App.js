import React from 'react';

import './App.css';

import Sidebar from './Sidebar.js';

import Reviews from './Reviews.js';

import Average from './Average.js';

import Analysis from './Analysis';

import Visitors from './Visitors';

class App extends React.Component {

  render() {
    return (
      <div id = 'container'>
        
        <div className = "Sidebar">
          <Sidebar />
        </div>

        <div className = "Reviews">
          <Reviews />
        </div>

        <div className = "Average">
          <Average />
        </div>

        <div className = "Analysis">
          <Analysis />
        </div>

        <div className = "Visitors">
          <Visitors />
        </div>
      
      </div>

        )
  }
}

export default App
