document.addEventListener("DOMContentLoaded", () => {
    // =========================================================
    // LÓGICA DE TEMAS (Botón de la Derecha)
    // =========================================================
    const themeBtn = document.querySelector(".theme-btn");
    const themeMenu = document.querySelector(".theme-menu");
    const themeOptions = document.querySelectorAll(".theme-option");
    const body = document.body;
    
    // 1. Funcionalidad del botón de Temas (Mostrar/Ocultar el menú)
    if (themeBtn && themeMenu) {
        themeBtn.addEventListener("click", () => {
            themeMenu.classList.toggle("show-theme");
        });
    }

    // Función principal para aplicar el tema
    function applyTheme(theme) {
        // Limpia todas las clases de tema y añade la nueva (default, dark, ocean)
        body.className = ''; 
        body.classList.add(theme);
        // Guarda la elección del usuario en el navegador
        localStorage.setItem('userTheme', theme); 
    }

    // 2. Aplicar el tema guardado al cargar la página
    const savedTheme = localStorage.getItem('userTheme') || 'default';
    applyTheme(savedTheme);

    // 3. Escuchar los clics en las opciones de tema
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const newTheme = option.getAttribute('data-theme');
            applyTheme(newTheme);
            // Oculta el menú después de seleccionar un tema
            themeMenu.classList.remove("show-theme"); 
        });
    });
});

