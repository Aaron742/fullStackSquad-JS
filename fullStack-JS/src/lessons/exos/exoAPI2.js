const myButton = document.querySelector("button");
const chuckApi = document.querySelector(".apiChuck");

const myP = document.createElement("p");

async function nuckChorris() {
    const rawNorris = await fetch("https://api.chucknorris.io/jokes/random");
    const dataChuck = await rawNorris.json();
    myP.innerText = dataChuck.value;
    chuckApi.appendChild(myP);
}

myButton.addEventListener("click", nuckChorris);
