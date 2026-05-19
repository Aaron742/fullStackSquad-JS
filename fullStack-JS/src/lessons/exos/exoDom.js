//! EXO 20.1
//TODO: via JS afficher le profil  utilisateur dans la page web
const userData = {
    name: "John delavega",
    email: "john.doe@example.com",
    age: 25,
    dob: "08/02/1989",
    active: true,
    img: "https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg",
};

const myDiv = document.querySelector('.userProfile')

let firstImg = document.createElement('img')

firstImg.src = "https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg";

firstImg.alt = 'Photo magnifique'

myDiv.append(firstImg);

let name = document.createElement('h1')

name.innerText = userData.name

myDiv.append(name)

let email = document.createElement("p");

email.innerText = userData.email;

myDiv.append(email);

let age = document.createElement("p");

age.innerText = userData.age;

myDiv.append(age);

let dob = document.createElement("p");

dob.innerText = userData.dob;

myDiv.append(dob);

let active = document.createElement("p");

// CONDITION TERNAIRE
active.innerText = userData.active === true ? 'online' : 'offline';

myDiv.append(active);

myDiv.style.backgroundImage = "linear-gradient(45deg, rgb(65, 89, 208) 0%, rgb(200, 79, 192) 50%, rgb(255, 205, 112) 100%)";
myDiv.style.color = "white";
myDiv.style.fontWeight = 'bold'
myDiv.style.width = "15%"
myDiv.style.padding = "2%"
myDiv.style.margin = 'auto'
myDiv.style.border = "1px solid black";
myDiv.style.boxShadow = "-5px 5px 10px black";
myDiv.style.textShadow = "2px 2px 10px black";
firstImg.style.width = "100%"