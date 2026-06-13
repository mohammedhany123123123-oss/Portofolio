import React from "react";
import "./Aboutme.css";

// Component for a skill item
const SkillItem = ({ skill }) => <div className="skill-item">{skill}</div>;

// Component for a hobby item
const HobbyItem = ({ hobby }) => <div className="hobby-item">{hobby}</div>;

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>

      <p className="about-text">
        Hi! My name is <strong>Mohammed Hany</strong>, and I’m 12 years old. I
        am passionate about <strong>Front-End Web Development</strong> and love
        creating modern and creative websites. I enjoy learning{" "}
        <strong>HTML, CSS, , JavaScript , Bootstrap and React</strong>, and I’m
        always curious to try new technologies and improve my skills.
      </p>

      {/* Hobbies Section */}
      <h2 className="section-title">My Hobbies</h2>
      <div className="hobbies-container">
        <HobbyItem hobby="Reading" />
        <HobbyItem hobby="Gaming" />
        <HobbyItem hobby="Learning new tech" />
      </div>
    </div>
  );
}
