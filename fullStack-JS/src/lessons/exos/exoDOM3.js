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

// const btnThree = document.querySelector("#activer");

// btnThree.addEventListener("click", () => {
//     title.classList.toggle("bg-primary");
// });

// Exo image on click

// document.addEventListener('click', (clickEvent) => {
//     // console.log("coord X", clickEvent.pageX);
//     // console.log("coord Y", clickEvent.pageY);
//     // console.log("coord X", clickEvent.x);
//     // console.log("coord Y", clickEvent.y);
//     console.log(clickEvent)
//     let addImg = document.createElement("img");
//     const imageSize = 500
//     addImg.src = `https://picsum.photos/${imageSize}/${imageSize}`;
//     addImg.style.position = "absolute";
//     addImg.style.border = '3px solid black'
//     addImg.style.boxShadow = '5px 5px 500px black'
//     addImg.style.top = clickEvent.y - imageSize/2 + 'px'
//     addImg.style.left = clickEvent.x - imageSize/2 + 'px'
//     document.body.append(addImg)
// })

// let btnCompteur = document.querySelector('.counter')

// document.addEventListener('click', () => {
//     let compteur = 0
//     comp
//     btnCompteur.innerHTML = `<span>${compteur}</span>`
// })

// exo focus & blur

let focusBlur = document.querySelector('input')

focusBlur.addEventListener('focus', () => {
    focusBlur.style.backgroundColor = 'royalblue'
})

focusBlur.addEventListener('blur', () => {
    focusBlur.style.backgroundColor = 'transparent'
    focusBlur.style.color = 'black'
})