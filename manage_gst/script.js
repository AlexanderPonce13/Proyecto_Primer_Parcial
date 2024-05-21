document.addEventListener("DOMContentLoaded", () => {
    // Selecciona el cuerpo de la tabla de equipos
    const equipmentTable = document.getElementById("equipmentTable").getElementsByTagName("tbody")[0];
    // Obtiene los datos de equipos almacenados en el almacenamiento local o un array vacío si no hay datos
    let equipmentData = JSON.parse(localStorage.getItem("equipmentList")) || [];

    // Función para renderizar la tabla de equipos
    const renderTable = () => {
        // Vacía el cuerpo de la tabla
        equipmentTable.innerHTML = "";
        // Itera sobre los datos de equipos y los agrega a la tabla
        equipmentData.forEach((item, index) => {
            // Inserta una nueva fila en la tabla
            const row = equipmentTable.insertRow();
            // Inserta las celdas con los datos de cada equipo en la fila
            row.insertCell(0).textContent = item.serialNumber;
            row.insertCell(1).textContent = item.equipmentName;
            row.insertCell(2).textContent = item.acquisitionDate;
            row.insertCell(3).textContent = item.status;
            row.insertCell(4).textContent = item.department;
            row.insertCell(5).textContent = item.assignee;
            // Agrega botones de editar y eliminar a la última celda de la fila
            const actionsCell = row.insertCell(6);
            // Crea un botón de editar y le agrega un evento para llamar a la función de editar
            const editButton = document.createElement("button");
            editButton.textContent = "Editar";
            editButton.addEventListener("click", () => editEquipment(index));
            actionsCell.appendChild(editButton);
            // Crea un botón de eliminar y le agrega un evento para llamar a la función de eliminar
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Eliminar";
            deleteButton.addEventListener("click", () => deleteEquipment(index));
            actionsCell.appendChild(deleteButton);
        });
    };


    const editEquipment = (index) => {
        const equipment = equipmentData[index];
        // Aquí puedes escribir el código para editar el equipo (por ejemplo, abrir un modal)
        // Este código se ejecutará cuando se haga clic en el botón "Editar" en la fila correspondiente
    };

    const deleteEquipment = (index) => {
        if (confirm("¿Está seguro de que desea eliminar este equipo?")) {
            equipmentData.splice(index, 1);
            localStorage.setItem("equipmentList", JSON.stringify(equipmentData));
            renderTable();
            // Llama a la función para actualizar las estadísticas después de eliminar un equipo
            updateMainPageStats();
        }
    };

    renderTable();
});


