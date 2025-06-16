import { places } from '../data/places.mjs'
console.log(places)

const showHere = document.querySelector("#placeslima");
const dialogBoxText = document.querySelector("#dialogBox div");

function displayItems(places) {
  places.forEach(x => {
    const thecard = document.createElement('div')
    const thephoto = document.createElement('img')
    thephoto.src = `images/${x.photo_url}`
    thephoto.alt = x.name
    thephoto.loading = "lazy"
    thecard.appendChild(thephoto)

    const thetitle = document.createElement('h2')
    thetitle.innerText = x.name
    thecard.appendChild(thetitle)

    const theaddress = document.createElement('address')
    theaddress.innerText = x.address
    thecard.appendChild(theaddress)

    const thedesc = document.createElement('p')
    thedesc.innerText = x.description
    thecard.appendChild(thedesc)

    const button = document.createElement('button');
    button.innerText = "Learn More";
    button.classList.add('learn-more-btn'); // puedes estilizarlo con CSS
    button.addEventListener('click', () => {
      dialogBox.showModal();
      dialogBoxText.innerHTML = `${x.moreinfo}`
      // O puedes redirigir a otra página o mostrar más detalles
    });
    thecard.appendChild(button);

    closeButton.addEventListener("click", () => {
      dialogBox.close();
    });


    showHere.appendChild(thecard)
  });
}

displayItems(places)




window.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector("#visit-message");

  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (!lastVisit) {
    // Primera vez que visita
    sidebar.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    // Ya había visitado antes
    const daysBetween = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
    if (daysBetween === 0) {
      sidebar.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
      sidebar.textContent = "You last visited 1 day ago.";
    } else {
      sidebar.textContent = `You last visited ${daysBetween} days ago.`;
    }
  }

  // Guardar la fecha actual como última visita
  localStorage.setItem("lastVisit", now);
});

