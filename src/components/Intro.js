import React from 'react'
import './Intro.css';
import { Button } from './Button';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IconContext } from "react-icons";
//import { Link } from 'react-router-dom';
import profile_photo from '../assets/profile_photo.jpg';
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-name">
          <span>Hi! I Am </span>
          <span>Siba Prasad Choudhury</span>
          <span>
            Full-stack developer with work experinece in ReactJS, NodeJS, ExpressJS, MongoDB, PostgreSql, Event-driven Architectures and Docker + Kubernetes.
          </span>
        </div>
        <Link to='/contact'>
          <Button buttonStyle='btn--outline' buttonSize='btn--medium' buttonColour='blue' className='btn--width'>Hire Me!</Button>
        </Link>
        <div className="intro-icons">
          <IconContext.Provider value={{ color: 'navy', size: 28 }}>
            <div>
              <a href="https://github.com/SibaPrasadTech" target="_blank" rel="noreferrer">
                <FaGithub></FaGithub>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/siba-prasad" target="_blank" rel="noreferrer">
                <FaLinkedin></FaLinkedin>
              </a>
            </div>
          </IconContext.Provider>
        </div>
      </div>

      <div className="intro-right">
        <img src={profile_photo} alt="Unable to load profile"></img>
      </div>
    </div >
  )
}

export default Intro