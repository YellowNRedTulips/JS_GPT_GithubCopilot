let persona = {
    nombre: "Aurelio",
    edad: 27,
    esProgramador: true,
    hobbies: ["escritura", "música", "fútbol", "programación"],
    saludar: function () {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }
};

// Acceso
console.log(persona.nombre); // "Aurelio"
console.log(persona["hobbies"]); // ["escritura", "música", "programación"]

// Modificación
persona.edad = 28;
persona.pais = "España";
console.log(persona);

// Métodos
console.log(persona.saludar()); // "Hola, soy Aurelio y tengo 28 años."

// Iterar propiedades
for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

// Métodos de objeto
console.log(Object.keys(persona)); // ["nombre", "edad", "esProgramador", "hobbies", "pais", "saludar"]
console.log(Object.values(persona)); // ["Aurelio", 28, true, ["escritura", "música", "programación"], "España", f]
console.log(Object.entries(persona)); // Pares clave-valor

let texto = "Hola, JavaScript!";

// slice
console.log(texto.slice(6, 16)); // "JavaScript"
console.log(texto.slice(-10));   // "JavaScript"

// substring
console.log(texto.substring(6, 16)); // "JavaScript"
console.log(texto.substring(16, 6)); // "JavaScript"

// toUpperCase y toLowerCase
console.log(texto.toUpperCase()); // "HOLA, JAVASCRIPT!"
console.log(texto.toLowerCase()); // "hola, javascript!"

// replace
console.log(texto.replace("JavaScript", "Mundo")); // "Hola, Mundo!"
console.log(texto.replace(/a/g, "A")); // "HolA, JAvAScript!"

// split
let frutas = "manzana, pera, uva";
console.log(frutas.split(", ")); // ["manzana", "pera", "uva"]

// trim
let espaciado = "   Hola, Mundo!   ";
console.log(espaciado.trim()); // "Hola, Mundo!"

// includes
console.log(texto.includes("Java")); // true
console.log(texto.includes("Python")); // false

// startsWith y endsWith
console.log(texto.startsWith("Hola")); // true
console.log(texto.endsWith("!")); // true

// charAt y charCodeAt
console.log(texto.charAt(0)); // "J"
console.log(texto.charCodeAt(0)); // 74

// repeat
let saludo = "Hola ";
console.log(saludo.repeat(3)); // "Hola Hola Hola "

// Variables simples
let producto = "Laptop";
let precio = 899.99;

let mensaje = `El producto ${producto} cuesta $${precio}.`;
console.log(mensaje); // "El producto Laptop cuesta $899.99."

// Evaluación de expresiones
let cantidad = 3;
let total = precio * cantidad;

console.log(`El total por comprar ${cantidad} ${producto}s es $${total}.`);
// "El total por comprar 3 Laptops es $2699.97."

// Texto en múltiples líneas
let descripcion = `Características de la ${producto}:
- Pantalla 15.6"
- Procesador Intel Core i7
- 16GB RAM
- SSD 512GB`;

console.log(descripcion);
/*
Características de la Laptop:
- Pantalla 15.6"
- Procesador Intel Core i7
- 16GB RAM
- SSD 512GB
*/

// Llamada a métodos
let nombre = "Aurelio";
let saludo2 = `¡Hola, ${nombre.charAt(0).toUpperCase() + nombre.slice(1)}!`;
console.log(saludo2); // "¡Hola, Aurelio!"

// Plantilla dinámica para mensajes
function mensajeDeError(campo) {
  return `El campo "${campo}" es obligatorio.`;
}

console.log(mensajeDeError("Correo electrónico")); // "El campo 'Correo electrónico' es obligatorio."

// Ejemplo avanzado: datos dinámicos
let items = [
  { producto: "Laptop", precio: 899.99 },
  { producto: "Mouse", precio: 19.99 },
  { producto: "Teclado", precio: 49.99 },
];

let factura = `Factura:
${items.map(item => `- ${item.producto}: $${item.precio}`).join("\n")}
Total: $${items.reduce((total, item) => total + item.precio, 0).toFixed(2)}
`;

console.log(factura);
/*
Factura:
- Laptop: $899.99
- Mouse: $19.99
- Teclado: $49.99
Total: $969.97
*/