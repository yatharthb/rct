// WorkExperience.jsx
import React from "react";
import "./WorkExperience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const WorkExperienceEntry = ({ title, position, description, date }) => {
  return (
    <div className="work-experience-entry">
      <FontAwesomeIcon icon={faBriefcase} className="work-experience-icon" />
      <div className="work-experience-content">
        <h2 className="work-experience-title">{title}</h2>
        <div className="work-experience-subheader">
          <h3 className="work-experience-position">{position}</h3>
          <span className="work-experience-date">{date}</span>
        </div>
        <ul className="work-experience-description">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function WorkExperience() {
  return (
    <div className="work-experience">
      <h1 className="work-experience-heading">Where I've Worked</h1>
      <WorkExperienceEntry
        title="Amazon/Shopbop (University Capstone Course Collaboration)"
        position="Capstone Project Team Leader"
         description={[
          "Led a team of 4 undergraduates in a collaboration between the university's capstone project course and Amazon subsidiary Shopbop, developing an interactive iOS fashion game using Swift to drive customer engagement.",
          "Coordinated daily standups, weekly sprints, and presented progress to Amazon mentors, gaining valuable insights on software development and product management best practices from industry professionals.",
          "Delivered a fully-functional prototype having integrated real products into the app, showcasing Shopbop offerings in a fun and interactive way and providing Shopbop's in-house team with a foundation to further develop and refine the app for future release.",
        ]}
        date="August 2021 - December 2021"
      />
      <WorkExperienceEntry
        title="Independent Health"
        position="Software Development Intern"
        description={[
          "Developed a Python web app using Django, streamlining the tracking of the company's technical debt and enhancing overall efficiency.",
          " Designed and implemented an optimized SQL database schema, reducing data redundancy by 40%.",
          "Collaborated with project managers to continuously improve app design and features, resulting in a 25% increase in user satisfaction.",
        ]}
        date="May 2021 - August 2021"
      />
      <WorkExperienceEntry
        title="MAGIX Software GmbH"
        position="Software Quality Assurance Engineer (Part Time)"
        description={[
          "Collaborated with a team of developers to design and implement test suites for MAGIX video products, including VEGAS Pro, VEGAS Movie Studio, and their mobile app versions, improving product stability and user experience.",
          "Implemented automated testing using C# scripting and Selenium for desktop, web and mobile applications, reducing manual testing efforts by 30% and increasing overall test coverage by 20%.",
          "Analyzed and documented software defects from user-reported crash reports, enhancing communication between the QA and development teams for faster resolution.",
        ]}
        date="June 2020 - May 2020"
      />
    </div>
  );
}

export default WorkExperience;
