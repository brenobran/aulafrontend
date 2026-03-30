import logo from './assets/learn.svg';
import avatar from './assets/avatar.svg';


function App() {
  return <div className='flex flex-col md:flex-row'>
    <aside className="hidden md:block bg-gray-300">
  
      <header className='flex flex-row'>
        <img src={logo} alt="imagem da logo" />
        <h1>Aluno Online</h1>
      </header>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Notas</li>
          <li>Faltas</li>
          <li>Boletos</li>
          <li>Requerimentos</li>
          <li>Sair</li>
        </ul>
      </nav>
    </aside>
    <main className='flex flex-col max-w-screen'>
      <header>
        <h1>Ola, Aluno!</h1>
        <img src={avatar} alt="imagem do avatar" />
      </header>
      <h2>Bem-vindo ao portal do aluno</h2>
      <seaction>
        <article>
          <h3>Mural de Avisos</h3>
          <ul>
            <li>Inscricoes para o projeto de extensao</li>
            <li>Eleicao para o representante de turma</li>
            <li></li>
          </ul>
        </article>
        <article>
          <h3>Calendario Academico</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </article>
        <article>
          <h3>Minhas Disciplinas</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </article>
      </seaction>
    </main>
  </div>
}

export default App;