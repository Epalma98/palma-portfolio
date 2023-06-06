import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import moondollarsImg from '../../assets/moon-dollars-fullstack-app.png';
import craftAndCocktailsImg from '../../assets/CraftAndCocktail.png';
import jateImg from '../../assets/JATEhomepage.png';
import weatherAppImg from '../../assets/weatherApp.png';
import ceraWorks from '../../assets/ceraWorks.png';


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
  },
  caption: {
    textAlign: "center",
  }
};

export default function Portfolio() {
  return (
    <div style={styles.portfolioBox}>
      <h1 style={styles.h1}>Portfolio</h1>

      <div class="container" style={styles.gridStyle}>
        <div class="row">
          <div class="col-3">
            <a href="https://limitless-citadel-10525.herokuapp.com/"> 
              <img style={styles.projectImg} src={ceraWorks} alt="CeraWorks Fullstack App"></img>
            </a>
            <p style={styles.caption}>CeraWorks Car Detailing Service webpage</p>
          </div>
          <div class="col-3">
            <a href="https://whispering-garden-84047.herokuapp.com/"> 
              <img style={styles.projectImg} src={moondollarsImg} alt="MoonDollars Fullstack App"></img>
            </a>
            <p style={styles.caption}>MoonDollars Fullstack App</p>
          </div>
          <div class="col-3">
            <a href="https://sadiemantlo.github.io/Project-1/">
              <img style={styles.projectImg} src={craftAndCocktailsImg} alt="Craft and Cocktail App"></img>
            </a>
            <p style={styles.caption}>Craft & Cocktail App</p>
          </div>
          <div class="col-3">
            <a href="https://epalma-text-editor.herokuapp.com/"> 
              <img style={styles.projectImg} src={jateImg} alt="J.A.T.E Text Editor"></img>
            </a>
            <p style={styles.caption}>J.A.T.E Text Editor</p>
          </div>
          {/* <div class="col-3">
            <a href="https://epalma98.github.io/Weather-Dashboard/"> 
              <img style={styles.projectImg} src={weatherAppImg} alt="Weather App"></img>
            </a>
            <p style={styles.caption}>Weather App</p>
          </div> */}
        </div>
      </div>  

    </div>
  );
}
