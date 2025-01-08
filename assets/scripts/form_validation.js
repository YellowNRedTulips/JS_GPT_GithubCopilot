document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registroForm");
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const contrasena = document.getElementById("contrasena");

    const errorNombre = document.getElementById("errorNombre");
    const errorCorreo = document.getElementById("errorCorreo");
    const errorContrasena = document.getElementById("errorContrasena");

    form.addEventListener("submit", (event) => {
        let valido = true;

        // Validación del nombre
        if (!nombre.value.trim()) {
            errorNombre.textContent = "El nombre es obligatorio.";
            valido = false;
        } else if (nombre.value.length < 3) {
            errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
            valido = false;
        } else {
            errorNombre.textContent = "";
        }

        // Validación del correo
        if (!correo.value.trim()) {
            errorCorreo.textContent = "El correo es obligatorio.";
            valido = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value)) {
            errorCorreo.textContent = "El formato del correo no es válido.";
            valido = false;
        } else {
            errorCorreo.textContent = "";
        }

        // Validación de la contraseña
        if (!contrasena.value.trim()) {
            errorContrasena.textContent = "La contraseña es obligatoria.";
            valido = false;
        } else if (contrasena.value.length < 8) {
            errorContrasena.textContent = "La contraseña debe tener al menos 8 caracteres.";
            valido = false;
        } else {
            errorContrasena.textContent = "";
        }

        // Prevenir el envío si hay errores
        if (!valido) {
            event.preventDefault();
        }
    });
});
