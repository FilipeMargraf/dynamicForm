function passCheck() {
    var passInp = document.getElementById('passwordInput').value;
    var confirmPassInp = document.getElementById('confirmPasswordInput').value;

    if (passInp === confirmPassInp) {
        document.getElementById('passwordInput').style.border = "2px solid #1BE300";
        document.getElementById('confirmPasswordInput').style.border = "2px solid #1BE300";
    }
    else {
        document.getElementById('passwordInput').style.border = "2px solid #E30000";
        document.getElementById('confirmPasswordInput').style.border = "2px solid #E30000";
        document.getElementById('message').innerHTML = `<strong>Senhas diferentes</strong>`
        document.getElementById('message').style.color = "#E30000";
    }
}

document.getElementById('buttonCheck').addEventListener('click', passCheck)