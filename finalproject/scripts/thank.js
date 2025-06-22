//const getString = window.location.search;
//console.log(getString);

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get('firstName'));
console.log(myInfo.get('lastName'));
console.log(myInfo.get('organization'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('orgname'));
console.log(myInfo.get('npmembership'));
console.log(myInfo.get('textdescription'));

document.querySelector('#results').innerHTML = `
<h2 class="thatilea">Thanks for complete the Form!</h2>
<p class="thatileee">Your name is: <span class="examleclas">${myInfo.get('firstName')}</span></p>
<p class="thatileee">Last name is: <span class="examleclas">${myInfo.get('lastName')}</span></p>
<p class="thatileee">Your have an: <span class="examleclas">${myInfo.get('organization')}</span></p>
<p class="thatileee">Your email is: <span class="examleclas">${myInfo.get('email')}</span></P>
<p class="thatileee">Your phone is: <span class="examleclas">${myInfo.get('phone')}</span></p>
<p class="thatileee">Your organization is: <span class="examleclas">${myInfo.get('orgname')}</span></p>
<p class="thatileee">Location: <span class="examleclas">${myInfo.get('npmembership')}</span></p>
<p class="thatileee">Your words about this chamber site: <span class="examleclas">${myInfo.get('textdescription')}</span></p>
<h3 class="thatileee">We will contact you soon!!</h3>
`