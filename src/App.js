import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './app/home'
import Music from './app/music';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} /> 
        <Route path="/Music" component={Music} />
      </Router>
      
    </>
  );
}

export default App;
