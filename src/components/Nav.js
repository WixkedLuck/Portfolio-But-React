import React from 'react';
import '../styles/Navbar.css';
import {FaBiohazard} from "react-icons/fa";

export default function Nav(props) {
  const { isClicked, setIsClicked } = props;
    return (
        <nav className="navbar navbar-expand-lg bg">
        <div className="container-fluid">
            <FaBiohazard/>
          <a className="navbar-brand" href="#">David Hybner</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={() => setIsClicked(true)}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setIsClicked(true)}>Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setIsClicked(true)}>Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " onClick={() => setIsClicked(true)}>Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}