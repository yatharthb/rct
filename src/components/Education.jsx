// Education.jsx
import React from "react";
import "./Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const EducationEntry = ({ title, description, years }) => {
  return (
    <div className="education-entry">
      <FontAwesomeIcon icon={faGraduationCap} className="education-icon" />
      <div className="education-content">
        <div className="education-header">
          <h2 className="education-title">{title}</h2>
          <span className="education-years">{years}</span>
        </div>
        <p className="education-description">{description}</p>
      </div>
    </div>
  );
};

function Education() {
  return (
    <div className="education">
      <EducationEntry
        title="University of Wisconsin - Madison"
        description="Bachelor of Science in Computer Science"
        years="2018-2022"
      />
      {/* Add more EducationEntry components here */}
    </div>
  );
}

export default Education;
