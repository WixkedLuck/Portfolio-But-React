import React from 'react';
import '../styles/Footer.css';
import {FaGithubAlt} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaCodepen} from "react-icons/fa";
function Footer() {
    return (
        <footer className='center'>
    <p>Follow me!</p>
       <a className='Icons' title="GitHub" href="https://github.com/WixkedLuck/" target="_blank"><FaGithubAlt/></a> 
       <a className='Icons' title="LinkedIn" href="https://www.linkedin.com/in/david-a-hybner/" target="_blank"><FaLinkedinIn/></a> 
       <a className='Icons' title="Codepen" href="https://codepen.io/WixkedLuck" target="_blank"  ><FaCodepen/></a> 
        </footer>
    );
}

export default Footer;