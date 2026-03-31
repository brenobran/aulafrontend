import avatar from '../assets/avatar.svg'

function Topbar() {
  return (
    <header>
      <h1>Ola, Aluno!</h1>
      <img scr={avatar} alt='imagem do avatar'/>
    </header>
  );
}

export default Topbar;