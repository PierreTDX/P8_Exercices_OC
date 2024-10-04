//votre code ici
export function pairNumbers(min, max) {
    // Convertir en nombre si min et max sont passés sous forme de chaîne
    min = Number(min);
    max = Number(max);

    // Si le minimum est supérieur ou égal au maximum, retourner une chaîne vide
    if (min >= max) {
        return '';
    }

    let result = '';

    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            result += i + ',';
        }
    }

    // Retirer la dernière virgule
    if (result.length > 0) {
        result = result.slice(0, -1);
    }

    return result;
}
// Exemple d'utilisation
console.log("Exercice1 : ",pairNumbers(1, 10));  // Retourne "2,4,6,8,10"

export default pairNumbers;
