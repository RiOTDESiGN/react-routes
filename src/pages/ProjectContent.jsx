import { PageNotFound } from './PageNotFound';
import projectsData from '../assets/projectsEN.json';

export function ProjectContent({ id, language }) {
  const project = projectsData.projects.find((project) => project.id === id);

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
      <div className="projectContent">
        <div className="projectTitle">
          <h1>Project: {id}</h1>
          <div className="badges">
            {renderBadge(project.badgeCH, project.badgeNameCH)}
            {renderBadge(project.badgeJS, project.badgeNameJS)}
            {renderBadge(project.badgeR, project.badgeNameR)}
          </div>
        </div>
        <h2>{project.name}</h2>
        <p>Type: {project.type}</p>
        <p>Description: {project.description}</p>
        <p>Synopsis: {project.synopsis}</p>
      </div>
      <iframe src={project.url}></iframe>
      <div className="wonder">LIVE VIEW</div>
    </>
  );
}
