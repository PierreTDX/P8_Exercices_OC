// Créez votre fonction ici
function calculateAverage(numbers) {
    // Vérifie si le tableau est vide ou non défini
    if (!numbers || numbers.length === 0) {
        return 'No numbers to calculate average';
    }

    let sum = 0; // Pour accumuler la somme
    let count = 0; // Pour compter les valeurs numériques valides
    let i = 0; // Initialisation de l'index

    // Boucle while pour parcourir le tableau
    while (i < numbers.length) {
        // Convertit la valeur en nombre
        const num = parseFloat(numbers[i]);
        // Vérifie si la conversion a réussi
        if (!isNaN(num)) {
            sum += num; // Ajoute à la somme
            count++; // Incrémente le compteur
        }
        i++; // Incrémente l'index pour passer à l'élément suivant
    }

    // Vérifie si aucune valeur numérique valide n'a été trouvée
    if (count === 0) {
        return 'No numbers to calculate average';
    }

    // Calcule la moyenne
    const average = sum / count;

    return average;
}

export default calculateAverage;

