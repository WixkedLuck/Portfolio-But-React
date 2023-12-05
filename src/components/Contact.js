import React, {useRef} from 'react';
import '../styles/Contact.css';
import {FaGithubAlt} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaCodepen} from "react-icons/fa";
import emailjs from '@emailjs/browser';

export default function ContactUs  () {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_tipirs6', 'template_316rbxk', form.current, 'FDfP_izbBnC__vuhL')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        
      <form ref={form} onSubmit={sendEmail} className='padding-round'>
        <p>Thank you for taking the time to reach out to me and viewing my portfolio! I look forward to speaking with you!</p>
        <p>Please fill out this form below and I will get back to you as soon as I can!</p>
        <label>Name:</label>
        <input type="text" name="user_name" className='spacing' />
        <label>Email:</label>
        <input type="email" name="user_email" className='spacing'/><br></br>
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
  };
