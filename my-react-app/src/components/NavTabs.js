import React from 'react';
import '../styles/NavTabs.css'
import backgroundImg from '../assets/background.jpg';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
const styles = {
    nameStyle: {
        color: 'white',
      
    },
    backgroundStyle: {
        backgroundColor: 'black',
    },
    headerName: {
        color: 'black',
        fontSize: '20px',
        textAlign: 'left',

    }

}

function NavTabs({ currentPage, handlePageChange }) {
  return (
    
    <ul className="nav nav-tabs" id="nav-tabs">
      <div className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </div>
      <div className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
        </div>
      <div className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </div>
      <div className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
        
        
      </div>
    </ul>
  );
}

export default NavTabs;
