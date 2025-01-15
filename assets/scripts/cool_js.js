// 1. Modificación del array

// Agregar elementos al final
let frutas = ["manzana", "pera"];
frutas.push("naranja", "plátano"); // Agrega "naranja" y "plátano"
console.log(frutas); // ["manzana", "pera", "naranja", "plátano"]

// Eliminar el último elemento
let ultimaFruta = frutas.pop(); // Elimina "plátano"
console.log(frutas); // ["manzana", "pera", "naranja"]
console.log(ultimaFruta); // "plátano"

// Agregar elementos al inicio
let numeros = [2, 3];
numeros.unshift(0, 1); // Agrega 1 y 0 al inicio
console.log(numeros); // [0, 1, 2, 3]

// Eliminar el primer elemento
let primerNumero = numeros.shift(); // Elimina 0
console.log(numeros); // [1, 2, 3]
console.log(primerNumero); // 0

// 2. Iteración y transformación

// map(): Elevar al cuadrado cada número
let cuadrados = numeros.map(num => num ** 2);
console.log(cuadrados); // [1, 4, 9]
console.log(numeros); // [1, 2, 3]

// filter(): Filtrar números mayores a 1
let mayores = numeros.filter(num => num > 1);
console.log(mayores); // [2, 3]
console.log(numeros); // [1, 2, 3]

// reduce(): Sumar todos los números
let suma = numeros.reduce((acum, num) => acum + num, 0);
console.log(suma); // 6

// 3. Búsqueda y comprobación

// find(): Encontrar el primer número mayor a 1
let encontrado = numeros.find(num => num > 1);
console.log(encontrado); // 2

// findIndex(): Índice del primer número mayor a 1
let indice = numeros.findIndex(num => num > 1);
console.log(indice); // 1

// includes(): Verificar si el array contiene un valor
console.log(numeros.includes(3)); // true
console.log(numeros.includes(4)); // false

// 4. Modificación avanzada

// splice(): Reemplazar elementos
let reemplazos = [1, 2, 3, 4];
reemplazos.splice(1, 2, 99, 100); // Reemplaza 2 y 3 por 99 y 100
console.log(reemplazos); // [1, 99, 100, 4]

// slice(): Copiar una parte del array
let parte = reemplazos.slice(1, 3); // Copia índices 1 y 2
console.log(parte); // [99, 100]

// 5. Ordenamiento

// sort(): Ordenar números en orden ascendente
let desordenados = [3, 1, 4, 2];
desordenados.sort((a, b) => a - b);
console.log(desordenados); // [1, 2, 3, 4]

// reverse(): Invertir el orden de los elementos
desordenados.reverse();
console.log(desordenados); // [4, 3, 2, 1]

// 6. Conversión

// join(): Unir elementos con un separador
let palabras = ["Hola", "mundo"];
let frase = palabras.join(" ");
console.log(frase); // "Hola mundo"

// toString(): Convertir el array a string
console.log(palabras.toString()); // "Hola,mundo"

// --- VARIANTES ÚTILES ---

// Multiplicar todos los números en un array usando reduce
let multiplicacion = numeros.reduce((acum, num) => acum * num, 1);
console.log(multiplicacion); // 6

// Filtrar y transformar en una sola línea
let resultado = numeros.filter(num => num > 1).map(num => num * 10);
console.log(resultado); // [20, 30]

// Encontrar múltiples índices (findIndex + filter)
let indices = numeros
  .map((num, index) => (num > 1 ? index : -1))
  .filter(index => index !== -1);
console.log(indices); // [1, 2]