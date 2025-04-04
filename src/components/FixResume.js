import React from 'react';
import FallingText from '../FallingText/FallingText';
import styles from '../AtsLandingPage.module.scss';

const FixResume = () => (
    <div className={styles.FixResumeContainer}>
        {/* create due to falling not working on align-items */}
        <div className={styles.mainSelectionContainer}>
            <h1 style={{display:'flex', justifyContent:'center', marginTop:'3rem', color:'#999999', textAlign:'center'}}>Why your Resume isn’t <br/> getting seen?</h1>
            <button className={styles.FixNowButton}>Fix Now →</button>
        </div>
        <div style={{height:'30rem', display:'flex',justifyContent:'center'}}>
            <FallingText
                text="Missing Skills Formatting Issues ATS Rejection No METRIC POOR GRAMMAR OVERUSED BUZZWORDS Insufficient Action Words"
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
    </div>
)

export default FixResume