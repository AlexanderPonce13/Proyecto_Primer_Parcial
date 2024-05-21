// Función para alternar la visibilidad de la barra lateral
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none'; // Si la barra lateral está visible, la oculta
    } else {
        sidebar.style.display = 'block'; // Si la barra lateral está oculta, la muestra
    }
}

// Función para navegar a una URL específica
function navigateTo(url) {
    window.location.href = url; // Redirecciona a la URL especificada
}

// Listener para esperar a que se cargue el contenido antes de ejecutar ciertas funciones
document.addEventListener('DOMContentLoaded', function() {
    // Aquí solamente vamos a llamar a la función para actualizar estadísticas
    updateStats();
});

// Función para actualizar las estadísticas en la página
function updateStats() {
    // Obtiene las estadísticas almacenadas localmente o establece el valor predeterminado como 0 si no hay datos
    const totalEquipos = localStorage.getItem('totalEquipos') || 0;
    const equiposActivos = localStorage.getItem('equiposActivos') || 0;
    const equiposMantenimiento = localStorage.getItem('equiposMantenimiento') || 0;

    // Actualiza el contenido de los elementos HTML con las estadísticas obtenidas
    document.getElementById('totalEquipos').textContent = totalEquipos;
    document.getElementById('equiposActivos').textContent = equiposActivos;
    document.getElementById('equiposMantenimiento').textContent = equiposMantenimiento;
}
