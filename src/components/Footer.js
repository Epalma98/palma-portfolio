import React from 'react';
import '../styles/Footer.css';


function FooterComponent() {
    return (
      <footer className="footer" class="Footer" position="fixed">
        <div className="icons social-icon" >
            <a href="https://github.com/Epalma98"> 
                <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="Github" id="github-icon" target="_blank" rel="noopener noreferrer"></img>
            </a>
            <a href="https://www.linkedin.com/in/elipalma/"> 
                <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" id="linkedin-icon" target="_blank" rel="noopener noreferrer"></img>
            </a>
            <a href="https://stackoverflow.com/"> 
                <img src="https://img.icons8.com/color/48/000000/stackoverflow.png" alt="Stack Overflow" id="stack-icon" target="_blank" rel="noopener noreferrer"></img>
            </a>
        </div>
      </footer>
    );
  }

  export default FooterComponent;