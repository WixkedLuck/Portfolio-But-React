import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import './App.css';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="App">
    <Nav isClicked={isClicked} setIsClicked={setIsClicked}></Nav>
    <main id="main">
        {isClicked ? <About></About> : <About></About>}
    
      </main>
    </div>
  );
}

export default App;
