import React from "react";
import { PageNotFound } from "./PageNotFound";
import projectsData from "../assets/projects.json";

export function ProjectContent({ id }) {
  const project = projectsData.find((project) => project.id === id);

  if (!project) {
    return <PageNotFound />;
  }

  const renderBadge = (badgeSrc, badgeAlt) => {
    if (badgeSrc && badgeAlt) {
      return <img src={badgeSrc} alt={badgeAlt} />;
    }
    return null;
  };

  return (
    <>
    <div className="page">
      <div className="projectContent">
        <div className="projectTitle">
          <h1>Project: {id}</h1>
          <div className="badges">
            {renderBadge(project.badgeHTML, project.badgeNameHTML)}
            {renderBadge(project.badgeCSS, project.badgeNameCSS)}
            {renderBadge(project.badgeJS, project.badgeNameJS)}
            {renderBadge(project.badgeR, project.badgeNameR)}
          </div>
        </div>
        <h2>{project.name}</h2>
        <p>Type: {project.type}</p>
        <p>Description: {project.description}</p>
        <p>Synopsis: {project.synopsis}</p>
      </div>
      <div className="wrapper">
      <div className="wonder">LIVE VIEW</div>
      <iframe id="iframe" src={project.url} title={project.name}></iframe>
      </div>
    </div>
    </>
  );
}
