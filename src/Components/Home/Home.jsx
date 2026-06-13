import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="content">
        <h1 className="title">Welcome To My Portfolio</h1>

        <h2 className="typewriter-text">
          <Typewriter
            options={{
              strings: [
                "My name is Mohammed Hany.",
                "I am a Front-End Web Developer.",
                "I build modern and creative websites.",
                "I love coding and learning new technologies.",
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </h2>

        <p className="description">
          I am a young passionate developer who creates modern, clean and
          responsive websites. I focus on building fast, user-friendly and
          visually stunning web experiences.
        </p>

        <button className="contact-btn">Contact Me</button>
      </div>
    </div>
  );
}
