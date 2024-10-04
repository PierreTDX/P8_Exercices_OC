// Créez votre fonction ici
export function calculate(num1, num2, operator) {
    // Convertir les entrées en nombres
    const number1 = Number(num1);
    const number2 = Number(num2);

    // Vérifier si les entrées sont des nombres valides
    if (isNaN(number1) || isNaN(number2)) {
        return "Invalid operator";
    }

    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            // Gestion de la division par zéro
            if (number2 === 0) {
                return "Division by zero is not allowed";
            }
            return number1 / number2;
        default:
            return "Invalid operator";
    }
}

export default calculate;
