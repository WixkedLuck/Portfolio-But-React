import React from 'react';
import '../styles/About.css';
import me from '../images/David.jpg';
export default function About() {
  const style = {  maxWidth: "300px"  }
    return (
      
      <section className="about App" id="about-me">
        <h1 className='Title'>About Me: </h1>

     
       <p>I am a senior majoring in <span className="boldly">Computer Science</span> at Virginia State University and currently learning to be a <span className="boldly">full
      stack web developer</span> at the University of Minnesota. Ever since I first picked up a video game I was intrigued with
      knowing the how and what behind each title. Learning to code has only peaked my intrest more as to what I can
      acomplish. While going through this <span className="boldly">bootcamp</span> I have gained a passion for <span className="boldly">developing full scale web applications</span>
      while working with servers, APIs, databases, and creating interactive user interfaces.</p>
      <img className='photo' title='Me' alt='Me' src={me}></img>
     
      </section>
      
    );
  }
  
 