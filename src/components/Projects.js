import React from 'react';
import '../styles/Project.css';
import blog from '../images/Blogger.svg';
import Fizz from '../images/Fizz.svg';
import Bug from '../images/SMolBytes.svg'
import Calc from '../images/Loan.svg';
import Weather from '../images/Weather.svg';
import Loc from '../images/android-chrome-512x512.png';


function Projects() {
    return(
        <section className="about" id="about-me">
        <h1 className='Title '>Projects</h1>
        <div className='pad'>
        <h4 className=' center  pt-5 pb-5 '>Web Development</h4>
        </div>
        <div class="container text-center ">
  <div class="row row-col-3">
  <div class="col col-style">
      <h5>Cyberware</h5>
      <img src={Loc} alt='Cyberware'></img>
      <div className='p-3'>
          <span className='smart '>Learning center for all things cyber security</span><br></br>
       
          </div>
      <a className='linked'  href="https://github.com/WixkedLuck/CyberWare" target="blank" rel="noreferrer">Code</a>
      <a className='linked' href="https://wixkedluck.github.io/CyberWare/" target="blank" rel="noreferrer">Site</a>
      
      <div className='pt-3'>
      <span className='gcol'>HTML | CSS | JavaScript | JQuery | Email.js | Prism.js | Construct 3 | Local Storage |
      </span>
      </div>
   
    </div>
    <div class="col col-style">
      <h5>SmolByte</h5>
      <img src={Bug} alt='Small-Bytes'></img>
      <div className='p-3'>
      <span className='smart'>Site for team based bug tracking</span><br></br>
      </div>
      <a className='linked'  href="https://github.com/WixkedLuck/Feature-Tracker" target="blank" rel="noreferrer">Code</a>
      <a className='linked' href="https://smolbytes.herokuapp.com/" target="blank" rel="noreferrer">Site</a>
      <div className='pt-3'>
      <span className='gcol'>HTML | CSS | JavaScript | Moongoose | Express.js | React.js | Node.js |  
      </span>
      </div>
    </div>
    
    
    <div class="col col-style">
      <h5>Weather Dashboard</h5>
      <img src={Weather} alt='Weather-Dashboard'></img>
      <div className='p-3'>
      <span className='smart'>About to go out? Why not check the forecast.</span><br></br>
     </div>
     <a className='linked'  href="https://github.com/WixkedLuck/W3ATHER-DASHBOARD" target="blank" rel="noreferrer">Code</a>
      <a className='linked' href="https://wixkedluck.github.io/W3ATHER-DASHBOARD/" target="blank" rel="noreferrer">Site</a>
      <div className='pt-3'>
      <span className='gcol'>HTML | CSS | JavaScript | Local Storage | API |
      </span>
      </div>
    </div>
    
  </div>

  <div class="row row-col-3">
    <div class="col col-style">
     <h5>Morgage Calculator</h5>
     <img src={Calc} alt='Loan-Shark'></img>
     <div className='p-3'>
     <span className='smart'>Learn to budget better</span><br></br>
     </div>
     <a className='linked'  href="https://github.com/WixkedLuck/Loan-Shark" target="blank" rel="noreferrer">Code</a>
      <a className='linked' href="https://wixkedluck.github.io/Loan-Shark/index.html" target="blank" rel="noreferrer">Site</a>
      <div className='pt-3'>
      <span className='gcol'>HTML | CSS | JavaScript | Animate.css | Prism.js |
      </span>
      </div>
    </div>

    <div class="col col-style">
      <h5 >Blogger</h5>
      <img src={blog} alt='Blog-Site'></img>
      <div className='p-3'>
      <span className='smart'>Blog site</span><br></br>
     </div>
      <a className='linked'  href="https://github.com/WixkedLuck/MVC-Tech-Blog" target="blank" rel="noreferrer">Code</a>
      <a className='linked' href="https://mvc-tech-blog2.herokuapp.com/" target="blank" rel="noreferrer">Site</a>
      <div className='pt-3'>
      <span className='gcol'>HTML | CSS | JavaScript | Handlebars.js | MVC Stack |
      </span>
      </div>
    </div>

    <div class="col col-style">
    <h5>FizzBuzz</h5>
      <img src={Fizz} alt='FizzBuzz'></img>
      <div className='p-3'>
      <span className='smart'>Now featuring react</span><br></br>
      </div>
      <a className='linked'  href="https://github.com/WixkedLuck/Fizz-Buzz" target="blank" rel="noreferrer">Code</a>
      <a className='linked' href="https://wixkedluck.github.io/Fizz-Buzz/" target="blank" rel="noreferrer">Site</a>
      <div className='pt-3'>
      <span className='gcol'>HTML | CSS | JavaScript | React.js | 
      </span>
      </div>
    </div>
    
  </div>
 
  </div>
      
       
        
      </section> 
    );
}
export default Projects;