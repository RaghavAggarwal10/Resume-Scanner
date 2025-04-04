import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Left column */}
        <div className={styles.leftColumn}>
          <div className={styles.logoContainer}>
            <div className={styles.logoWrapper}>
              <span className={styles.logoIcon}>g</span>
              <span className={styles.logoText}>goodspace</span>
            </div>
            <p className={styles.tagline}>World's #1st AI Recruitment Platform</p>
          </div>
          
          <div className={styles.connectSection}>
            <h3 className={styles.connectTitle}>Let's Connect</h3>
            <div className={styles.contactInfo}>
              <p className={styles.emailItem}>
                <span className={styles.emailIcon}>✉</span>
                <span>info@goodspace.ai</span>
              </p>
              <p className={styles.phoneItem}>
                <span className={styles.phoneIcon}>☎</span>
                <span>+91 98109 14690</span>
              </p>
            </div>
            
            <div className={styles.socialIcons}>
              <FaInstagram className={styles.socialIcon} />
              <FaLinkedin className={styles.socialIcon} />
              <FaFacebook className={styles.socialIcon} />
              <FaTwitter className={styles.socialIcon} />
            </div>
          </div>
        </div>

        {/* Navigation columns */}
        <div className={styles.navColumns}>
          {/* Location column */}
          <div className={styles.navColumn}>
            <h3 className={styles.columnTitle}>Hire by Location</h3>
            <ul className={styles.navList}>
              <li className={styles.navItem}>Hiring in Bangalore</li>
              <li className={styles.navItem}>Hiring in Gurgaon</li>
              <li className={styles.navItem}>Hiring in Noida</li>
              <li className={styles.navItem}>Hiring in Mumbai</li>
              <li className={styles.navItem}>Hiring in Hyderabad</li>
              <li className={styles.navItem}>Hiring in Pune</li>
            </ul>
          </div>

          {/* Designation column */}
          <div className={styles.navColumn}>
            <h3 className={styles.columnTitle}>Hire by Designation</h3>
            <ul className={styles.navList}>
              <li className={styles.navItem}>Hire Android Developers</li>
              <li className={styles.navItem}>Hire FullStack Engineers</li>
              <li className={styles.navItem}>Hire Sales Executive</li>
              <li className={styles.navItem}>Hire Business Analyst</li>
              <li className={styles.navItem}>Hire HR Recruiter</li>
              <li className={styles.navItem}>Hire Marketing Executive</li>
            </ul>
          </div>

          {/* Company column */}
          <div className={styles.navColumn}>
            <h3 className={styles.columnTitle}>Company</h3>
            <ul className={styles.navList}>
              <li className={styles.navItem}>About Us</li>
              <li className={styles.navItem}>Our Team</li>
              <li className={styles.navItem}>Careers</li>
              <li className={styles.navItem}>Contact Us</li>
              <li className={styles.navItem}>Blogs</li>
              <li className={styles.navItem}>Press Room</li>
              <li className={styles.navItem}>Find Blood Donors</li>
            </ul>
          </div>

          {/* Legal column */}
          <div className={styles.navColumn}>
            <h3 className={styles.columnTitle}>Legal</h3>
            <ul className={styles.navList}>
              <li className={styles.navItem}>Privacy Policy</li>
              <li className={styles.navItem}>Refund Policy</li>
              <li className={styles.navItem}>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={styles.copyright}>©2024 Goodspace AI. All rights reserved worldwide.</div>
    </footer>
  );
};

export default Footer;