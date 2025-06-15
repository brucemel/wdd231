window.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector("#visit-message"); // Debes tener un contenedor con este id

  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (!lastVisit) {
    sidebar.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const daysBetween = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysBetween === 0) {
      sidebar.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
      sidebar.textContent = "You last visited 1 day ago.";
    } else {
      sidebar.textContent = `You last visited ${daysBetween} days ago.`;
    }
  }

  // Actualizar la fecha de visita
  localStorage.setItem("lastVisit", now);
});