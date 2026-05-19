function ajouterTexte(pseudo, text) {
    let message = document.createElement('p')
    message.innerHTML = `<strong>${pseudo}</strong> - ${text}`;
    document.body.appendChild(message)
}

ajouterTexte('John', 'Bonjour');
ajouterTexte("Aaron", "Salut");
ajouterTexte("Pedro", "Hello");
ajouterTexte("Dante", "Buongiorno");