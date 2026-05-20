const title = document.querySelector("h1");

// Ajouter

const btnOne = document.querySelector("#ajouter");

btnOne.addEventListener("click", () => {
    title.classList.add("bg-primary");
});

// Supprimer

const btnTwo = document.querySelector("#supprimer");

btnTwo.addEventListener("click", () => {
    title.classList.remove("bg-primary");
});

// Toggle

const btnThree = document.querySelector("#activer");

btnThree.addEventListener("click", () => {
    title.classList.toggle("bg-primary");
});

// Exo image on click



document.addEventListener('click', (clickEvent) => {
    // console.log("coord X", clickEvent.pageX);
    // console.log("coord Y", clickEvent.pageY);
    // console.log("coord X", clickEvent.x);
    // console.log("coord Y", clickEvent.y);
    console.log(clickEvent)
    let addImg = document.createElement("img");
    addImg.src = "https://picsum.photos/seed/picsum/300/300";
    addImg.style.position = "absolute";
    addImg.style.top = clickEvent.screenY + -200 + 'px'
    addImg.style.left = clickEvent.screenX + -150 + 'px'
    document.body.append(addImg)
})

// let btnCompteur = document.querySelector('.counter')

// document.addEventListener('click', () => {
//     btnCompteur.innerHTML = `<span>${btnCompteur}</span>`
//     btnCompteur++
// })