import React from 'react';
import '../styles/About.css';
import me from '../images/David.jpg';
export default function About() {
 
    return (
      
      <section className="about App" id="about-me">
        <h1 className='Title'>About Me: </h1>

     
       <p>I am a senior majoring in <span className="boldly">Computer Science</span> at Virginia State University and a recent graduate from the coding bootcamp at the University of Minnesota. During this time, I have taken the time to learn more about <span className="boldly">full
      stack web development</span> . Ever since I first picked up a video game I was intrigued with
      knowing the how and what behind each title. Learning to code has only peaked my intrest more as to what I can
      acomplish. While going through this <span className="boldly">bootcamp</span> I have gained a passion for <span className="boldly">developing full scale web applications</span>
      while working with servers, APIs, databases, and creating interactive user interfaces.</p>
     
      <img className='photo' title='Me' alt='Me' src={me}></img>
      <h1 className=' Title'>Tech Stack</h1>
   
     <div className='center'> 
     
    
          
          
      
          
      </div>  
      <div class="container text-center">
      <div class="row">
    <div class="col">
      <h3>Mern Stack</h3>
         {/* Mern Stack    */}
         <i title='MongoDB' class="devicon-mongodb-plain dev"></i>
       <i title='Express.js' class="devicon-express-original dev"></i>
       <i title='React.js' class="devicon-react-original dev"></i>
       <i title='Node.js' class="devicon-nodejs-plain dev"></i>
    </div>
    <div class="col">
     <h3>MVC Stack</h3>
     <i title='HTML5' class="devicon-html5-plain dev"></i>     
      <i title='CSS3' class="devicon-css3-plain dev"></i>
      <i title='JavaScript' class="devicon-javascript-plain dev"></i>
      <i title='jQuery' class="devicon-jquery-plain dev"></i>
      <i title='MySQL' class="devicon-mysql-plain-wordmark dev"></i>
      <i title='Handlebars.js' class="devicon-handlebars-plain dev"></i>
    </div>
    <div class="col">
    <h3>Testing</h3>
    <i title='Jest' class="devicon-jest-plain dev"></i>
    </div>
    <div class="col">
     <h3>Version Control</h3>
       <i title='GitLab' class="devicon-gitlab-plain dev"></i>
       <i title='Git' class="devicon-git-plain dev"></i>      
       <i title='GitHub' class="devicon-github-original dev"></i>
    </div>
   

  </div>




  <div class="row">
 
    
    
  </div>
  <div class="row">
    <div class="col">
    <h3>Deployment sites</h3>
    <i title='Heroku' class="devicon-heroku-original dev" ></i> 
    <i title='Github' class="devicon-github-original dev"></i>
    </div>
    
    <div class="col">
    <h3>Frameworks</h3>
      <i title='Tailwind' class="devicon-tailwindcss-plain dev"></i>          
    <i title='Bootstrap' class="devicon-bootstrap-plain dev"></i>
    </div>
  </div>

  
  <div class="row">
    <div class="col">
     <h3>Daily Essentials</h3>
       
     <i title='Slack' class="devicon-slack-plain dev"></i>
     <i title='Visual Studio' class="devicon-vscode-plain dev"></i>
     
               
    </div>
    
    <div class="col">
    <h3>Other Languages</h3>
    <i title='Java' class="devicon-java-plain dev"></i>
       <i title='Python' class="devicon-python-plain dev"></i> 
    
    </div>
  </div>
  
  </div>



  <div class="container text-center">
 
  </div>
      
          
    
      
          
     
      </section>
      
     
          
    );
  }
  
 