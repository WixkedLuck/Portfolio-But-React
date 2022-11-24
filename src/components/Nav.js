import React from 'react';

import '../styles/Navbar.css';
import  {FaCode} from "react-icons/fa";
 function Nav({currentPage ,handlePageChange}) {
  
  
    return (
        <nav className="navbar navbar-expand-lg bg">
        <div className="container-fluid">
            <FaCode/>
          <a className="navbar-brand"  >David Hybner</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={currentPage === 'About' ? 'nav-link active' : ' nav-link notactive'}  href="#about" onClick={() => handlePageChange('About')}>About</a>
              </li>
              <li className="nav-item">
                <a className={currentPage === 'Projects' ? 'nav-link active' : ' nav-link notactive'}href="#projects" onClick={() => { handlePageChange('Projects')}}>Projects</a>
              </li>
              <li className="nav-item">
                <a className={currentPage === 'Contact' ? 'nav-link active' : ' nav-link notactive'} href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a>
              </li>
              <li className="nav-item">
                <a className={currentPage === 'Resume' ? 'nav-link active' : ' nav-link notactive'} href='#resume' onClick={() => handlePageChange('Resume')}>Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    );
}
export default Nav;