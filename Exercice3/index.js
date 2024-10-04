// Créez votre fonction ici
export function calculateAverage(numbers) {
    // Vérifie si le tableau est vide ou non défini
    if (!numbers || numbers.length === 0) {
        return 'No numbers to calculate average';
    }

    // Convertit les valeurs en nombres, en gérant les chaînes
    const numericValues = numbers.map(num => parseFloat(num)).filter(num => !isNaN(num));

    // Vérifie si tous les éléments étaient des chaînes non convertibles
    if (numericValues.length === 0) {
        return 'No numbers to calculate average';
    }

    // Calcule la somme des nombres
    const sum = numericValues.reduce((acc, num) => acc + num, 0);

    // Calcule la moyenne
    const average = sum / numericValues.length;

    return average;
}

export default calculateAverage;

