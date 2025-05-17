const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const currentyear = document.querySelector("#currentyear");
const lastModified = document.getElementById("lastModified")

// use the data object
const today = new Date();

currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modified ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", () => {
  const categoryLinks = document.querySelectorAll(".optionsof a");
  const courseLinks = document.querySelectorAll(".optionscour li");

  categoryLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const category = link.textContent.trim(); // All, CSE, WDD

      courseLinks.forEach(item => {
        const courseCode = item.textContent.trim(); // Ej: CSE 110

        // Mostrar todos
        if (category === "All") {
          item.style.display = "list-item";
        } else {
          // Mostrar solo los que comienzan con la categoría (ej: CSE)
          if (courseCode.startsWith(category)) {
            item.style.display = "list-item";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
});
