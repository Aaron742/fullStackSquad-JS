// let nbr = (a = 0) => console.log(33 + a);

// let nbr2 = (a = 0, b = 0) => console.log(a + b);

// nbr();

// nbr2(2, 3);

// function buggyFunction() {
//   let wtf = 9;
//   console.log(wtf);
// }

// buggyFunction();

let notesTibo = [0, 3, 4, 6, 18, 19, 4]

function calculerMoyenne(tabNotes) {
  let somme = 0
  for (let i = 0; i < tabNotes.length; i++) {
    somme += tabNotes[i];
  }

  if (tabNotes >= 15) {
    console.log('Très bien')
  }
  else if (tabNotes >= 10) {
    console.log('Assez bien')
  }
  else {
    console.log('Refus')
  }
  return somme / tabNotes.length
}

const ab = calculerMoyenne(notesTibo)
console.log(ab)