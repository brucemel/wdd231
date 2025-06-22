const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('#animateme');
});

async function getPlastics() {
    try {
        const response = await fetch("data/plastics.json");
        if (!response.ok) {
            // throw new Error("Error al cargar JSON");
            return;
        }
        const data = await response.json();
        displayPlastics(data.plastic);
    } catch (error) {
        // console.error("Error:", error);
    }
}

function displayPlastics(members) {
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
  <p class="elementofmem">${member.membership}</p>
  <p class="elementofmem"><a href="${member.website}" target="_blank" id="emailofcom">${member.website}</a></p>
  <img class="elementimgof" src="${member.logo}" alt="Logo de ${member.name}" loading="lazy">
`;
        container.appendChild(card);
    });
}

getPlastics();

const currentyear = document.querySelector("#currentyear");
const lastModified = document.getElementById("lastModified");

const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;
