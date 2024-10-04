// Sélectionnez le bouton et le paragraphe pour afficher le message
const button = document.getElementById('myButton');
const messageParagraph = document.getElementById('message');

// Ajoutez un observateur d'événements pour le clic sur le bouton
button.addEventListener('click', function() {
    // Affichez le message dans le paragraphe
    messageParagraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
});
