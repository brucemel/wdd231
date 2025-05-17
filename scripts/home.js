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

      const category = link.textContent.trim();

      courseLinks.forEach(item => {
		  const courseCode = item.textContent.trim(); 
		  
        if (category === "All") {
          item.style.display = "list-item";
        } else {
          
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

document.addEventListener("DOMContentLoaded", () => {
  const courseList = document.getElementById("courseList");
  const allCourses = document.querySelectorAll(".optionscour li");

  allCourses.forEach(item => {
    item.addEventListener("click", (event) => {
      event.preventDefault(); 
      
      const courseName = item.textContent.trim();

      const confirmacion = confirm(`Will you take this course ${courseName}?`);

      if (confirmacion) {
    
        const yaExiste = Array.from(courseList.children).some(li => li.textContent === courseName);

        if (!yaExiste) {
          const li = document.createElement("li");
          li.textContent = courseName;
          courseList.appendChild(li);
        } else {
          alert("You have in list this course.");
        }
      }
    });
  });
});
