import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Project from './components/Project';
import Contact from './components/Contact';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route exact path='/resume' element={<Resume />}></Route>
        <Route exact path='/projects' element={<Project />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
      </Routes>
    </Router >

  </React.StrictMode>,
  document.getElementById('root')
);
