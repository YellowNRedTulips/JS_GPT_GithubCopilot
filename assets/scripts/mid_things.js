// Ejemplo de if
const numero = 8;
if (numero % 2 === 0) {
    console.log("El número es par.");
}

// Ejemplo de if-else
const edad = 16;
if (edad >= 18) {
    console.log("Puedes votar.");
} else {
    console.log("No puedes votar.");
}

// Ejemplo de else if
const nota = 85;
if (nota >= 90) {
    console.log("Excelente.");
} else if (nota >= 70) {
    console.log("Aprobado.");
} else {
    console.log("Reprobado.");
}

// Ejemplo de operador ternario
const clima = "lluvioso";
const sugerencia = clima === "lluvioso" ? "Lleva un paraguas." : "No olvides tus gafas de sol.";
console.log(sugerencia);

//Cambio de temática
console.log("\nBucles");

// Bucle for
console.log("\nBucle for:");
for (let i = 0; i < 3; i++) {
    console.log("Iteración:", i);
}

// Bucle while
console.log("\nBucle while:");
let contador = 0;
while (contador < 3) {
    console.log("Contador:", contador);
    contador++;
}

// Bucle do...while
console.log("\nBucle do...while:");
let number = 4;
do {
    console.log("Número:", number);
    number++;
} while (number < 3);

// Bucle for...of
console.log("\nBucle for...of:");
const frutas = ["Manzana", "Banana", "Cereza"];
for (const fruta of frutas) {
    console.log("Fruta:", fruta);
}

// Bucle for...in con un objeto
console.log("\nBucle for...in con un objeto:");
const persona = { nombre: "Aurelio", edad: 27, país: "España" };
for (const clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

// Bucle for...in con un array
console.log("\nBucle for...in con un array:");
const numeros = [10, 20, 30];
for (const indice in numeros) {
    console.log(`Índice: ${indice}, Valor: ${numeros[indice]}`);
}

// Ejemplo con break
console.log("\nEjemplo con break:");
const animales = ["Perro", "Gato", "Conejo", "León", "Tigre"];
for (let animal of animales) {
    if (animal === "León") {
        console.log("Se encontró al León, deteniendo el bucle.");
        break;
    }
    console.log("Animal:", animal);
}

// Ejemplo con continue
console.log("\nEjemplo con continue:");
const numeros2 = [1, 2, 3, 4, 5, 6, 7];
for (let numero of numeros2) {
    if (numero % 2 === 0) {
        continue;
    }
    console.log("Número impar:", numero);
}

// Ejemplo combinado de break y continue
console.log("\nEjemplo combinado de break y continue:");
const palabras = ["casa", "carro", "bobo", "camión", "barco", "avión"];
for (let palabra of palabras) {
    if (palabra.startsWith("b")) {
        console.log(`Saltando palabra que empieza con "b": ${palabra}`);
        continue;
    }
    if (palabra === "camión") {
        console.log("Se encontró 'camión', terminando el bucle.");
        break;
    }
    console.log("Palabra procesada:", palabra);
}