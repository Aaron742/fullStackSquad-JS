const title = document.querySelector("h1");

// Ajouter

const btnOne = document.querySelector("#ajouter");
console.log(btnOne);

btnOne.addEventListener("click", () => {
    title.classList.add("bg-primary");
});

// Supprimer

const btnTwo = document.querySelector("#supprimer");
console.log(btnTwo);

btnTwo.addEventListener("click", () => {
    title.classList.remove("bg-primary");
});

// Toggle

const btnThree = document.querySelector("#activer");
console.log(btnThree);

btnThree.addEventListener("click", () => {
    title.classList.toggle("bg-primary");
});
