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

    // Initialiser i à la valeur de min
    let i = min;

    // Utiliser une boucle while pour parcourir les nombres entre min et max
    while (i <= max) {
        if (i % 2 === 0) {
            result += i + ',';
        }
        i++;
    }

    // Retirer la dernière virgule
    if (result.length > 0) {
        result = result.slice(0, -1);
    }

    return result;
}

export default pairNumbers;

