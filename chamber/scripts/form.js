const dialogBoxText = document.querySelector("#dialogBox div");

npmemlevel.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `This free membership is designed for non-profit organizations and offers access to community events, organizational development workshops, inclusion in the online directory, and networking opportunities with local businesses, along with limited access to educational materials.`
});

bromemlevel.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Includes all the benefits of the Non Profit level, plus placement in the monthly newsletter, access to exclusive Bronze-level events, discounts on basic website advertising, and one free training workshop per year.`
});

silmemlevel.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Offers all the Bronze-level benefits, as well as quarterly promotions on social media, higher discounts on events and advertising, two free training workshops per year, and priority access to networking events and trade shows.`
});

goldmemlevel.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `This premium membership includes all Silver-level benefits, along with featured advertising on the homepage, sponsor recognition at events, personalized assistance, free and priority access to all events, and the opportunity to host sponsored presentations through the chamber.`
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