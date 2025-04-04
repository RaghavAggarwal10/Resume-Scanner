/* eslint-disable */
import React from 'react';

import ResumeScannerCard1 from '../assets/ResumeScannerCard1.png';
import ResumeScannerCard2 from '../assets/ResumeScannerCard2.png';
import ResumeScannerCard3 from '../assets/ResumeScannerCard3.png';
import ResumeScannerCard4 from '../assets/ResumeScannerCard4.png';
import ResumeScannerCard5 from '../assets/ResumeScannerCard5.png';

import styles from './ResumeScanner.module.scss';

const DisplayCard = ( ) => (
    <div className={styles.DisplayMain}>
        <div className={styles.DisplayDivMainCont}>
            <div className={styles.MiddleClass}> 
                <p>Relax! We've got your back.....</p>
            </div>
            <div className={styles.CardClassResume}>
                <h1>Let Resume Scanner+ optimize your resume for ATS success!</h1>
            </div>
        </div>
            <div className={styles.parent}>
                <div className={styles.div1}><img src={ResumeScannerCard1} alt='image' /></div>
                <div className={styles.div2}><img src={ResumeScannerCard4} alt='image' /></div>
                <div className={styles.div3}><img src={ResumeScannerCard3} alt='image' /></div>
                <div className={styles.div4}><img src={ResumeScannerCard5} alt='image' /></div>
                <div className={styles.div5}><img src={ResumeScannerCard2} alt='image' /></div>
            </div>

    </div>
)

export default DisplayCard