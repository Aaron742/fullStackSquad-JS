// const apiDiv = document.querySelector('.apiDiv')

// const contactApiSecurePlus = async () => {
//     try {
//     const rawData = await fetch(
//         "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m",
//     );
//     console.log(rawData);

//     // Vérification du statut de la réponse
//     if (!rawData.ok || rawData.status !== 200) {
//       // Vérification du statut 200
//         console.error(
//         "Erreur lors de la récupération des données : ",
//         rawData.statusText,
//     );
//         return; // Sortir de la fonction si la réponse n'est pas OK
//     }

//     const transformedData = await rawData.json();
//     console.log(transformedData);
//     apiDiv.innerHTML = transformedData.longitude;
//     } catch (error) {
//     console.error("Erreur lors de l'appel à l'API : ", error);
//     }
// };
// contactApiSecurePlus();

// const apiPokemon = document.querySelector('.apiPoke')

// async function pokeAPI() {
//     const dataPok = await fetch("https://pokeapi.co/api/v2/pokemon/");
//     const pokeJson = await dataPok.json()
//     const pokeName = pokeJson.results.map((x) => x.name)
//     console.log(pokeName);
//     pokeName.forEach(element => {
//         let createP = document.createElement("p");
//         createP.innerText = element
//         console.log(createP)
//         document.body.append(createP)
//     });
// }
// pokeAPI()

const apiPokemon = document.querySelector(".apiPoke");

async function pokeAPI() {
    const dataPok = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const pokeJson = await dataPok.json();
    pokeJson.results.forEach((element) => {
        let createP = document.createElement("p");
        createP.innerText = element.name;
        console.log(createP);
        document.body.append(createP);
    });
}
pokeAPI();