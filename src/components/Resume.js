import React from 'react';
 import '../styles/Resume.css';
 import { BsFillCloudDownloadFill } from "react-icons/bs";
export default function Resume() {

 
    return(
        <section >
        <h1 className='Title'>Resume</h1>
        
        <a className='icons'   href='./David_Hybner.docx.pdf' download={"David_Hybner_Resume"}  >download <BsFillCloudDownloadFill size={40} /></a>
        
        <h2 className='Subtitle'>Summary</h2>
        




        <p>
        <span className="boldly">Full Stack Web developer</span> with a background in <span className="boldly">Computer Science</span>, having an appetite for continuous learning. Experienced collaborator and leader 
        in <span className="boldly">fast paced</span> working environments while maintaining a high degree of <span className="boldly">accuracy</span> and expectations. <span className="boldly">Passion</span> for developing 
        full scale web applications while working with servers, APIs, databases, and user interfaces. Known among staff as a <span className="boldly">strong leader</span> and trainer. 
        </p>
        <h2 className='Subtitle'>Technical Skills</h2>
        <h3 className='center'>Languages:</h3>
        <p className='center'>HTML <span className="boldly">|</span> CSS <span className="boldly">|</span> 
          JavaScript ES6+ <span className="boldly">|</span> jQuery <span className="boldly">|</span>
         Node.js <span className="boldly">|</span> Java <span className="boldly">|</span>
          Python <span className="boldly">|</span> MySQL <span className="boldly">|</span> MATLAB <span className="boldly">|</span> MongoDB </p>
       
        <h3 className='center'>Tools:</h3>
        <p className='center'>Git <span className="boldly">|</span> Materialize CSS <span className="boldly">|</span>
         Bootstrap 5 <span className="boldly">|</span> Tailwind <span className="boldly">|</span>
          GitHub <span className="boldly">|</span> Jest <span className="boldly">|</span>
           Express.js <span className="boldly">|</span> Sequelize.js <span className="boldly">|</span> React.js <span className="boldly">|</span> HandleBars.js <span className="boldly">|</span> Apollo Graph Ql <span className="boldly">|</span> Webpack </p>
        

        <h2  className='Subtitle'>Education</h2>
        <h3 className='center'>University of Minnesota College of Continuing and Professional Studies Coding Boot Camp</h3>
        <li className='center list'>Full Stack Web Development Certificate </li>
        <h3 className='center'>Virginia State University</h3>
        <li className='center list'>Bachelor of Science Degree, Computer Science Degree Candidate.</li>
        <h3 className='center'>Louisiana State University Continued Education</h3>
        <li className='center list'>AWS Cloud Practitioner Certificate </li>
        <h3 className='center'>John Tyler Community College</h3>
        <li className='center list'>Associates in Science Degree, General Studies, and General Education Certificate</li>
        
        <h2  className='Subtitle'>Work Experience</h2>
        <h3 className='center '>Target Team Member</h3>
        <h4 className='center'>Tech Specialist Plus Mobile | Style Consultant | Closing Expert: </h4>
        <ul className='space'>
        <li className=' lineLi'>Mobile device activation and troubleshooting</li>
        <li className=' lineLi'>Data transfers on both IOS and Android</li>
        <li className='lineLi'>Leverage tech routines to prioritize guest 
        interaction and engagement while balancing tasks</li>
        <li className='lineLi '>Stocking, setting, and unloading merchandise </li>
        </ul>

        <h4 className='center'>Guest Advocate | Front of Store Attendant | Guest Service:  </h4>
        <ul className='space'>
        <li className=' lineLi'>Communicate with guests to build an inclusive guest experience</li>
        <li className=' lineLi'>Fulfilled all retail clerk duties including POS, sales and maintaining cleanliness of store</li>
        <li className='lineLi'>Used expert level communication skills while conveying high level product knowledge</li>
        <li className='lineLi '>Lead team members ranging from 3-20 at a time </li>
        </ul>

        <h3 className='center '>YMCA Childwatch Attendant</h3>
        <ul className='space'>
        <li className=' lineLi'>Interact and build relations with parents and children</li>
        <li className=' lineLi'>Maintain cleanliness and safety of equipment, reporting suspicious activity.</li>
        <li className='lineLi'>Build and maintain positive relations with members and staff. </li>
        
        </ul>

      </section> 
    );
}
