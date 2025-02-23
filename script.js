// Seleccionamos todos los enlaces de navegación
const links = document.querySelectorAll('.nav-link');

// Iteramos sobre cada enlace y agregamos un evento de clic
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Evita que el enlace haga el desplazamiento instantáneo

    const targetId = link.getAttribute('href').substring(1); // Obtiene el ID de la sección
    const targetElement = document.getElementById(targetId); // Selecciona la sección correspondiente

    // Desplazamiento suave hacia la sección
    window.scrollTo({
      top: targetElement.offsetTop - 80, // Ajustamos la posición para evitar que se tape con la barra de navegación
      behavior: 'smooth' // Realiza un desplazamiento suave
    });
  });
});
