import { pairNumbers } from "./Exercice1/index.js";
import { calculate } from "./Exercice2/index.js";
import { calculateAverage} from "./Exercice3/index.js"

// Exemples d'utilisation de la fonction Exercice 2
console.log("Exercice 1 : ",pairNumbers(1, 10));  // Retourne "2,4,6,8,10"
console.log("Exercice 1 : ",pairNumbers(5, 37));

console.log("---------------------------------------------");
// Exemples d'utilisation de la fonction Exercice 2
console.log("Exercice 2 : ", calculate(5, 3, '+'));   // Affiche 8
console.log("Exercice 2 : ", calculate(10, 4, '-'));  // Affiche 6
console.log("Exercice 2 : ", calculate(7, 2, '*'));   // Affiche 14
console.log("Exercice 2 : ", calculate(12, 3, '/'));  // Affiche 4
console.log("Exercice 2 : ", calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log("Exercice 2 : ", calculate(4, 5, '%'));   // Affiche "Invalid operator"

console.log("---------------------------------------------");
// Exemples d'utilisation de la fonction Exercice 3
console.log("Exercice 3 : ", calculateAverage([5, 10, 15])); // retourne 10
console.log("Exercice 3 : ", calculateAverage([10, 20, 30, 20])); // retourne 20
console.log("Exercice 3 : ", calculateAverage()); // retourne 'No numbers to calculate average'
console.log("Exercice 3 : ", calculateAverage([])); // retourne 'No numbers to calculate average'
console.log("Exercice 3 : ", calculateAverage(['5', 10, 15])); // retourne 10

console.log("---------------------------------------------");
// Exemples d'utilisation de la fonction Exercice 4


