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
<p>Your name is ${myInfo.get('firstName')} and Your Last name is ${myInfo.get('lastName')}</p>
<p>Your have an ${myInfo.get('organization')}</p>
<p>Your email is ${myInfo.get('email')}</P>
<p>Your phone is ${myInfo.get('phone')}</p>
<p>Your organization is ${myInfo.get('orgname')}</p>
<p>You are ${myInfo.get('npmembership')} Membership</p>
<p>Your words about this chamber site: ${myInfo.get('textdescription')}</p>

Thanks you so mcuh for to be here
`