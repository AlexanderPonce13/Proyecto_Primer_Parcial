document.addEventListener("DOMContentLoaded", () => {
    const equipmentForm = document.getElementById("equipmentForm");

    equipmentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        // Obtener valores de los campos del formulario
        const serialNumber = document.getElementById("serialNumber").value;
        const equipmentName = document.getElementById("equipmentName").value;
        const acquisitionDate = document.getElementById("acquisitionDate").value;
        const status = document.getElementById("status").value;
        const department = document.getElementById("department").value;
        const assignee = document.getElementById("assignee").value;
        
        // Crear un nuevo objeto de equipo con los valores obtenidos
        const newEquipment = {
            serialNumber,
            equipmentName,
            acquisitionDate,
            status,
            department,
            assignee
        };

        // Obtener la lista de equipos del almacenamiento local o inicializarla si está vacía
        let equipmentList = JSON.parse(localStorage.getItem("equipmentList")) || [];
        // Agregar el nuevo equipo a la lista
        equipmentList.push(newEquipment);
        // Guardar la lista actualizada en el almacenamiento local
        localStorage.setItem("equipmentList", JSON.stringify(equipmentList));

        // Reiniciar el formulario después de agregar el equipo
        equipmentForm.reset();
        // Mostrar un mensaje de confirmación
        alert("Equipo agregado correctamente");

        // Llamar a la función para actualizar las estadísticas en la página principal
        updateMainPageStats();
    });
});

function updateMainPageStats() {
    // Obtener la lista de equipos del almacenamiento local o inicializarla si está vacía
    const equipmentList = JSON.parse(localStorage.getItem('equipmentList')) || [];

    // Calcular las estadísticas necesarias
    const totalEquipos = equipmentList.length;
    const equiposActivos = equipmentList.filter(e => e.status === 'activo').length;
    const equiposMantenimiento = equipmentList.filter(e => e.status === 'mantenimiento').length;

    // Guardar las estadísticas en el almacenamiento local
    localStorage.setItem('totalEquipos', totalEquipos);
    localStorage.setItem('equiposActivos', equiposActivos);
    localStorage.setItem('equiposMantenimiento', equiposMantenimiento);

    // Llamar a la función para actualizar las secciones en la página principal (si es necesario)
    // Actualizar las secciones solo si están presentes en la página principal
    const totalEquiposCard = document.getElementById("totalEquiposCard");
    const equiposActivosCard = document.getElementById("equiposActivosCard");
    const equiposMantenimientoCard = document.getElementById("equiposMantenimientoCard");

    if (totalEquiposCard) {
        totalEquiposCard.querySelector("p").textContent = totalEquipos;
    }

    if (equiposActivosCard) {
        equiposActivosCard.querySelector("p").textContent = equiposActivos;
    }

    if (equiposMantenimientoCard) {
        equiposMantenimientoCard.querySelector("p").textContent = equiposMantenimiento;
    }
}
