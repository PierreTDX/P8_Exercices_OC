// Récupère l'élément d'affichage
let display = document.getElementById('display');

// Fonction pour ajouter un chiffre ou une opération à l'affichage
function appendToDisplay(value) {
    display.value += value;
}

// Fonction pour effacer l'affichage
function clearDisplay() {
    display.value = '';
}

// Fonction pour calculer le résultat de l'expression
function calculateResult() {
    try {
        // Évaluer l'expression mathématique saisie dans l'affichage
        let result = eval(display.value);

        // Vérifie si la division par zéro a eu lieu
        if (result === Infinity) {
            display.value = 'Division by zero is not allowed';
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Erreur';
    }
}
