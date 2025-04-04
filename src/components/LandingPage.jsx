import React from 'react';
import styles from './LandingPage.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Header */}
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>ResumeScanner+</div>
          <button className={styles.actionButton}>
            Looking for a Job
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: "8px" }}
            >
              <path 
                d="M5 12H19M19 12L12 5M19 12L12 19" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Make Your Resume <span className={styles.highlight}>ATS-Ready</span> in <span className={styles.highlight}>seconds!</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Get instant, AI-powered feedback to optimize your resume for ATS systems and impress recruiters.
          </p>
          <button className={styles.ctaButton}>+ UPLOAD RESUME →</button>
        </div>
      </section>
    </div>
  );
};

export default Home;