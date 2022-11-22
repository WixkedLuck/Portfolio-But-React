import React from 'react';
import '../styles/Contact.css';
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
      
        <p>Additional Comments here: </p>
        <textarea id="comments" placeholder='Awesome Portfolio!'></textarea>
        <button type="submit" id="submit">Submit</button>
       
    </form>
      
   
      </section> 
    );
}
export default Contact;