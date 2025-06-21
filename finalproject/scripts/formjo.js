const dialogBoxText = document.querySelector("#dialogBox div");

npmemlevel.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Address: Garcilaso de la Vega #212 <br> Phone: 999 999 999 <br>Email: info@gmail.com <br> Seller: Jessica Peña`
});

bromemlevel.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Address: Gral. Arenales 296, Chiclayo 14008 <br> Phone: (0800) 00210 <br>Email: servicioalcliente@promart.pe <br> Seller: Ruiter Acosta`
});

silmemlevel.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Address: Av. Agustín de la Rosa Toro 165, San Luis, Chimbote <br> Phone: 987 185 919 <br>Email: aliagrot@gmail.com <br> Seller: Jessica Robles`
});

goldmemlevel.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Address: Av. Aviación 2405, Piso 5, San Borja, Lima <br> Phone: (01) 619 4810 <br>Email: servicioalcliente@promart.pe <br> Seller: Adolfo Robles`
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});

document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("timestamp");
    const now = new Date();
    timestampField.value = now.toISOString();
});

window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.membership-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('loaded');
        }, index * 200);
    });
});

