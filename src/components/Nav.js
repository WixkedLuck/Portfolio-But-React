import React from 'react';
import '../styles/Navbar.css';
import {FaBiohazard} from "react-icons/fa";
 function Nav({currentPage ,handlePageChange}) {

    return (
        <nav className="navbar navbar-expand-lg bg">
        <div className="container-fluid">
            <FaBiohazard/>
          <a className="navbar-brand"  >David Hybner</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link "  href="#about" onClick={() => handlePageChange('About')}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects" onClick={() => handlePageChange('Projects')}>Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href='#resume' onClick={() => handlePageChange('Resume')}>Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
export default Nav;