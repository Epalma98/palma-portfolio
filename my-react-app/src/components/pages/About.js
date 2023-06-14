import React from 'react';
import headshotImg from '../../assets/Headshot.jpg';
import '../../styles/About.css';

const styles = {
  headshotStyle: {
    top: '26%',
    left: '5%',
    maxWidth: '15%',
    borderRadius: '50%',
    marginLeft: '42%',
  },
  bio: {
    paddingRight: '30px',
    paddingLeft: '30px',
    alignItems: 'center',
    margin: 'auto',
    width: '50%',
  },
  bioText: {
    fontSize: '20px'
  },
  h1: {
    textAlign: 'center',
    color: '#333',
  },
}

export default function About() {
  return (
    <div style={styles.bio}>
      <h1 style={styles.h1}>Eli Palma</h1>
      <img src={headshotImg} style={styles.headshotStyle} alt="Eli Palma"></img>
      <h2 style={styles.h1}>Welcome to my Portfolio!</h2>
      
      <p style={styles.bioText}>
      Born and raised in central California, I moved to San Diego after graduating high school.
      Here, I studied business administration at San Diego Mesa College. After completing my Associates Degree,
      I transferred to San Diego State University in pursuit of a Bachelors Degree in Marketing.
      While working in school, I worked in membership sales at Fit Athletic Club in Little Italy.
    <br></br>
    <br></br>
      After graduating from SDSU, I felt less inclined to pursue a career in
      marketing and instead looked into UC San Diego's software development bootcamp. 
      For the past 6 months, I have been learning the fundamentals of full stack web development while also 
      creating a portfolio of projects to showcase my skills. I am excited to continue learning new skills 
      in this ever-changing field!
      </p>
    </div>
  );
}
