import React, { useState } from 'react';
import styles from './FAQ.module.scss';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={styles.faqItem}>
      <div 
        className={styles.question} 
        onClick={onToggle}
      >
        <h3>{question}</h3>
        <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}>
          {isOpen ? '∧' : '∨'}
        </span>
      </div>
      {isOpen && (
        <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default
  
  const faqData = [
    {
      question: "What file formats does Resume Scanner+ support?",
      answer: "Currently, Resume Scanner+ supports commonly used file formats such as .docx, .pdf, and .txt."
    },
    {
      question: "How long does it take to receive my resume scan results?",
      answer: "Results are typically delivered within minutes of submission."
    },
    {
      question: "Can I upload multiple resumes for job applications?",
      answer: "Yes, you can upload multiple resumes for different job applications."
    },
    {
      question: "What is the difference between the ATS Score and the Impact Score?",
      answer: "The ATS Score measures how well your resume will perform with automated tracking systems, while the Impact Score evaluates the overall effectiveness and impact of your content."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.faqGrid}>
          <div className={styles.leftColumn}>
            <div className={styles.titleBadge}>GOT QUESTIONS?</div>
            <h1 className={styles.faqHeading}>Frequently Asked Questions</h1>
            <p className={styles.supportText}>
              If you have any further questions, please don't hesitate to reach out to our <a href="#" className={styles.highlight}>customer support</a> team for assistance.
            </p>
          </div>
          
          <div className={styles.rightColumn}>
            {faqData.map((faq, index) => (
              <FAQItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;