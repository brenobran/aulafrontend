import './App.css';
import logo from './assets/school-svgrepo-com.svg';

function App() {
  return (
    <main>
        <img src={logo} alt="Logotipo"/>
        <h1>Aluno online</h1>
        <label htmlFor="Matricula">Matrícula</label>
        <span className="icon-mat"><ion-icon name="mail"></ion-icon></span>
        <input type="text" id="Matricula" name="matricula" placeholder="Digite sua matrícula"/>
        <p id="matriculaErro"></p>
        <label htmlFor="Senha">Senha</label>
        <span className="icon-sen"><ion-icon name="lock-closed"></ion-icon></span>
        <input type="password" id="Senha" name="senha" placeholder="Digite sua senha"/>
        <p id="senhaErro"></p>
        <button>Entrar</button>
    </main>
  );
}

export default App;