const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
// const APIkey = 'e5a12d75cd9f19e5beaa30581b9f8e2a'
// const city = 'Trujillo'
// const url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


async function getMembers() {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) {
            throw new Error("Error");
        }
        const data = await response.json();
        displayMembers(data.members1);
    } catch (error) {
        console.error("Error", error);
    }
}

function displayMembers(members) {
    const container = document.querySelector(".res-grid");
    container.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("section");
        card.innerHTML = `
      <h3 class="elementofmem" id="titlemem">${member.name}</h3>
      <p class="elementofmem">${member.address}</p>
      <p class="elementofmem">${member.phone}</p>
      <p class="elementofmem"><a href="${member.website}" target="_blank" id="emailofcom">${member.website}</a></p>
      <img class="elementimgof" src="${member.logo}" alt="Logo de ${member.name}">
    `;
        container.appendChild(card);
    });
}

getMembers();

const currentyear = document.querySelector("#currentyear");
const lastModified = document.getElementById("lastModified")

// use the data object
const today = new Date();

currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modified ${document.lastModified}`;

//     // async function GetWeather() {
//     //     try {
//     //         const response = await fetch(url);
//     //         if (!response.ok) {
//     //             throw new Error("No se pudo cargar el archivo JSON");
//     //         }
//     //         const data = await response.json();
//     //         const celsius = data.temp./ 100
//     //         console.log
//     //     } catch (error) {
//     //         console.error("Error al obtener los datos:", error);
//     //     }
// }
