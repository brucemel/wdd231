/* const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

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

 */

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
});


async function getMembers() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) {
      throw new Error("Error al cargar JSON");
    }
    const data = await response.json();
    displayMembers(data.members1);
  } catch (error) {
    console.error("Error:", error);
  }
}


function displayMembers(members) {
  const container = document.querySelector(".res-grid");
  container.innerHTML = "";


  const filteredMembers = members.filter(member =>
    member.membershipLevel === 1 || member.membershipLevel === 2
  );


  const shuffledMembers = filteredMembers.sort(() => 0.5 - Math.random());


  const numberOfMembers = Math.floor(Math.random() * 2) + 2; // 2 o 3
  const selectedMembers = shuffledMembers.slice(0, numberOfMembers);


  selectedMembers.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("member-card");
    card.innerHTML = `
      <h3 class="elementofmem" id="titlemem">${member.name}</h3>
      <p class="elementofmem">${member.description}</p>
      <p class="elementofmem">${member.address}</p>
      <p class="elementofmem">${member.phone}</p>
      <p class="elementofmem">${member.membership}
      <p class="elementofmem"><a href="${member.website}" target="_blank" id="emailofcom">${member.website}</a></p>
      <img class="elementimgof" src="${member.logo}" alt="Logo de ${member.name}">
    `;
    container.appendChild(card);
  });
}


getMembers();


const currentyear = document.querySelector("#currentyear");
const lastModified = document.getElementById("lastModified");

const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;
