import './style.css'
/*
validar o formulario com as regras:
- matricula > 0 e obrigatoria
- senha tamanhp > 6 caracteres
*/

const matricula = document.querySelector('#Matricula');
const senha = document.querySelector('#Senha');
const botao = document.querySelector('button');

botao.addEventListener('click', function(e) {
  const matriculaErro = document.querySelector('#matriculaErro');
  const senhaErro = document.querySelector('#senhaErro');

  matriculaErro.textContent = '';
  senhaErro.textContent = '';

  if (matricula.value == '') {
    console.log('Matricula obrigatoria');
    return;
  }

  if (parseInt(matricula.value) <= 0) {
    console.log('Matricula deve ser um numero positivo')
  }

  if (senha.value == '') {
    console.log('Senha e obrigatoria');
    return;
  }

  if (senha.value.length < 8) {
    console.log('Senha deve ter no minimo 8 caracteres');
    return;
  }

});