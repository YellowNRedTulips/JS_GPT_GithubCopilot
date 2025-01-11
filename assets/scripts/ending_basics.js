// Función flecha con un solo parámetro y retorno implícito
const cuadrado = x => x * x;
console.log(`El cuadrado de 5 es: ${cuadrado(5)}`); // Output: 25

// Función flecha con múltiples parámetros
const sumar = (a, b) => a + b;
console.log(`La suma de 3 y 4 es: ${sumar(3, 4)}`); // Output: 7

// Función flecha con cuerpo explícito
const multiplicar = (a, b) => {
    return a * b;
};
console.log(`El producto de 3 y 4 es: ${multiplicar(3, 4)}`); // Output: 12

// Uso de función flecha para concatenar cadenas
const saludo = nombre => `Hola, ${nombre}!`;
console.log(saludo("Aurelio")); // Output: Hola, Aurelio!

// Función flecha que hereda el contexto de this
function Persona(nombre) {
    this.nombre = nombre;
}

Persona.prototype.hablar = function () {
    setTimeout(() => {
        console.log(`Hola, soy ${this.nombre}`); // Usa `this` heredado
    }, 1000);
};

const persona = new Persona("Aurelio");
persona.hablar(); // Output (después de 1 segundo): Hola, soy Aurelio

// Uso en arrays: map, filter, reduce
const numeros = [1, 2, 3, 4, 5];

// Doblar cada número
const dobles = numeros.map(num => num * 2);
console.log(`Dobles: ${dobles}`); // Output: [2, 4, 6, 8, 10]

// Filtrar números mayores que 3
const mayores = numeros.filter(num => num > 3);
console.log(`Números mayores que 3: ${mayores}`); // Output: [4, 5]

// Sumar todos los números
const suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(`La suma de todos los números es: ${suma}`); // Output: 15

// Ejemplo de Scope Global
let mensajeGlobal = "Soy una variable global";

function mostrarMensajeGlobal() {
    console.log(mensajeGlobal); // Acceso a la variable global
}

mostrarMensajeGlobal(); // Output: Soy una variable global
console.log(mensajeGlobal); // Output: Soy una variable global

// Ejemplo de Scope Local
function mostrarMensajeLocal() {
    let mensajeLocal = "Soy una variable local";
    console.log(mensajeLocal); // Output: Soy una variable local
}

mostrarMensajeLocal();
// console.log(mensajeLocal); // Error: mensajeLocal is not defined

// Ejemplo de Variables Globales y Locales con el mismo nombre
let mensaje = "Variable global";

function cambiarMensaje() {
    let mensaje = "Variable local"; // Variable local sombreando la global
    console.log(mensaje); // Output: Variable local
}

cambiarMensaje();
console.log(mensaje); // Output: Variable global

// Ejemplo de Scope de Bloque
{
    let bloqueLet = "Variable con alcance de bloque";
    var bloqueVar = "Variable no limitada por el bloque";
    console.log(bloqueLet); // Output: Variable con alcance de bloque
}
console.log(bloqueVar); // Output: Variable no limitada por el bloque
// console.log(bloqueLet); // Error: bloqueLet is not defined

// Ejemplo básico de closure
function crearContador() {
    let contador = 0; // Variable de la función externa
    
    return function incrementar() { // Función interna (closure)
        contador++; // Accede a la variable de la función externa
        return contador;
    };
}

const miContador = crearContador();
console.log(miContador()); // Output: 1
console.log(miContador()); // Output: 2
console.log(miContador()); // Output: 3

const otroContador = crearContador();
console.log(otroContador()); // Output: 1 (Nuevo scope para este contador)

// Ejemplo de closure para encapsular datos
function crearCajaSecreta() {
    let secreto = "Este es un secreto";

    return {
        obtenerSecreto: function () {
            return secreto;
        },
        cambiarSecreto: function (nuevoSecreto) {
            secreto = nuevoSecreto;
        },
    };
}

const caja = crearCajaSecreta();
console.log(caja.obtenerSecreto()); // Output: Este es un secreto
caja.cambiarSecreto("Nuevo secreto");
console.log(caja.obtenerSecreto()); // Output: Nuevo secreto

// Ejemplo práctico: contador con diferentes closures
function crearContadorConEtiqueta(etiqueta) {
    let contador = 0;

    return function incrementar() {
        contador++;
        return `${etiqueta}: ${contador}`;
    };
}

const contadorA = crearContadorConEtiqueta("Contador A");
const contadorB = crearContadorConEtiqueta("Contador B");

console.log(contadorA()); // Output: Contador A: 1
console.log(contadorA()); // Output: Contador A: 2
console.log(contadorB()); // Output: Contador B: 1
console.log(contadorB()); // Output: Contador B: 2
console.log(contadorA()); // Output: Contador A: 3