// On selectionne le titre
const mainTitle = document.querySelector("h1");
let isClicked = false;
// console.log(mainTitle);
// On place l'écouteur d'events

mainTitle.addEventListener("click", () => {
  console.log("Ok le titre est clickable");
  // ON modifie le innerText de ce meme titre
  // mainTitle.innerText = '😄';
  mainTitle.innerText = isClicked ? "😄" : "Hello World";
  isClicked = !isClicked;
});
