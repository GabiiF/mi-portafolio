let envio;
document.getElementById("form").addEventListener("submit", function(event) {
    //event.preventDefault(); // Previene el envío del formulario

    // Obtener los valores
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    // Validar el formulario
    if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
        envio=false;
        return; // Termina la función si hay campos vacíos
    }

    if (!validarEmail(email)) {
        alert('Por favor, completa con un email correcto.');
        event.preventDefault(); // Detiene el envío del formulario si la validación falla
        envio=false;
        return; // Termina la función si el email no es válido
    }
    envio=true;
    alert("¡Se ha enviado el mensaje correctamente! Espere a que recargue la página");
});

function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

