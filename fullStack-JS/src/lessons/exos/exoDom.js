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

let status = document.createElement("p");

status.innerText = userData.active;

myDiv.append(status);

myDiv.style.backgroundColor = 'royalblue';
myDiv.style.color = "white";