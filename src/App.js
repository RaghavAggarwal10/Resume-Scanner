import React from "react";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FallingText from "./components/FallingText";
import DisplayCard from "./components/ResumeScanner";
import Home from "./components/LandingPage";
import styles from './App.module.scss';

function App() {
  return (
    <div>


      <Home />
      <div style={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
      <h1 style={{display:'flex', justifyContent:'center', marginTop:'3rem', color:'#999999', textAlign:'center'}}>Why your Resume isn’t <br/> getting seen?</h1>
      <button className={styles.FixNowButton}>Fix Now →</button>
      </div>
      <div style={{height:'20rem', display:'flex',justifyContent:'center'}}>
          
          <FallingText
          text={`Missing Skills Formatting Issues ATS Rejection No METRIC POOR GRAMMAR OVERUSED BUZZWORDS Insufficient Action Words`}
          highlightWords={["Missing Skills", "Formatting Issues", "ATS Rejection", "No METRIC", "POOR GRAMMAR","OVERUSED BUZZWORDS","Insufficient Action Words"]}
          highlightClass="highlighted"
          trigger="scroll"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="2rem"
          mouseConstraintStiffness={0.9}
          />
         </div>
      <DisplayCard />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;