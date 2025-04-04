import React from 'react';
import styles from './HowItWorks.module.scss';
import image from '../assets/image.png'; // Ensure this path is correct

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Your Resume",
      description: "Easily upload your resume in a supported format like PDF or DOCX.",
      image1: "/images/upload-resume.png" // Ensure these paths are correct
    },
    {
      number: "02",
      title: "Scan and Analyse",
      description: "Our AI engine evaluates your resume against industry standards and ATS criteria.",
      image2: "/images/scan-analyze.png"
    },
    {
      number: "03",
      title: "Get detailed Report",
      description: "Receive a comprehensive report with actionable insights to enhance your resume.",
      image3: "/images/detailed-report.png"
    }
  ];

  const basicFeatures = [
    "ATS Keywords",
    "Impact Score",
    "Brevity Score",
    "Section wise scores",
    "Skill based Scores",
    "Action Verb Suggestions"
  ];

  const premiumFeatures = [
    "ATS Keywords",
    "Impact Score",
    "Brevity Score",
    "Section wise scores",
    "Skill based Scores",
    "Action Verb Suggestions"
    // Assuming Premium includes all Basic features as per the image
  ];

  return (
    <section className={styles.howItWorksSection}>
      <div className={styles.container}>
        {/* Pricing Section */}
        <div className={styles.header}>
          <div className={styles.badge}>HOW IT WORKS</div>
          <h2 className={styles.title}>Unlock Resume Scanner + Today!</h2>
        </div>
        <div className={styles.pricingContainer}>
          {/* Basic Plan */}
          <div className={styles.pricingCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.price}>₹499</h3>
              <p className={styles.pricePeriod}>3 Resume Scans</p>
            </div>
            <div className={styles.cardContent}>
              <button className={styles.buyButton}>Buy Plan</button>
              <ul className={styles.featuresList}>
                {basicFeatures.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Central Infographic */}
          <div className={styles.infoGraphic}>
            <img src={image} alt="Resume Transformation" />
          </div>

          {/* Premium Plan */}
          <div className={styles.pricingCard}>
            <div className={styles.recommendedBadge}>Recommended</div>
            <div className={styles.cardHeader}>
              <h3 className={styles.price}>₹999</h3>
              <p className={styles.pricePeriod}>6 Resume Scans</p>
            </div>
            <div className={styles.cardContent}>
              <button className={styles.buyButton}>Buy Plan</button>
              <ul className={styles.featuresList}>
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className={styles.sectionSeparator}></div>

        {/* How It Works Section */}
        <div className={styles.header}>
          <div className={styles.badge}>HOW IT WORKS</div>
          <h2 className={styles.title}>Get started in 3 steps</h2>
        </div>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.imageContainer}>
                <img src={step.image} alt={step.title} className={styles.stepImage} />
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Land More Interviews,</h3>
            <h3 className={styles.ctaSubtitle}>Fix Your Resume!</h3>
          </div>
          <button className={styles.ctaButton}>Try Resume Scanner today!</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;