let getMail = document.querySelector('#login-mail')
let getPassword = document.querySelector('#login-password')
let errorTxt = document.querySelector('#errorSection')

const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
const regexNbr = /\d/
const regexSpecials = /[&,$,@,!]/

getMail.addEventListener('keyup', () => {
    regex.test(getMail.value) == true ? getMail.style.backgroundColor = 'chartreuse' : getMail.style.backgroundColor = 'red' 
})

getPassword.addEventListener('keyup', () => {
    if (getPassword.value === "") {
        errorTxt.innerHTML = ""; // On efface les messages
        errorTxt.style.border = "none"; // On retire la bordure rouge/verte
        return;
    } 

    let message = "";
    if (getPassword.value.length < 6) {
        message += "<li>mdp trop court</li>";
    } else if (getPassword.value.length > 8) {
        message = "<li>mdp trop long</li>";
    }

    if (!getPassword.value.match(regexNbr)) {
        message += "<li>mdp n'a pas de chiffre</li>";
    }

    if (!getPassword.value.match(regexSpecials)) {
        message += "<li>mdp n'a pas de caractère spécial</li>";
    }

    if (message !== "") {
        errorTxt.innerHTML = message;
        errorTxt.style.border = "5px solid red";
    } else {
        errorTxt.innerHTML = "Ok bg";
        errorTxt.style.border = "5px solid chartreuse";
    }
})