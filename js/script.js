// Chiedi all’utente il suo nome
const userName = prompt("Il tuo nome");


// chiedi il suo cognome
const userSurname = prompt("Il tuo cognome");


// chiedi il suo colore preferito
const userColor = prompt("Il tuo colore preferito");


// nomecognomecolorepreferito23
// document.getElementById('my_password').innerHTML="La tua nuova password è : " + userName + userSurname + userColor + "23";

document.getElementById('my_password').innerHTML=`La tua nuova password è :   ${userName}${userSurname}${userColor}23`;
