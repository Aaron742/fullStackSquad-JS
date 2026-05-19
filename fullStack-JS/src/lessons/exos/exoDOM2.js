const page = document.querySelector('body')

function ajouterTexte(pseudo, text) {
    let message = document.createElement('p')
    message.innerHTML = `<strong>${pseudo}</strong> - ${text}`;
    page.append(message)
}

ajouterTexte('John', 'Bonjour');
ajouterTexte("Aaron", "Salut");
ajouterTexte("Pedro", "Hello");
ajouterTexte("Dante", "Buongiorno");