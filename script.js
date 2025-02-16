const formulario = document.getElementById('registro');

formulario.addEventListener('submit', mostrarConfirmacion);

function mostrarConfirmacion(event) {
    event.preventDefault();  // Evita el envío del formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const edad = document.getElementById("edad").value;
    const genero = document.querySelector('input[name="genero"]:checked') ? document.querySelector('input[name="genero"]:checked').value : "";
    const pais = document.getElementById("pais").value;
    const comentario = document.getElementById("comentario").value;

    // Mostrar los valores en la página de confirmación
    document.getElementById("confirmacion").innerHTML = `
        <h3>Datos a Enviar:</h3>
        <p><strong>Nombre Completo:</strong> ${nombre}</p>
        <p><strong>Correo Electrónico:</strong> ${email}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Género:</strong> ${genero}</p>
        <p><strong>País:</strong> ${pais}</p>
        <p><strong>Comentario:</strong> ${comentario}</p>
        <button onclick="enviarFormulario()">Confirmar Envío</button>
        <button onclick="volverFormulario()">Volver al Formulario</button>
    `;
}

// Función para enviar el formulario
function enviarFormulario() {
    document.getElementById("formulario").submit();
}

// Función para volver al formulario
function volverFormulario() {
    document.getElementById("confirmacion").innerHTML = ""; // Limpiar la sección de confirmación
}