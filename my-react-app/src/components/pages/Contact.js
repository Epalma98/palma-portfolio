import React from 'react';

const styles ={
  h1: {
    textAlign: 'center',
    color: '#333',
  },
  contactForm: {
    margin: '20px',
    maxWidth: '600px',
  },
  inputs: {
    marginRight: '10px',
    marginBottom: '10px',
  },
  comments: {
    marginBottom: '10px',
    marginRight: '10px',
  },
  button: {
    marginTop: '10px',
    marginBottom: '10px',
  }
}

export default function Contact() {
  return (
    <div>
      <h1 style={styles.h1}>Contact</h1>
      <div class="contact-form" style={styles.contactForm}>
        <div>
          <label for="exampleFormControlInput1" class="form-label" style={styles.inputs}>Name:</label>
          <input type="name" class="form-control" id="exampleFormControlInput1" style={styles.inputs} placeholder="name"></input>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label" style={styles.inputs}>Email address:</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" style={styles.inputs} placeholder="name@example.com"></input>
        </div>
        <div class="form-floating">
          <label for="floatingTextarea2" style={styles.comments}>Comments</label> 
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
        </div>
        <button style={styles.button}>Submit</button>
      </div>
    </div>
  );
}
