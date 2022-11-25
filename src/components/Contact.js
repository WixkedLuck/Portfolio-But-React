import React from 'react';
import '../styles/Contact.css';
import {FaGithubAlt} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaCodepen} from "react-icons/fa";
function Contact() {
    return(
        <section className="about" id="about-me">
         <form id="survey-form">
        <h1 id="title">Contact Me:</h1>
    <p id="description"> Thank you for taking the time to reach out!</p>
        <label for="name" id="name-label">Name:</label>
        <input type="text" id="name" required placeholder="Enter your name"></input> 
        <label for="email" id="email-label">Email:</label>
        <input type="email" id="email" required placeholder="Enter your email"></input> 
        <p id="description"> While you're at it why not follow me? </p>
        <a className='Icons' title="GitHub" href="https://github.com/WixkedLuck/" target="_blank" rel="noreferrer"><FaGithubAlt size={40}/></a> 
       <a className='Icons' title="LinkedIn" href="https://www.linkedin.com/in/david-a-hybner/" target="_blank" rel="noreferrer"><FaLinkedinIn size={40}/></a> 
       <a className='Icons' title="Codepen" href="https://codepen.io/WixkedLuck" target="_blank" rel="noreferrer" ><FaCodepen size={40}/></a> 
        <p>Additional Comments here: </p>
        <textarea id="comments" placeholder='Awesome Portfolio!'></textarea>
        <button type="submit" id="submit">Submit</button>
       
    </form>
      
   
      </section> 
    );
}
export default Contact;