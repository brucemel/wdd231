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