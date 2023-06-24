import projectsData from '../assets/projects.json';

export function ProjectContent({ id }) {
  const project = projectsData.projects.find((project) => project.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <>
      <div class="ProjectContent">
        <h2>{project.name}</h2>
        <p>Type: {project.type}</p>
        <p>Description: {project.description}</p>
        <p>Synopsis: {project.synopsis}</p>
        <br />
        <p>Live-view:</p>
        <iframe src={project.url} frameborder="0"></iframe>
        {/* <div class="imgbox"><img src={project.image} alt={project.name} /></div> */}
      </div>
    </>
  );
}