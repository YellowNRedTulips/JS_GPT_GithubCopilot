class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    // Método para saludar
    saludar() {
      console.log(`Hola, soy ${this.nombre}.`);
    }
  
    // Método para verificar si la persona es mayor de edad
    esMayorDeEdad() {
      return this.edad >= 18 ? "Soy mayor de edad." : "Soy menor de edad.";
    }
  
    // Método para cambiar el nombre
    cambiarNombre(nuevoNombre) {
      this.nombre = nuevoNombre;
      console.log(`Mi nuevo nombre es ${this.nombre}.`);
    }
  }
  
  // Crear una instancia y probar los métodos
  const persona = new Persona("Juan", 16);
  
  persona.saludar();                // Hola, soy Juan.
  console.log(persona.esMayorDeEdad()); // Soy menor de edad.
  persona.cambiarNombre("Carlos");  // Mi nuevo nombre es Carlos.
  persona.saludar();                // Hola, soy Carlos.  

  class Tarea {
    constructor(nombre, prioridad = "media") {
      this.nombre = nombre;
      this.prioridad = prioridad;
      this.completada = false;
      this.status = function () {
        if (this.completada === true) {
          return "Completada";
        } else {
          return "Pendiente";
        }
      }
    }
  
    // Método para completar la tarea
    completar() {
      this.completada = true;
      console.log(`La tarea "${this.nombre}" ha sido completada.`);
    }
  
    // Método para mostrar información
    info() {
      console.log(
        `Tarea: ${this.nombre}, Prioridad: ${this.prioridad}, Estado: ${this.status()}`
      );
    }
  }
  
  // Crear instancias de tareas
  const tarea1 = new Tarea("Aprender JavaScript", "alta");
  const tarea2 = new Tarea("Escribir en el blog");
  
  // Usar métodos
  tarea1.info(); // Tarea: Aprender JavaScript, Prioridad: alta, Completada: false
  tarea2.info(); // Tarea: Escribir en el blog, Prioridad: media, Completada: false
  
  tarea1.completar(); // Tarea "Aprender JavaScript" completada.
  tarea1.info(); // Tarea: Aprender JavaScript, Prioridad: alta, Completada: true  
  tarea2.info(); // Tarea: Escribir en el blog, Prioridad: media, Completada: false

//This
function saludar(saludo) {
  console.log(`${saludo}, soy ${this.nombre}`);
}

const person = { nombre: "Aurelio" };

saludar.call(person, "Hola"); // Hola, soy Aurelio
saludar.apply(person, ["Hola"]); // Hola, soy Aurelio

const saludarAurelio = saludar.bind(person);
saludarAurelio("Hola"); // Hola, soy Aurelio

//Extends y super

class Vehiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  mostrarInfo() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
  }
}

class Coche extends Vehiculo {
  constructor(marca, modelo, tipo) {
    super(marca, modelo); // Llama al constructor de la clase Vehiculo
    this.tipo = tipo;
  }

  mostrarInfo() {
    super.mostrarInfo(); // Llama al método de la clase Vehiculo
    console.log(`Tipo: ${this.tipo}`);
  }
}

const coche = new Coche("Toyota", "Corolla", "Sedán");
coche.mostrarInfo();
// Salida:
// Marca: Toyota, Modelo: Corolla
// Tipo: Sedán