import React from "react";
import "./MyProjects.css";

export default function MyProjects() {
  return (
    <div className="projects-container">
      <h2>
        All Projects on{" "}
        <a
          href="https://github.com/mohammedhany123123123-oss"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        .
      </h2>
      <div className="projects-cards">
        <div className="project-card">
          <h3>Car Store</h3>
          <p>
            React project for managing car sales with cart and modal features.
          </p>
          <a
            href="https://github.com/mohammedhany123123123-oss/Car-Store"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="project-card">
          <h3>CRUD App</h3>
          <p>React CRUD application using Redux for state management.</p>
          <a
            href="https://github.com/mohammedhany123123123-oss/Crud-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="project-card">
          <h3>Clothes Shop</h3>
          <p>
            React clothes shop project showcasing products with a stylish
            interface.
          </p>
          <a href="https://github.com/mohammedhany123123123-oss/Clothes-Shop" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}
