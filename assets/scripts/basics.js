let nombre = "Aurelio";
console.log(nombre); // "Aurelio"

nombre = "Carlos"; // Reasignación
console.log(nombre); // "Carlos"

// Bloque
if (true) {
    let edad = 27;
    console.log(edad); // 27
}
console.log(edad); // Error: edad no está definida

const PI = 3.1416;
console.log(PI); // 3.1416

// PI = 3.14; // Error: No se puede reasignar una constante

// Con arrays
const frutas = ["manzana", "banana"];
frutas.push("naranja"); // Modificación permitida
console.log(frutas); // ["manzana", "banana", "naranja"]

// frutas = ["pera"]; // Error: No se puede reasignar un array declarado con const

var saludo = "Hola";
console.log(saludo); // "Hola"

var saludo = "Hola de nuevo"; // Redeclaración permitida
console.log(saludo); // "Hola de nuevo"

if (true) {
    var edad = 27; // Alcance de función, no de bloque
}
console.log(edad); // 27 (a pesar de estar fuera del bloque)

// String
const texto = "Hola";
const plantilla = `Hoy es ${new Date().toLocaleDateString()}`;
console.log(texto); // "Hola"
console.log(plantilla); // "Hoy es [fecha actual]"

// Number
const entero = 10;
const decimal = 3.14;
const noNumero = "Hola" / 2;
console.log(entero, decimal, noNumero); // 10, 3.14, NaN

// Boolean
const esVerdadero = true;
const esFalso = false;
console.log(esVerdadero, esFalso); // true false

// Undefined
let sinAsignar;
console.log(sinAsignar); // undefined

// Null
const valorVacio = null;
console.log(valorVacio); // null

// Operadores aritméticos
console.log("Operadores Aritméticos:");
let a = 10, b = 3;
console.log("Suma:", a + b); // 13
console.log("Resta:", a - b); // 7
console.log("Multiplicación:", a * b); // 30
console.log("División:", a / b); // 3.333...
console.log("Módulo:", a % b); // 1
console.log("Exponenciación:", a ** b); // 1000
a++; // Incrementa en 1
console.log("Incremento:", a); // 11
b--; // Decrementa en 1
console.log("Decremento:", b); // 2

console.log("\nOperadores de Comparación:");
console.log("Igualdad no estricta (10 == '10'):", 10 == '10'); // true
console.log("Igualdad estricta (10 === '10'):", 10 === '10'); // false
console.log("Desigualdad no estricta (10 != '10'):", 10 != '10'); // false
console.log("Desigualdad estricta (10 !== '10'):", 10 !== '10'); // true
console.log("Mayor que (10 > 5):", 10 > 5); // true
console.log("Menor que (5 < 10):", 5 < 10); // true
console.log("Mayor o igual (10 >= 10):", 10 >= 10); // true
console.log("Menor o igual (5 <= 3):", 5 <= 3); // false

console.log("\nOperadores Lógicos:");
const condicion1 = 10 > 5; // true
const condicion2 = 5 > 10; // false
console.log("AND (condicion1 && condicion2):", condicion1 && condicion2); // false
console.log("OR (condicion1 || condicion2):", condicion1 || condicion2); // true
console.log("NOT (!condicion1):", !condicion1); // false

console.log("\nCombinaciones avanzadas de operadores:");
console.log("10 > 5 && 5 < 10:", 10 > 5 && 5 < 10); // true
console.log("(10 < 5 || 5 < 10) && !(10 === '10'):", (10 < 5 || 5 < 10) && !(10 === '10')); // true

console.log("\nPruebas de NaN y Infinity:");
console.log("0 / 0 es NaN:", 0 / 0); // NaN
console.log("División por 0 (10 / 0):", 10 / 0); // Infinity
console.log("División por -0 (10 / -0):", 10 / -0); // -Infinity