// Añade un evento de escucha al formulario de inicio de sesión para el evento 'submit'
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario para manejar la validación manualmente
    
    // Obtiene los valores de los campos de nombre de usuario y contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var valid = true; // Variable para controlar la validez del formulario

    // Validación del nombre de usuario
    if (username.trim() === '') { // Verifica si el campo de nombre de usuario está vacío
        valid = false;
        document.getElementById('usernameError').textContent = 'El nombre de usuario es obligatorio.';
        document.getElementById('usernameError').style.display = 'block'; // Muestra el mensaje de error
    } else {
        document.getElementById('usernameError').style.display = 'none'; // Oculta el mensaje de error si el campo no está vacío
    }

    // Validación de la contraseña
    if (password.trim() === '') { // Verifica si el campo de contraseña está vacío
        valid = false;
        document.getElementById('passwordError').textContent = 'La contraseña es obligatoria.';
        document.getElementById('passwordError').style.display = 'block'; // Muestra el mensaje de error
    } else {
        document.getElementById('passwordError').style.display = 'none'; // Oculta el mensaje de error si el campo no está vacío
    }

    if (valid) { // Si ambos campos son válidos
        // Simulación de una autenticación exitosa
        if (username === 'usuario' && password === 'contraseña') { // Verifica las credenciales de prueba
            alert('Inicio de sesión exitoso.'); // Muestra una alerta de éxito
            // Redirige al usuario al panel de control
            window.location.href = "../dashboard.html";
        } else {
            alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.'); // Muestra una alerta de error si las credenciales son incorrectas
        }
    }
});
