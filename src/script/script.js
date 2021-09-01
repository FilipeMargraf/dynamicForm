function passCheck() {
    var passInp = document.getElementById('passwordInput').value;
    var confirmPassInp = document.getElementById('confirmPasswordInput').value;

    //Verifica se as senhas são iguais
    if (passInp === confirmPassInp) {
        document.getElementById('passwordInput').style.border = "2px solid #1BE300";
        document.getElementById('confirmPasswordInput').style.border = "2px solid #1BE300";
        document.getElementById('message').innerHTML = ``;
    }
    else {
        document.getElementById('passwordInput').style.border = "2px solid #E30000";
        document.getElementById('confirmPasswordInput').style.border = "2px solid #E30000";
        document.getElementById('message').innerHTML = `<strong>Senhas diferentes</strong>`
        document.getElementById('message').style.color = "#E30000";
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
      document.getElementById('messageMail').innerHTML = `<strong>Email não válido</strong>`
      document.getElementById('messageMail').style.color = "#E30000";
    }
}

document.getElementById('buttonCheck').addEventListener('click', emailCheck);