import React from 'react';
import '../styles/Project.css';
import blog from '../images/Blogger.svg';
import Fizz from '../images/Fizz.svg';
import Bug from '../images/SMolBytes.svg'
import Calc from '../images/Loan.svg';
import Weather from '../images/Weather.svg';
import Loc from '../images/android-chrome-512x512.png';
import Team from '../images/Myteam.PNG';

function Projects() {
    return(
        <section className="about" id="about-me">
        <h1 className='Title'>Projects</h1>
        
        <div class="container text-center">
  <div class="row row-col-3">
  <div class="col col-style">
      <h5>Cyberware</h5>
      <img src={Loc} alt='Cyberware'></img>
      
          <span className='smart'>Learning center for all things cyber security</span><br></br>
      
      <a className='linked'  href="https://github.com/WixkedLuck/CyberWare" target="blank" rel="noreferrer">Code</a>
      <a className='linked' href="https://wixkedluck.github.io/CyberWare/" target="blank" rel="noreferrer">Site</a>
    </div>
    <div class="col col-style">
      <h5>SmolByte</h5>
      <img src={Bug} alt='Small-Bytes'></img>
      <span className='smart'>Site for team based bug tracking</span><br></br>
      <a className='linked'  href="https://github.com/WixkedLuck/Feature-Tracker" target="blank" rel="noreferrer">Code</a>
      <a className='linked' href="https://smolbytes.herokuapp.com/" target="blank" rel="noreferrer">Site</a>
    </div>
    
    
    <div class="col col-style">
      <h5>Weather Dashboard</h5>
      <img src={Weather} alt='Weather-Dashboard'></img>
      <span className='smart'>About to go out? Why not check the forecast.</span><br></br>
      <a className='linked'  href="https://github.com/WixkedLuck/W3ATHER-DASHBOARD" target="blank" rel="noreferrer">Code</a>
      <a className='linked' href="https://wixkedluck.github.io/W3ATHER-DASHBOARD/" target="blank" rel="noreferrer">Site</a>
    </div>
  </div>

  <div class="row row-col-3">
    <div class="col col-style">
     <h5>Morgage Calculator</h5>
     <img src={Calc} alt='Loan-Shark'></img>
     <span className='smart'>Learn to budget better</span><br></br>
     <a className='linked'  href="https://github.com/WixkedLuck/Loan-Shark" target="blank" rel="noreferrer">Code</a>
      <a className='linked' href="https://wixkedluck.github.io/Loan-Shark/index.html" target="blank" rel="noreferrer">Site</a>
    </div>

    <div class="col col-style">
      <h5 >Blogger</h5>
      <img src={blog} alt='Blog-Site'></img>
      <span className='smart'>Blog site</span><br></br>
      <a className='linked'  href="https://github.com/WixkedLuck/MVC-Tech-Blog" target="blank" rel="noreferrer">Code</a>
      <a className='linked' href="https://mvc-tech-blog2.herokuapp.com/" target="blank" rel="noreferrer">Site</a>
    </div>
    
    <div class="col col-style">
    <h5>FizzBuzz</h5>
      <img src={Fizz} alt='FizzBuzz'></img>
      <span className='smart'>Now featuring react</span><br></br>
      <a className='linked'  href="https://github.com/WixkedLuck/Fizz-Buzz" target="blank" rel="noreferrer">Code</a>
      <a className='linked' href="https://wixkedluck.github.io/Fizz-Buzz/" target="blank" rel="noreferrer">Site</a>
      
    </div>
  </div>
 
  </div>
      
       
        
      </section> 
    );
}
export default Projects;