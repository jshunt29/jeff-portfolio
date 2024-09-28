import React from 'react';
// import './Resume.css'; // Import custom styles for resume

const Resume = () => {
  return (
    <section className="resume-section">
      <h2>Jeffrey S. Hunt</h2>
      <p>Los Angeles, CA | <a href="https://www.linkedin.com/in/jeffrey-hunt-4160b7b2" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>

      <div className="resume-summary">
        <h3>Professional Summary</h3>
        <p>
          Results-driven MBA candidate with 10+ years of experience in financial analysis, operations, and strategic leadership. Skilled in data analytics, cost optimization, and driving key business initiatives. Proven success in leading teams, managing multimillion-dollar budgets, and building strong client relationships.
        </p>
      </div>

      <div className="resume-section">
        <h3>Education</h3>
        <ul>
          <li>
            <strong>Loyola Marymount University</strong> – Los Angeles, CA<br />
            MBA Candidate (Expected 2025)<br />
            Concentrations: Finance & Marketing
          </li>
          <li>
            <strong>Loyola University Maryland</strong> – Baltimore, MD<br />
            Bachelor of Business Administration, Finance<br />
            Minor: Computer Science | NCAA D1 Swimmer
          </li>
        </ul>
      </div>

      <div className="resume-section">
        <h3>Experience</h3>
        <div className="resume-job">
          <h4>Sr. Financial Analyst – Stoli Group USA</h4>
          <p>January 2021 – August 2021 | New York, NY - Remote</p>
          <ul>
            <li>Managed $50M+ in international suppliers and brands, reducing Cost of Goods Sold (COGS) by 15%.</li>
            <li>Developed data models with Power BI, improving forecasting accuracy by 20%.</li>
            <li>Optimized global shipping logistics, saving $500K in annual shipping costs.</li>
          </ul>
        </div>

        <div className="resume-job">
          <h4>Operations Manager – Volo Sports</h4>
          <p>January 2014 – March 2020 | New York, NY - various site visits/national travel/Remote</p>
          <ul>
            <li>Led national event management, enhancing event profitability by 25% across multiple markets.</li>
            <li>Automated server admin tasks with Linux scripts, increasing server uptime by 30%.</li>
            <li>Consulted on custom web app development, saving $300K in software licensing fees.</li>
          </ul>
        </div>

        <div className="resume-job">
          <h4>Management Analyst – Social Security Administration</h4>
          <p>September 2009 – October 2018 | United States Government - Hybrid</p> {/* Fixed the unclosed tag */}
          <ul>
            <li>Designed VoIP system for Region II, boosting communications and saving $150K annually.</li>
            <li>Created budget forecasting models, reducing overtime expenditures by 10%.</li>
            <li>Developed inventory tracking systems for compliance with federal regulations.</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h3>Skills</h3>
        <ul>
          <li>Financial Modeling (Excel, SAP, Power BI)</li>
          <li>Data Analytics (Python, SQL, Tableau)</li>
          <li>Project Management (IT systems, server administration)</li>
          <li>Programming (Python, Java, Linux scripting)</li>
        </ul>
      </div>

      <div className="resume-section">
        <h3>Achievements</h3>
        <ul>
          <li>Certified Professional Rescuer for Aquatics, CPR/AED</li>
          <li>NCAA D1 Swimmer at Loyola Maryland</li>
          <li>Promoted 3 times within the U.S. Government for leadership and operational excellence</li>
        </ul>
      </div>

      <div className="resume-section">
        <h3>Interests</h3>
        <ul>
          <li>Rock Climbing | Podcast Producer | SCUBA Enthusiast</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
