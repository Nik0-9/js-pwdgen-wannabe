/*  Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23*/

let userName, userLastName, favouriteColor;
userName = prompt('Scrivi il tuo nome:');
userLastName = prompt('Scrivi il tuo cognome:');
favouriteColor = prompt('Scrivi il tuo colore preferito:');
console.log(userName, userLastName, favouriteColor);


document.getElementById('pswd').innerHTML = userName + userLastName + favouriteColor + '23';

document.getElementById('pswd2').innerHTML = `${userName}${userLastName}${favouriteColor}23`
