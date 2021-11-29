/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari
Dichiariamo chi ha vinto
(corrispondenza tra scelta pari e dispari e somma pari o dispari)
In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari
*/


const selectNumber = parseInt(prompt('Segli un numero da 1 a 5'));
console.log(selectNumber)
let randomNumberPC = Math.floor((Math.random() * 5) + 1);
console.log(randomNumberPC)

let sum = selectNumber + randomNumberPC;
console.log(sum)

if (sum % 2 == 1) {
    sum = 'dispari'
    console.log(sum)
} else if (sum % 2 == 0) {
    sum = 'pari'
    console.log(sum)
}

// function randomNumberPC(numerorandom) {
//     let randomNumber = Math.floor((Math.random() * 5) + 1);
//     return randomNumber
// }

// console.log(randomNumberPC)



// function check(somma) {
//     let sum = selectNumber + randomNumberPC;
//     console.log(sum)
//     if (sum % 2 == 1) {
//         somma = 'dispari'
//         console.log(sum)
//     } else if (sum % 2 == 0) {
//         somma = 'pari'
//         console.log(sum)
//     }
//     return check
// }

// console.log(check)

