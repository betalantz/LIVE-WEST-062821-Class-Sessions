import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projComponents = projects.map(pObj => (
    <ProjectItem 
      key={pObj.id}
      name={pObj.name}
      about={pObj.about}
      technologies={pObj.technologies}
    />))
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projComponents}</div>
    </div>
  );
}

export default ProjectList;
