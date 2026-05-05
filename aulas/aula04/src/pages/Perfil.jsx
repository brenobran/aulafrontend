import { useParams } from "react-router";

function Perfil () {
  const { id } = useParams ();

  return (
  <>
    <h1>Pagina do Usuario {id}</h1>
  </>
  );
}

export default Perfil;