console.log('Hello World!');

class Persona {
    // Constructor: inicializa las propiedades
    constructor(nombre, edad) {
      this.nombre = nombre; // Propiedad
      this.edad = edad; // Propiedad
    }
  
    // Método: define un comportamiento
    saludar() {
      console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
      super(nombre, edad);
      this.curso = curso;
    }
  
    estudiar() {
      console.log(`Estudiando ${this.curso}`);
    }
  }

const estudiante1 = new Estudiante("Aurelio", 27, "JavaScript");
estudiante1.saludar(); // Hola, me llamo Aurelio y tengo 27 años.
estudiante1.estudiar(); // Estudiando JavaScript.

class Animal {
    constructor(nombre, tipo) {
      this.nombre = nombre; // Propiedad
      this.tipo = tipo; // Propiedad
    }
  
    // Método para describir al animal
    describir() {
      return `Este es un ${this.tipo} llamado ${this.nombre}.`;
    }
  }
  
  const animal1 = new Animal("Firulais", "perro");
  console.log(animal1.describir()); // Este es un perro llamado Firulais.

  class Vehiculo {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    mostrarInfo() {
      return `Vehículo: ${this.marca} ${this.modelo}`;
    }
  }
  
  class Auto extends Vehiculo {
    constructor(marca, modelo, puertas) {
      super(marca, modelo); // Llama al constructor de la clase padre
      this.puertas = puertas; // Nueva propiedad
    }
  
    mostrarInfo() {
      // Sobrescribir método del padre
      return `${super.mostrarInfo()} con ${this.puertas} puertas.`;
    }
  }
  
const miVehiculo = new Vehiculo("Toyota", "Corolla");
console.log(miVehiculo.mostrarInfo()); // Vehículo: Toyota Corolla
const miAuto = new Auto("Toyota", "Corolla", 4);
console.log(miAuto.mostrarInfo()); // Vehículo: Toyota Corolla con 4 puertas.

//Métodos estáticos
class Matematica {
    static sumar(a, b) {
      return a + b;
    }
  }
  
console.log(Matematica.sumar(5, 3)); // 8

//Propiedades privadas
class Banco {
    #saldo; // Propiedad privada
  
    constructor(nombre, saldoInicial) {
      this.nombre = nombre;
      this.#saldo = saldoInicial;
    }
  
    depositar(cantidad) {
      this.#saldo += cantidad;
    }
  
    mostrarSaldo() {
      return `${this.nombre} tiene un saldo de $${this.#saldo}`;
    }
  }
  
const cuenta = new Banco("Aurelio", 1000);
cuenta.depositar(500);
console.log(cuenta.mostrarSaldo()); // Aurelio tiene un saldo de $1500
// console.log(cuenta.#saldo); // Error: Private field '#saldo' must be declared in an enclosing class

class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    // Getter
    get area() {
      return this.alto * this.ancho;
    }
  
    // Setter
    set dimensiones({ alto, ancho }) {
      this.alto = alto;
      this.ancho = ancho;
    }
  }

const square = new Rectangulo();
console.log(square.alto, square.ancho)

const rect = new Rectangulo(5, 10);
console.log(rect.area); // 50
console.log(rect.alto, rect.ancho)

rect.dimensiones = { alto: 3, ancho: 7 };
console.log(rect.area); // 21
console.log(rect.alto, rect.ancho)  