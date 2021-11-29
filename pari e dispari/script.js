/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari
Dichiariamo chi ha vinto
(corrispondenza tra scelta pari e dispari e somma pari o dispari)
In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari
*/

let scelta = prompt('pari o dispari?');

    while (scelta != 'pari' && scelta != 'dispari') {
        alert('scelta non valida');
        scelta = prompt('pari o dispari?');
    }

const selectNumber = parseInt(prompt('Segli un numero da 1 a 5'));
console.log(selectNumber)
// let randomNumberPC = Math.floor((Math.random() * 5) + 1);
// console.log(randomNumberPC)

// let sum = selectNumber + randomNumberPC;
// console.log(sum)

// if (sum % 2 == 1) {
//     sum = 'dispari'
//     console.log(sum)
// } else if (sum % 2 == 0) {
//     sum = 'pari'
//     console.log(sum)
// }

let numberRandomFromFunction = randomNumberPC();
console.log(numberRandomFromFunction);
let returnCheck = check(numberRandomFromFunction, selectNumber);
console.log(returnCheck);

//controllo chi ha vinto
//se è pari ha vinto l'utente se ha dichiarato pari
//altrimenti il pc
//se è dispari ha vinto l'utente se ha dichiarato dispari
//altrimenti il pc

if (returnCheck == scelta) {
    console.log('Hai vinto');
} else {
    console.log('Non hai vinto')
} 

 
function randomNumberPC() {
    let randomNumber = Math.floor((Math.random() * 5) + 1);
    return randomNumber;
}


function check(numberRndEnter, userNumber) {
    let sum = userNumber + numberRndEnter;
    if (sum % 2 == 1) {
        somma = 'dispari';
    } else if (sum % 2 == 0) {
        somma = 'pari';
        console.log(sum);
    }
    return somma;
}


