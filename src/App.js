import React from 'react';
import './App.css';
import Home from './components/Home'
import Projects from './components/Projects'

import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import Pdf from './docs/resume.pdf';

function App() {
  let d = new Date()
  let currentYear = d.getFullYear()
  return (
    <div className="App">
      <header>
        <Router>
          <Navbar bg="dark" variant="light" expand="lg">
            <NavLink to="/home" className="Nav-style" activeClassName="selected">Home</NavLink>
            <NavLink to="/projects" className="Nav-style" activeClassName="selected">Projects</NavLink>
            <NavLink to={Pdf} target="_blank" download className="Nav-style">Resume</NavLink>
            <a className="Nav-style" href="mailto:bradleywong.work@gmail.com?Subject=Hi Bradley">Email</a>
          </Navbar>
          <Route path='/' exact component={Home} />
          <Route path='/home' render={()=> <Redirect to='/' />} />
          <Route path='/projects' component={Projects} />
        </Router>
      </header>
      <footer className="App-footer">
        <small>&copy; Copyright {currentYear}, bradleywong.xyz</small>
      </footer>
    </div>
  );
}

export default App;
