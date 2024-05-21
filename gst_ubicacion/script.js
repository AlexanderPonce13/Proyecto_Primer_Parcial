
document.addEventListener("DOMContentLoaded", () => {
    const locationForm = document.getElementById("locationForm");
    const locationList = document.getElementById("locationList");

    locationForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const locationNameInput = document.getElementById("locationName");
        const locationName = locationNameInput.value.trim();

        if (!locationName) {
            document.getElementById("locationNameError").textContent = "El nombre de la ubicación es requerido";
            return;
        }

        // Verificar si la ubicación ya está registrada
        if ([...locationList.children].some(li => li.textContent === locationName)) {
            document.getElementById("locationNameError").textContent = "Esta ubicación ya está registrada";
            return;
        }

        // Agregar la ubicación a la lista
        const li = document.createElement("li");
        li.textContent = locationName;
        locationList.appendChild(li);

        // Limpiar el campo y el mensaje de error
        locationNameInput.value = "";
        document.getElementById("locationNameError").textContent = "";
    });
});


function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
}

function navigateTo(url) {
    window.location.href = url;
}
