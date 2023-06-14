import React from 'react';

const styles ={
  h1: {
    textAlign: 'center',
    color: '#333',
  },
  container: {
    margin: '30px',
  },
  download: {
    fontSize: '20px',
  }
}

export default function Resume() {
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Resume</h1>
      <a href="Palma_resume.pdf" style={styles.download} download>Download my resume</a>
      <h2>Front-end Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      <h2>Back-end Proficiencies</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
    </div>
  );
}