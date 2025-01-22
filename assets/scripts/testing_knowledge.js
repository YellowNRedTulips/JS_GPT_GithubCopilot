//Beginner: 1
function calc (n1, n2, op) {
    switch (op) {
        case '+':
            return console.log(n1 + n2);
        case '-':
            return console.log(n1 - n2);
        case '*':
            return console.log(n1 * n2);
        case '/':
            return console.log(n1 / n2);
        default:
            return console.log('Invalid operator');
    }
}

calc(1, 2, '+');

//Intermediate: 1
// Función para contar palabras
function contarPalabras(texto) {
    // Elimina espacios extras al principio y al final, luego divide por espacios
    return texto.trim().split(/\s+/).length;
}

// Función para contar caracteres con espacios
function contarCaracteresConEspacios(texto) {
    // Devuelve la longitud total del texto
    return texto.length;
}

// Función para contar caracteres sin espacios
function contarCaracteresSinEspacios(texto) {
    // Reemplaza todos los espacios con una cadena vacía y cuenta los caracteres restantes
    return texto.replace(/\s+/g, "").length;
}

// Función principal para analizar texto
function analizarTexto(texto) {
    console.log("Análisis del texto:");
    console.log(`Texto ingresado: "${texto}"`);
    console.log(`Total de palabras: ${contarPalabras(texto)}`);
    console.log(`Total de caracteres (con espacios): ${contarCaracteresConEspacios(texto)}`);
    console.log(`Total de caracteres (sin espacios): ${contarCaracteresSinEspacios(texto)}`);
}

// Ejemplo de uso
const textoDePrueba = "Hola mundo, ¡esto es JavaScript!";
analizarTexto(textoDePrueba);

//Hard
console.log("\nHard (Tasks)");
class GestorDeTareas {
    constructor() {
        this.tareas = []; // Almacena las tareas
    }

    // Método para agregar una tarea
    agregarTarea(descripcion) {
        const nuevaTarea = {
            id: this.tareas.length + 1,
            descripcion: descripcion,
            completada: false,
        };
        this.tareas.push(nuevaTarea);
        console.log(`Tarea agregada: "${descripcion}"`);
    }

    // Método para listar todas las tareas
    listarTareas() {
        console.log("\nListado de tareas:");
        if (this.tareas.length === 0) {
            console.log("No hay tareas registradas.");
        } else {
            this.tareas.forEach((tarea) => {
                console.log(
                    `[${tarea.completada ? "X" : " "}] ${tarea.id}: ${tarea.descripcion}`
                );
            });
        }
    }

    // Método para marcar una tarea como completada
    completarTarea(id) {
        const tarea = this.tareas.find((t) => t.id === id);
        if (tarea) {
            tarea.completada = true;
            console.log(`Tarea completada: "${tarea.descripcion}"`);
        } else {
            console.log(`No se encontró una tarea con el ID: ${id}`);
        }
    }

    // Método para eliminar una tarea
    eliminarTarea(id) {
        const indice = this.tareas.findIndex((t) => t.id === id);
        if (indice !== -1) {
            const tareaEliminada = this.tareas.splice(indice, 1);
            console.log(`Tarea eliminada: "${tareaEliminada[0].descripcion}"`);
        } else {
            console.log(`No se encontró una tarea con el ID: ${id}`);
        }
    }
}

// Ejemplo de uso
const gestor = new GestorDeTareas();

gestor.agregarTarea("Aprender JavaScript");
gestor.agregarTarea("Repasar HTML y CSS");
gestor.agregarTarea("Construir un proyecto personal");

gestor.listarTareas(); // Muestra todas las tareas

gestor.completarTarea(1); // Marca la tarea con ID 1 como completada
gestor.listarTareas(); // Muestra todas las tareas después de marcar como completada

gestor.eliminarTarea(2); // Elimina la tarea con ID 2
gestor.listarTareas(); // Muestra todas las tareas después de eliminar una
