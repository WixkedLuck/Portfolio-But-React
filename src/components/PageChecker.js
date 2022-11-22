import React, { useState } from 'react';
import Contact from './Contact';
import About from './About';
import Nav from './Nav';
import Projects from './Projects';
import Resume from './Resume';


export default function PageChecker() {  
    const [currentPage, setCurrentPage] = useState('About');   


const renderPage = () => {
  if (currentPage === 'About') {
    console.log("in contact");
    return <About />;
   
  }
    if (currentPage === 'Contact') {
      console.log("in contact");
      return <Contact />;
     
    }
    if (currentPage === 'Projects') {
      console.log("in project");
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      console.log("in resume");
      return <Resume />;
    }
    return ;
  };

  
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    
      <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
     
       
      {renderPage()}
      
      </div> 
  );
}