import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './app/home'
import Music from './app/music'
import Sports from './app/sports'
import Entertainers from './app/entertainers'
import Events from './app/events'
import News from './app/news'
import Article, {Article2} from './app/news/article'
import About from './app/about'
import Contact from './app/contact'

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} /> 
        <Route path="/Music" component={Music} />
        <Route path="/Sports" component={Sports} />
        <Route path="/Entertainers" component={Entertainers} />
        <Route path="/Events" component={Events} />
        <Route path="/News" component={News} />
        <Route path="/News/article1" component={Article} />
        <Route path="/News/article2" component={Article2} />
        <Route path="/About-us" component={About} />
        <Route path="/Contact-us" component={Contact} />
      </Router>
      
    </>
  );
}

export default App;
