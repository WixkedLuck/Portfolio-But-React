import React from 'react';
import '../styles/Project.css';
import blog from '../images/blog.PNG';
import Fizz from '../images/FizzBuzz.png';
import Calc from '../images/Calculate.PNG';
import Weather from '../images/weathertrial.PNG';
import Loc from '../images/Loc1.PNG';
import Team from '../images/Myteam.PNG';
import {FaCode} from "react-icons/fa";
function Projects() {
    return(
        <section className="about" id="about-me">
        <h1 className='Title'>Projects</h1>
        <div class="container text-center">
  <div class="row row-col-3">
    <div class="col">
      <h5>BackStock</h5>
      <img src={Loc}></img>
      <a className='linked'  href="https://github.com/WixkedLuck/project-2-BackStock" target="blank">Code</a>
      <a className='linked' href="https://backstock-23.herokuapp.com/" target="blank">Site</a>
    </div>
    <div class="col">
      <h5>FizzBuzz</h5>
      <img src={Fizz}></img>
      <a className='linked'  href="https://github.com/WixkedLuck/Fizz-Buzz" target="blank">Code</a>
      <a className='linked' href="https://wixkedluck.github.io/Fizz-Buzz/" target="blank">Site</a>
    </div>
    <div class="col">
      <h5>Weather Dashboard</h5>
      <img src={Weather}></img>
      <a className='linked'  href="https://github.com/WixkedLuck/W3ATHER-DASHBOARD" target="blank">Code</a>
      <a className='linked' href="https://wixkedluck.github.io/W3ATHER-DASHBOARD/" target="blank">Site</a>
    </div>
  </div>

  <div class="row row-col-3">
    <div class="col">
     <h5>Morgage Calculator</h5>
     <img src={Calc}></img>
     <a className='linked'  href="https://github.com/WixkedLuck/Loan-Shark" target="blank">Code</a>
      <a className='linked' href="https://wixkedluck.github.io/Loan-Shark/index.html" target="blank">Site</a>
    </div>
    <div class="col">
      <h5 >Blogger</h5>
      <img src={blog}></img>
      <a className='linked'  href="https://github.com/WixkedLuck/MVC-Tech-Blog" target="blank">Code</a>
      <a className='linked' href="https://mvc-tech-blog2.herokuapp.com/" target="blank">Site</a>
    </div>
    <div class="col">
      <h5>Team Generator</h5>
      <img src={Team}></img>
      <a className='linked'  href="https://github.com/WixkedLuck/Team-Profile-Generator" target="blank">Code</a>
      
    </div>
  </div>
 
  </div>
      
       
        
      </section> 
    );
}
export default Projects;