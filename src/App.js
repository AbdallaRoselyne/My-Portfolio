import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="about-container">
      <div className="about-image">
        <img src="/mcf.jpg" alt="My Profile" />
      </div>
      <div className="about-content">
        <h2>Hello, I am Roselyne</h2>
        <p>
        I am a Computer Science major deeply driven by using technology ethically for global human rights, equity, and sustainable development. My interests span cryptography, network security, AI ethics, and climate tech, all with a focus on positive societal impact. Alongside my studies, I volunteer extensively for youth education, women's empowerment, and climate justice causes. I dedicate my free time to non-profits that offer marginalized communities access to technology resources, aiming to bridge digital gaps. Looking forward, I aspire to advocate as a tech policy leader for diversity, inclusion, and ethical standards. My goal is to utilize my technical skills to foster a more equitable and just world, where technology serves as a force for meaningful and positive change.
        </p>
      </div>
    </div>
      <Footer />
    </div>
  );
}

export default App;


