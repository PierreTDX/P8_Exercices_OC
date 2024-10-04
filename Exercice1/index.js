//votre code ici
function pairNumbers(min, max) {
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

// export default pairNumbers
