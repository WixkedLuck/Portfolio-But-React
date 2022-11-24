import React from 'react';
import '../styles/Footer.css';
import {FaGithubAlt} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaCodepen} from "react-icons/fa";
function Footer() {
    return (
        <footer className='center'>
    <p>Follow me!</p>
       <a className='Icons' title="GitHub" href="https://github.com/WixkedLuck/" target="_blank" rel="noreferrer"><FaGithubAlt size={40}/></a> 
       <a className='Icons' title="LinkedIn" href="https://www.linkedin.com/in/david-a-hybner/" target="_blank" rel="noreferrer"><FaLinkedinIn size={40}/></a> 
       <a className='Icons' title="Codepen" href="https://codepen.io/WixkedLuck" target="_blank" rel="noreferrer" ><FaCodepen size={40}/></a> 
        </footer>
    );
}

export default Footer;