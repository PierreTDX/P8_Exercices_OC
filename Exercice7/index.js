function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryResult = document.getElementById('binaryResult');

    // Vérification si l'entrée est un nombre
    if (decimalInput === '' || isNaN(decimalInput) || decimalInput < 0) {
        binaryResult.textContent = ''; // Laisser le résultat vide
        return;
    }

    let decimalNumber = parseInt(decimalInput);
    let binaryNumber = '';

    // Conversion du nombre décimal en binaire
    while (decimalNumber > 0) {
        const remainder = decimalNumber % 2;
        binaryNumber = remainder.toString() + binaryNumber; // Ajouter le reste au début de la chaîne
        decimalNumber = Math.floor(decimalNumber / 2); // Diviser par 2 et arrondir
    }

    // Affichage du résultat
    binaryResult.textContent = binaryNumber; // Afficher le résultat binaire
}
