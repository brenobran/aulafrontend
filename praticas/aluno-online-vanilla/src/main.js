const form = document.querySelector('#loginForm');
const matricula = document.querySelector('#Matricula');
const senha = document.querySelector('#Senha');

const matriculaErro = document.querySelector('#matriculaErro');
const senhaErro = document.querySelector('#senhaErro');

// limpa erro ao digitar
matricula.addEventListener('input', () => {
  matriculaErro.textContent = '';
});

senha.addEventListener('input', () => {
  senhaErro.textContent = '';
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let valido = true;

  // limpa erros
  matriculaErro.textContent = '';
  senhaErro.textContent = '';

  // valida matrícula
  if (matricula.value.trim() === '') {
    matriculaErro.textContent = 'Matrícula é obrigatória';
    valido = false;
  } else if (isNaN(matricula.value) || parseInt(matricula.value) <= 0) {
    matriculaErro.textContent = 'Digite uma matrícula válida';
    valido = false;
  }

  // valida senha
  if (senha.value.trim() === '') {
    senhaErro.textContent = 'Senha é obrigatória';
    valido = false;
  } else if (senha.value.length < 8) {
    senhaErro.textContent = 'A senha deve ter no mínimo 8 caracteres';
    valido = false;
  }

  // sucesso
  if (valido) {
    window.location.href = "index.html";
  }
});