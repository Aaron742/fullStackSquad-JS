let date = "12/05/2026 :"
let prix = 10.5
let nom = 'Ketchum'
let prenom = "Ash";
let pizza = 'pizza bolognaise'
let adresse = 'Bourg Palette, Kanto'
let merci = 'Merci d\'avoir commandé chez "La Pizzeria Raffinata" !'
let blague = `---------------------------------- BLaGuE ----------------------------------
Qu'est-ce qu'une pizza a dit à une autre pizza qui lui demandait des conseils ? "Suis ta pâte et tout ira bien !"`;

const SumUpOrderPhrase = `Le ${date}
Bonjour/Bonsoir ${prenom} ${nom} votre ${pizza} (${prix}₽) est bien prête, elle vous sera livrée dans 30 minutes à l'adresse suivante : ${adresse}.
${merci}
${blague}`;

console.log(SumUpOrderPhrase)