import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import moondollarsImg from '../../assets/moon-dollars-fullstack-app.png';
import craftAndCocktailsImg from '../../assets/CraftAndCocktail.png';
import jateImg from '../../assets/JATEhomepage.png';
import weatherAppImg from '../../assets/weatherApp.png';


const styles = {
  portfolioBox: {
    margin: '20px',
    paddingRight: '30px',
    paddingLeft: '30px',
  },
  portfolioText: {
    fontSize: '20px',
  },
  h1: {
    textAlign: 'center',
    color: '#333',
  },
  gridStyle: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
    gap: "1rem"
  },
  projectImg: {
    width: "20rem",
    margin: "1rem",
  }
};

export default function Portfolio() {
  return (
    <div style={styles.portfolioBox}>
      <h1 style={styles.h1}>Portfolio</h1>

      <div class="container" style={styles.gridStyle}>
        <div class="row">
          <div class="col-3">
            <a href="https://whispering-garden-84047.herokuapp.com/"> 
              <img style={styles.projectImg} src={moondollarsImg} alt="MoonDollars Fullstack App"></img>
            </a>
          </div>
          <div class="col-3">
            <a href="https://sadiemantlo.github.io/Project-1/">
              <img style={styles.projectImg} src={craftAndCocktailsImg} alt="Craft and Cocktail App"></img>
            </a>
          </div>
          <div class="col-3">
            <a href="https://epalma-text-editor.herokuapp.com/"> 
              <img style={styles.projectImg} src={jateImg} alt="J.A.T.E Text Editor"></img>
            </a>
          </div>
          <div class="col-3">
            <a href="https://epalma98.github.io/Weather-Dashboard/"> 
              <img style={styles.projectImg} src={weatherAppImg} alt="Weather App"></img>
            </a>
          </div>
        </div>
      </div>  

    </div>
  );
}
