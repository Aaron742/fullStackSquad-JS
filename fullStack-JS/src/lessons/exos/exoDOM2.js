// function ajouterTexte(pseudo, text) {
//     let message = document.createElement('p')
//     message.innerHTML = `<strong>${pseudo}</strong> - ${text}`;
//     document.body.appendChild(message)
// }

// ajouterTexte('John', 'Bonjour');
// ajouterTexte("Aaron", "Salut");
// ajouterTexte("Pedro", "Hello");
// ajouterTexte("Dante", "Buongiorno");

// let img = document.querySelector('img')

// document.addEventListener('mouseleave', () => {
//     img.style.display = 'block'
//     img.style.borderRadius = '50%'
// })

//!Exercice setInterval
const buttonSetInterval = document.querySelector('#button-exercice-setInterval');
const timerTitle = document.querySelector('#timer-title');

buttonSetInterval.addEventListener('click',()=>{
    //Pour quand on reclick le bouton on remet le titre du timer à TIMER
    timerTitle.innerText = 'TIMER';
    let counter = 3;
    console.log('On démarre le Timer');
    const intervalID = setInterval(() => {
        
        if (counter > 0) {
            timerTitle.innerText = counter;
        }
        else{
            console.log('On arrête le Timer');
            timerTitle.innerText = "GO !";
            clearInterval(intervalID);
        }
        counter--;
    }, 1000);
});
// setInterval(() => {
//     compteur -- ;
//     title.innerText = `${compteur}`

//     if (compteur == 0) {
//         title.innerText = 'GO'
//         clearInterval(countDown)
//     }
// }, 1000);

