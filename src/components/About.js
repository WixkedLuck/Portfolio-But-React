import React from 'react';
import '../styles/About.css';
import me from '../images/David.jpg';
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import LSU from '../images/aws.png';
import UoM from '../images/bootcamp.png';
import Cs from '../images/intro.png';
import HR from '../images/hackerrank.png';
import RWD from '../images/RWD.png';
import Grad from '../images/grad.jpg';
import JSE from '../images/JSE.jpg';
import SSG from '../images/SSG.jpg';
import GH from '../images/GH.jpg';
import W11 from '../images/W11.jpg';
import TB from '../images/tb.png';
import OE from '../images/OE.jpg';

export default function About() {

  return (

    <section className="about App" id="about-me">
      <div class="row">
        <div class="col-8">
          <h1 className='Title'>About Me: </h1>
          <p class="sizeIt marf">I am a senior majoring in <span className="boldly">Computer Science</span> at Virginia State University and a recent graduate from the coding bootcamp at the University of Minnesota. During this time, I have taken the time to learn more about <span className="boldly">full
            stack web development</span> . Ever since I first picked up a video game I was intrigued with
            knowing the how and what behind each title. Learning to code has only peaked my intrest more as to what I can
            acomplish. While going through this <span className="boldly">bootcamp</span> I have gained a passion for <span className="boldly">developing full scale web applications </span>
            while working with servers, APIs, databases, and creating interactive user interfaces.</p>
          {/* <div className='center'>
            <a href='https://lsu.badgr.com/public/assertions/arl4SZnvQDuRuBvlVt2cnA?identity__email=dah1998@yahoo.com' target='blank'><img src={LSU} alt='AWS Cloud Practitioner' className='half m-4 '></img></a>
            <a href='https://www.credly.com/badges/6e64de14-33c3-46b5-98d3-ca12ae2f053e/linked_in_profile' target='blank'><img src={Cs} alt='Cisco Intro to CS' className='half  m-4 '></img></a>
            <a href='https://www.credly.com/badges/3c98ddba-2e11-45bf-ab7e-baf22153361a/linked_in?t=ronl8g' target='blank'> <img src={UoM} alt='UoM Coding Bootcamp' className='half  m-4 '></img></a>


          </div>
          <div className='center'>

            <a href='https://www.hackerrank.com/certificates/344f82ccfdff' target='blank'><img src={HR} alt='UoM Coding Bootcamp' className='thd  m-4 '></img></a>
            <a href='https://www.freecodecamp.org/certification/WixkedLuck/responsive-web-design' target='blank'><img src={RWD} alt='UoM Coding Bootcamp' className='thrd  m-4 '></img></a>

          </div> */}
        </div>
        <div class="col-4">
          <img className='photo center' title='Me' alt='Me' src={me}></img>
          <div class="center icon">
            <a className='Icons' title="GitHub" href="https://github.com/WixkedLuck/" target="_blank" rel="noreferrer"><FaGithubAlt size={40} /></a>
            <a className='Icons' title="LinkedIn" href="https://www.linkedin.com/in/david-a-hybner/" target="_blank" rel="noreferrer"><FaLinkedinIn size={40} /></a>
            <a className='Icons' title="Codepen" href="https://codepen.io/WixkedLuck" target="_blank" rel="noreferrer" ><FaCodepen size={40} /></a>
          </div>
        </div>
      </div>








      <h1 className=' Title'>Tech Stack</h1>

      <div className='center'>






      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col col-style">
            <h3>Mern Stack</h3>
            {/* Mern Stack    */}
            <i title='MongoDB' class="devicon-mongodb-plain dev"></i>
            <i title='Express.js' class="devicon-express-original dev"></i>
            <i title='React.js' class="devicon-react-original dev"></i>
            <i title='Node.js' class="devicon-nodejs-plain dev"></i>
          </div>
          <div class="col col-style">
            <h3>MVC Stack</h3>
            <i title='HTML5' class="devicon-html5-plain dev"></i>
            <i title='CSS3' class="devicon-css3-plain dev"></i>
            <i title='JavaScript' class="devicon-javascript-plain dev"></i>
            <i title='jQuery' class="devicon-jquery-plain dev"></i>
            <i title='MySQL' class="devicon-mysql-plain-wordmark dev"></i>
            <i title='Handlebars.js' class="devicon-handlebars-plain dev"></i>
          </div>
          <div class="col col-style">
            <h3>Testing</h3>
            <i title='Jest' class="devicon-jest-plain dev"></i>
          </div>
          <div class="col col-style">
            <h3>Version Control</h3>
            <i title='GitLab' class="devicon-gitlab-plain dev"></i>
            <i title='Git' class="devicon-git-plain dev"></i>
            <i title='GitHub' class="devicon-github-original dev"></i>
          </div>


        </div>




        <div class="row">



        </div>
        <div class="row">
          <div class="col col-style">
            <h3>Deployment sites</h3>
            <i title='Heroku' class="devicon-heroku-original dev" ></i>
            <i title='Github' class="devicon-github-original dev"></i>
          </div>

          <div class="col col-style">
            <h3>Frameworks</h3>
            <i title='Tailwind' class="devicon-tailwindcss-plain dev"></i>
            <i title='Bootstrap' class="devicon-bootstrap-plain dev"></i>
          </div>
        </div>


        <div class="row">
          <div class="col col-style">
            <h3>Daily Essentials</h3>

            <i title='Slack' class="devicon-slack-plain dev"></i>
            <i title='Visual Studio' class="devicon-vscode-plain dev"></i>


          </div>

          <div class="col col-style">
            <h3>Other Languages</h3>
            <i title='Java' class="devicon-java-plain dev"></i>
            <i title='Python' class="devicon-python-plain dev"></i>

          </div>
        </div>

      </div>



      <div class="row">
        <div class="col-4">
          <img className='photo2 center' title='Me' alt='Me' src={Grad}></img>
          <div class="center ick">
            <a className='Icons ' title="GitHub" href="https://github.com/WixkedLuck/" target="_blank" rel="noreferrer"><FaGithubAlt size={40} /></a>
            <a className='Icons' title="LinkedIn" href="https://www.linkedin.com/in/david-a-hybner/" target="_blank" rel="noreferrer"><FaLinkedinIn size={40} /></a>
            <a className='Icons' title="Codepen" href="https://codepen.io/WixkedLuck" target="_blank" rel="noreferrer" ><FaCodepen size={40} /></a>
          </div>
        </div>
        <div class="col-8">
          <h1 className='Title'>Additional Content: </h1>
          <p class="sizeIt">Constant learning is essential for developers as it fuels <span className='boldly'>professional growth</span> and keeps skills relevant in the ever-evolving landscape of technology. In the dynamic field of software development, new languages, frameworks, and tools continually emerge, making it imperative for developers to stay abreast of the latest trends. Continuous learning not only <span className='boldly'>enhances technical expertise</span> but also fosters adaptability and <span className='boldly'>problem-solving skills</span>. As developers explore new concepts and methodologies, they gain a deeper understanding of best practices and can apply <span className='boldly'>innovative solutions</span> to challenges. Moreover, <span className='boldly'>staying updated</span> on industry advancements positions developers to contribute meaningfully to projects, <span className='boldly'>collaborate effectively</span> with diverse teams, and <span className='boldly'>remain competitive</span> in a rapidly changing job market. Embracing a mindset of <span className='boldly'>continuous learning</span> not only benefits individual career trajectories but also contributes to the overall progress and innovation within the technology community.</p>


        </div>

      </div>
      <div className='center'>

        <a href='https://www.hackerrank.com/certificates/344f82ccfdff' target='blank'><img src={HR} alt='UoM Coding Bootcamp' className='thd  m-4 '></img></a>
        <a href='https://www.freecodecamp.org/certification/WixkedLuck/responsive-web-design' target='blank'><img src={RWD} alt='UoM Coding Bootcamp' className='thrd  m-4 '></img></a>

      </div>
      <div className='center'>
      <a href='https://www.credly.com/badges/3c98ddba-2e11-45bf-ab7e-baf22153361a/linked_in?t=ronl8g' target='blank'> <img src={UoM} alt='UoM Coding Bootcamp' className='half  m-4 '></img></a>

        <a href='https://lsu.badgr.com/public/assertions/arl4SZnvQDuRuBvlVt2cnA?identity__email=dah1998@yahoo.com' target='blank'><img src={LSU} alt='AWS Cloud Practitioner' className='half m-4 '></img></a>
        <a href='https://www.credly.com/badges/6e64de14-33c3-46b5-98d3-ca12ae2f053e/linked_in_profile' target='blank'><img src={Cs} alt='Cisco Intro to CS' className='half  m-4 '></img></a>
        <a href='https://badgr.com/public/assertions/apoj-CyFRfKv1cKZm5IfvQ?identity__email=dah1998@yahoo.com' target='blank'> <img src={TB} alt='Tiger Trailblazer' className='half  m-4 '></img></a>


      </div>
      <div className='center'>
        <a href='https://www.linkedin.com/learning/certificates/3ed8dcaf847c0ad176f4d5c0cacdebbddcdb542af1d0cdcc01e3be7e5b38d249?u=138601754' target='blank'><img src={GH} alt='Learning GutHub' className='half m-4 '></img></a>
        <a href='https://www.linkedin.com/learning/certificates/d092c0fc8f351b9292389b77396c6e2660ac3a73191a78471dd2682ce2219953?u=138601754' target='blank'><img src={JSE} alt='JavaScript Essentials Training' className='half  m-4 '></img></a>
        <a href='https://www.linkedin.com/learning/certificates/1d22cd18a2e21942a5c7c9093684ccf578ac117705742db6366e460b9816055a?u=138601754' target='blank'> <img src={SSG} alt='Six Sigma Green Belt ' className='half  m-4 '></img></a>
        <a href='https://www.linkedin.com/learning/certificates/0ebd794158b822dd145ac777272003c522aed3c22a0dd895dc89f02e97414194?u=138601754' target='blank'> <img src={W11} alt='Windows 11 Training' className='half  m-4 '></img></a>
        <a href='https://www.linkedin.com/learning/certificates/826e5d0c9a6cbbe13a65c8631047366f9332e60bda318d8812810656ba5f76fb?u=138601754' target='blank'> <img src={OE} alt='Operational Excellence' className='half  m-4 '></img></a>

      </div>



    </section>



  );
}

