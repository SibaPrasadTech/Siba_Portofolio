import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './components/Intro';
import Resume from './components/Resume';
import Project from './components/Project';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Intro />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/projects' element={<Project />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </Router >
  );
}

export default App;
