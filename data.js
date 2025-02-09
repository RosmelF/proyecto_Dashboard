const SHEET_URL = 'URL_DE_TU_HOJA_DE_CALCULO_PUBLICADA'; // Reemplaza con tu URL

function cargarTareas() {
    fetch(SHEET_URL)
        .then(response => response.text())
        .then(data => {
            const tareas = parseCSV(data); // Función para convertir CSV a array de objetos
            mostrarTareas(tareas); // Función para mostrar las tareas en el HTML
        });
}

function parseCSV(data) {
    // Implementa la lógica para convertir el CSV en un array de objetos
}

function mostrarTareas(tareas) {
    const container = document.getElementById('tareas-container');
    // Itera sobre las tareas y crea elementos HTML para mostrarlas
}

cargarTareas(); // Carga las tareas al cargar la página
