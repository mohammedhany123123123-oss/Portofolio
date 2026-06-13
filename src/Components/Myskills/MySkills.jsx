import React from "react";
import "./Myskills.css";

// Component for a single skill card
const SkillCard = ({ skill, color }) => (
  <div className="skill-card" style={{ borderTop: `4px solid ${color}` }}>
    <h3>{skill}</h3>
  </div>
);

export default function MySkills() {
  const skills = [
    { skill: "HTML", color: "#f16529" },
    { skill: "CSS", color: "#2965f1" },
    { skill: "JavaScript", color: "#f7df1e" },
    { skill: "React", color: "#61dbfb" },
    { skill: "Bootstrap", color: "#7952b3" }
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-grid">
        {skills.map((item, index) => (
          <SkillCard key={index} skill={item.skill} color={item.color} />
        ))}
      </div>
    </div>
  );
}
