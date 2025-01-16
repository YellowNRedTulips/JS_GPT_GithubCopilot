// Crear fechas
let actual = new Date();
let especifica = new Date(2025, 0, 16, 14, 30, 0);
let desdeTexto = new Date("2025-01-16T14:30:00");
let desdeTimestamp = new Date(1673875800000);

console.log("Fechas:");
console.log("Actual:", actual);
console.log("Específica:", especifica);
console.log("Desde texto:", desdeTexto);
console.log("Desde timestamp:", desdeTimestamp);

// Obtener partes de la fecha
console.log("\nPartes de la fecha:");
console.log("Año:", actual.getFullYear());
console.log("Mes:", actual.getMonth());
console.log("Día del mes:", actual.getDate());
console.log("Día de la semana:", actual.getDay());
console.log("Hora:", actual.getHours());
console.log("Minutos:", actual.getMinutes());
console.log("Segundos:", actual.getSeconds());
console.log("Milisegundos:", actual.getMilliseconds());
console.log("Timestamp:", actual.getTime());

// Modificar la fecha
console.log("\nModificar fecha:");
actual.setFullYear(2030);
actual.setMonth(11);
actual.setDate(25);
actual.setHours(9, 0, 0);
console.log("Fecha modificada:", actual);

// Comparar fechas
console.log("\nComparar fechas:");
let fecha1 = new Date(2025, 0, 16);
let fecha2 = new Date(2023, 11, 31);
console.log("¿Fecha1 > Fecha2?", fecha1 > fecha2);

// Formatear fechas
console.log("\nFormatear fechas:");
console.log("Formato corto:", actual.toDateString());
console.log("Formato largo:", actual.toTimeString());
console.log("ISO:", actual.toISOString());
console.log("Local (es-ES):", actual.toLocaleDateString("es-ES"));
console.log("Hora local (es-ES):", actual.toLocaleTimeString("es-ES"));

// Ejemplo básico
try {
    let resultado = 10 / 0; // Esto no causa error, devuelve Infinity
    console.log("Resultado:", resultado);

    if (resultado === Infinity) {
        throw new Error("División por cero no permitida");
    }
} catch (error) {
    console.error("Ocurrió un error:", error.message);
} finally {
    console.log("Bloque finally ejecutado.");
}

// Ejemplo con entrada del usuario
function procesarEdad(edad) {
    try {
        if (isNaN(edad)) {
            throw new Error("La edad debe ser un número.");
        }
        if (edad < 0) {
            throw new Error("La edad no puede ser negativa.");
        }
        console.log(`Tu edad es: ${edad}`);
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Proceso finalizado.");
    }
}

procesarEdad("veinte"); // Error
procesarEdad(-5);       // Error
procesarEdad(25);       // Correcto

// Ejemplo avanzado con JSON
function obtenerDatos() {
    try {
        let respuesta = JSON.parse('{ "nombre": "Aurelio" }'); // Correcto
        console.log("Datos obtenidos:", respuesta);
        
    } catch (error) {
        console.error("Error al procesar los datos:", error.message);
    } finally {
        console.log("Finalizando la operación.");
    }
}

obtenerDatos();

function simularPeticionServidor(dato) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dato === "correcto") {
                resolve("Datos recibidos correctamente.");
            } else {
                reject(new Error("Error al procesar la petición."));
            }
        }, 2000); // Simula un retraso de 2 segundos
    });
}

async function manejarPeticion(dato) {
    try {
        console.log("Iniciando petición...");
        let respuesta = await simularPeticionServidor(dato);
        console.log("Respuesta del servidor:", respuesta);
    } catch (error) {
        console.error("Ocurrió un error:", error.message);
    } finally {
        console.log("Proceso completado.");
    }
}

// Casos de prueba
manejarPeticion("correcto");  // Caso exitoso
manejarPeticion("incorrecto"); // Caso con error

// Ejemplo completo del uso del objeto Error

// Validación básica con Error
try {
    throw new Error("Esto es un error genérico.");
} catch (e) {
    console.log("----- Error genérico -----");
    console.log("Nombre del error:", e.name);  // "Error"
    console.log("Mensaje del error:", e.message);  // "Esto es un error genérico."
    console.log("Stack trace:", e.stack);  // Información sobre el error
    console.log("---------------------------\n");
}

// Usando errores específicos
try {
    let valor = undefined;
    console.log(valor.propiedad);  // Intentar acceder a propiedad de undefined
} catch (e) {
    if (e instanceof TypeError) {
        console.log("----- Error de tipo -----");
        console.error("¡Error de tipo detectado:", e.message);  // Detalle del error
        console.log("--------------------------\n");
    }
}

// Validación con rango usando RangeError
function validarEdad(edad) {
    if (edad < 0 || edad > 150) {
        throw new RangeError("La edad debe estar entre 0 y 150.");
    }
    if (typeof edad !== "number") {
        throw new TypeError("La edad debe ser un número.");
    }
    console.log("Edad válida:", edad);
}

try {
    validarEdad(-5);  // Probar con un valor inválido
} catch (e) {
    console.log("----- Validación de edad -----");
    console.error(`Error detectado: ${e.name} - ${e.message}`);
    console.log("-------------------------------\n");
}

// Clase de error personalizada
class MiErrorPersonalizado extends Error {
    constructor(mensaje) {
        super(mensaje);  // Llama al constructor de la clase base
        this.name = "MiErrorPersonalizado";  // Nombre personalizado
    }
}

try {
    throw new MiErrorPersonalizado("Este es un error personalizado.");
} catch (e) {
    console.log("----- Error personalizado -----");
    console.log("Nombre:", e.name);  // "MiErrorPersonalizado"
    console.log("Mensaje:", e.message);  // "Este es un error personalizado."
    console.log("-------------------------------\n");
}

// Simulación con promesas y manejo de errores
function obtenerDatos() {
    return new Promise((resolve, reject) => {
        let exito = false;  // Cambia a true para simular éxito
        setTimeout(() => {
            if (exito) {
                resolve("Datos obtenidos correctamente.");
            } else {
                reject(new Error("Error al obtener los datos."));
            }
        }, 1000);
    });
}

console.log("----- Promesa con manejo de error -----");
obtenerDatos()
    .then((datos) => console.log("Éxito:", datos))
    .catch((e) => console.error("Error detectado en la promesa:", e.message))
    .finally(() => console.log("Operación finalizada.\n"));