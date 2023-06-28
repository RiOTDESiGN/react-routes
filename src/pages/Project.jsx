import { useParams } from 'react-router-dom';
import { ProjectContent } from './ProjectContent';

export function Project() {
  const { id } = useParams();

  return (
    <>
      <div className="title"><h1>Project: {id}</h1>test</div>
      <ProjectContent id={id} />
    </>
  );
}
