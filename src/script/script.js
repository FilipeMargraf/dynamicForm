function passCheck() {
  var passInp = document.getElementById('passwordInput').value;
  var confirmPassInp = document.getElementById('confirmPasswordInput').value;

  if (document.getElementById('passwordInput').value.length < 6) {
    document.getElementById('passwordInput').style.border = "2px solid #E30000";
    document.getElementById('shortPass').innerHTML = `<strong>Defina no mínimo 6 caracteres</strong>`;
    document.getElementById('shortPass').style.color = "#E30000";
  }
  //Verifica se as senhas são iguais
  else if (passInp === confirmPassInp) {
    document.getElementById('passwordInput').style.border = "2px solid #1BE300";
    document.getElementById('confirmPasswordInput').style.border = "2px solid #1BE300";
    document.getElementById('messagePass').innerHTML = ``;
    document.getElementById('shortPass').innerHTML = ``;
  }
  else {
    document.getElementById('passwordInput').style.border = "2px solid #1BE300";
    document.getElementById('confirmPasswordInput').style.border = "2px solid #E30000";
    document.getElementById('messagePass').innerHTML = `<strong>Senhas diferentes</strong>`;
    document.getElementById('messagePass').style.color = "#E30000";
    document.getElementById('shortPass').innerHTML = ``;
  }
}

document.getElementById('buttonCheck').addEventListener('click', passCheck)

function emailCheck() {
  var email = document.getElementById('emailInput').value;
  var validRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

  if (email.match(validRegex)) {
    document.getElementById('emailInput').style.border = "2px solid #1BE300";
    document.getElementById('messageMail').innerHTML = ``;
  }
  else {
    document.getElementById('emailInput').style.border = "2px solid #E30000";
    document.getElementById('messageMail').innerHTML = `<strong>Email não válido</strong>`;
    document.getElementById('messageMail').style.color = "#E30000";
  }
}

document.getElementById('buttonCheck').addEventListener('click', emailCheck);

function usernameCheck() {
  var username = document.getElementById('usernameInput').value;

  if (username === '') {
    document.getElementById('usernameInput').style.border = "2px solid #E30000";
    document.getElementById('messageUser').innerHTML = `<strong>Insira um nome</strong>`;
    document.getElementById('messageUser').style.color = "#E30000";
  }
  else {
    document.getElementById('usernameInput').style.border = "2px solid #1BE300";
    document.getElementById('messageUser').innerHTML = ``;
  }
}

document.getElementById('buttonCheck').addEventListener('click', usernameCheck);

function showPass() {
  var pass1 = document.getElementById('passwordInput');
  var pass2 = document.getElementById('confirmPasswordInput');

  if (pass1.type == 'password' && pass2.type == 'password') {
    pass1.type = 'text';
    pass2.type = 'text';
    document.getElementById('seePass').value = 'Esconder';
  }
  else {
    pass1.type = 'password';
    pass2.type = 'password';
    document.getElementById('seePass').value = 'Mostrar'; 
  }
}

document.getElementById('seePass').addEventListener('click', showPass);