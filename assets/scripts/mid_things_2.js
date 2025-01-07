// Ejemplo 1: Días de la semana
console.log("Ejemplo 1: Días de la semana");
const dia = "viernes";

switch (dia) {
    case "lunes":
        console.log("Inicio de la semana, hora de trabajar.");
        break;
    case "martes":
        console.log("Segundo día, seguimos con el ritmo.");
        break;
    case "viernes":
        console.log("Último día laboral, ¡casi fin de semana!");
        break;
    default:
        console.log("Es un día normal o un fin de semana.");
}

// Ejemplo 2: Operaciones matemáticas
console.log("\nEjemplo 2: Operaciones matemáticas");
const operacion = "/";
const num1 = 10;
const num2 = 10;

switch (operacion) {
    case "+":
        console.log(`Resultado de la suma: ${num1 + num2}`);
        break;
    case "-":
        console.log(`Resultado de la resta: ${num1 - num2}`);
        break;
    case "*":
        console.log(`Resultado de la multiplicación: ${num1 * num2}`);
        break;
    case "/":
        console.log(`Resultado de la división: ${num1 / num2}`);
        break;
    default:
        console.log("Operación no válida.");
}

// Ejemplo 3: Frutas
console.log("\nEjemplo 3: Frutas");
const fruta = "pomelo";

switch (fruta) {
    case "manzana":
    case "pera":
    case "durazno":
        console.log("Esta es una fruta dulce.");
        break;
    case "limón":
    case "pomelo":
        console.log("Esta es una fruta cítrica.");
        break;
    default:
        console.log("No reconozco esta fruta.");
}

// Declaración de función
function sumar(a, b) {
    return a + b;
}

console.log(sumar(5, 3)); // Output: 8

// Expresión de función anónima
const restar = function(a, b) {
    return a - b;
};

console.log(restar(9, 4)); // Output: 5

// Expresión de función nombrada
const dividir = function dividirNumeros(a, b) {
    return b !== 0 ? a / b : "No se puede dividir por cero";
};

console.log(dividir(10, 2)); // Output: 5

// Parámetros por defecto
function multiplicar(a = 1, b = 1) {
    return a * b;
}

console.log(multiplicar(4, 5)); // Output: 20
console.log(multiplicar(7));    // Output: 7 (porque b = 1 por defecto)

// Objeto arguments
function listarArgumentos() {
    console.log("Cantidad de argumentos:", arguments.length);
    console.log("Primer argumento:", arguments[0]);
}

function sumarTodos() {
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}

console.log(sumarTodos(1, 2, 3, 4)); // Output: 10

listarArgumentos(42, "Hola", true); // Output: Cantidad de argumentos: 3, Primer argumento: 42

// Parámetros rest
function juntarPalabras(...palabras) {
    return palabras.join(" ");
}

console.log(juntarPalabras("Hola", "mundo", "desde", "JavaScript")); // Output: Hola mundo desde JavaScript

function sumarRest(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumarRest(1, 2, 3, 4)); // Output: 10
console.log(sumarRest(5, 10));      // Output: 15

// Desestructuración
function mostrarLibro({ titulo, autor }) {
    return `Libro: ${titulo}, Autor: ${autor}`;
}

const libro = { titulo: "1984", autor: "George Orwell" };
console.log(mostrarLibro(libro));// Output: Libro: 1984, Autor: George Orwell

function mostrarPrimeros([primero, segundo, tercero]) {
    return `Primero: ${primero}, Segundo: ${segundo}, Tercero: ${tercero}`;
}

const numeros = [10, 20, 30];
console.log(mostrarPrimeros(numeros)); // Output: Primero: 10, Segundo: 20, Tercero: 30