import { SideIkkeFunnet } from './SideIkkeFunnet';
import projectsData from '../assets/projectsNO.json';

export function ProsjektInnhold({ id }) {
  const project = projectsData.find((project) => project.id === id);

  if (!project) {
    return <SideIkkeFunnet />;
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
          <h1>Prosjekt: {id}</h1>
          <div className="badges">
            {renderBadge(project.badgeHTML, project.badgeNameHTML)}
            {renderBadge(project.badgeCSS, project.badgeNameCSS)}
            {renderBadge(project.badgeJS, project.badgeNameJS)}
            {renderBadge(project.badgeR, project.badgeNameR)}
          </div>
        </div>
        <h2>{project.name}</h2>
        <p>Type: {project.type}</p>
        <p>Beskrivelse: {project.description}</p>
        <p>Synopsis: {project.synopsis}</p>
      </div>
      <iframe src={project.url}></iframe>
      <div className="wonder">LIVE TEST</div>
    </>
  );
}