import { useParams } from 'react-router-dom';
import { ProsjektInnhold } from './ProsjektInnhold';

export function Prosjekt() {
  const { id } = useParams();

  return (
    <>
      <ProsjektInnhold id={id} />
    </>
  );
}