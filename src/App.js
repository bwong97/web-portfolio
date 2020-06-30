import React from 'react';
import './App.css';
import Home from './components/Home'
import Projects from './components/Projects'

import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import Pdf from './docs/resume.pdf';


function App() {
  return (
    <div>
      <header>
        <Router>
          <Navbar bg="light" variant="light" expand="lg">
            <NavLink to="/home" activeClassName="selected">Home</NavLink>
            <NavLink to="/projects" activeClassName="selected">Projects</NavLink>
            <NavLink to={Pdf} target="_blank" download>Resume</NavLink>
            <a href="mailto:bradleywong.work@gmail.com?Subject=Hi Bradley">Email</a>
          </Navbar>
          <Route path='/' exact component={Home} />
          <Route path='/home' render={()=> <Redirect to='/' />} />
          <Route path='/projects' component={Projects} />
        </Router>
      </header>
    </div>
  );
}

export default App;
