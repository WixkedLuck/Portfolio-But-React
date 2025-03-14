import React, { useRef } from 'react';
import '../styles/Contact.css';

import emailjs from '@emailjs/browser';
import {FaGithubAlt} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
export default function ContactUs() {
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
    <div className='row m-3 pb-5' >

      <div className='col mt-5'>
        <p className='fs-4'>Thank you for taking the time to reach out to me and viewing my portfolio! I look forward to speaking with you!</p>
        <p className='fs-4'>Please fill out this form  and I will get back to you as soon as I can!</p>
        <div class=' wid mx-auto' >
          <h5 className='m-4'>Quick Contact</h5>
          <div className='mag'>
        <a className='Icons ' title="GitHub" href="https://github.com/WixkedLuck/" target="_blank" rel="noreferrer"><FaGithubAlt size={40}/></a> 
       <a className='Icons ' title="LinkedIn" href="https://www.linkedin.com/in/david-a-hybner/" target="_blank" rel="noreferrer"><FaLinkedinIn size={40}/></a>
       </div>
        </div>
      </div>
      <div className='col'>
        <div className='centerIt'>
          <form ref={form} onSubmit={sendEmail} className='padding-round fs-4'>
            <label>Name:</label>
            <input type="text" name="user_name" className='spacing' /><br></br>
            <label>Email:</label>
            <input type="email" name="user_email" className='spacing' /><br></br>
            <label className='pb-1'>Message:</label>
            <textarea name="message" className='in' /><br></br>
            <input type="submit" value="Send" className='spacing2 ' />

          </form>
        </div>
      </div>
    </div>

  );
};
