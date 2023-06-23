import { useParams } from 'react-router-dom';
import { ProjectContent } from './ProjectContent';

export function Project() {
  const { id } = useParams();

  return (
    <>
      <h1>Project: {id}</h1>
      <hr />
      <ProjectContent id={id} />
    </>
  );
}
