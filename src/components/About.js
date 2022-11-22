import React from 'react';
import {FaGem} from "react-icons/fa";
 import nuke from '../images/second.png';
import '../styles/About.css';
export default function About() {
  const style = {  maxWidth: "300px" }
    return (
      
      <section className="about App" id="about-me">
        <h1 className='Title'>About Me: </h1>
        <FaGem style={style}/>
       <img className='image' alt='nuke' src={nuke} style={style}/> 
        <p className="about--paragraph">
       
        </p>
      </section>
    );
  }
  
 