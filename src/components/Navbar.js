import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => { setClick(prevClick => !prevClick) };

  //const closeMobileMenu = () => { setClick(false) };
  const showButton = () => {
    if (window.innerWidth <= 900) {
      setButton(false)
    }
    else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])
  window.addEventListener('resize', showButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to='/' className="navbar-logo">
            <MdFingerprint className='navbar-icon' />
            Siba Prasad
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes className='fa-times' /> : <FaBars className='fa-bars' />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-links">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-links">
                Projects
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to='/contact' className="btn-link">
                  <Button buttonStyle='btn--outline'>
                    Contact
                  </Button>
                </Link>
              ) : (
                <Link to='/contact' className="btn-link">
                  <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                    Contact
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>

  )
}

export default Navbar