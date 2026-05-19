const page = document.querySelector('body')

function ajouterTexte(pseudo, text) {
    let message = document.createElement('p')
    message.innerHTML = `<strong>${pseudo}</strong> - ${text}`;
    page.append(message)

}

ajouterTexte('John', 'bonjour');
ajouterTexte("Aaron", "salut");
ajouterTexte("Pedro", "hello");
ajouterTexte("Jackie", "buongiorno");