import React from 'react'
import './Projects.css'
import projects_data from '../../assets/projects_data.js'
import arrow_icon from '../../assets/arrow_icon.png'

const Projects = () => {
  return (
    <div id='projects' className='projects'>
        <div className="projects-title">
            <h1>My Projects</h1>
        </div>
        <div className="projects-container">
        {projects_data.map((project, index) => {
          return (
            <a
              key={index}
              href={project.repo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <img
                src={project.p_img}
                alt={project.p_name}
                className="project-image"
              />
              <h3 className="project-name">{project.p_name}</h3>
            </a>
          );
        })}
      </div>
      <div className="projects-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default Projects