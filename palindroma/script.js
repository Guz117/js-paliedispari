/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
(prima senza funzione e poi con funzione)
*/


let parola = prompt('Inserisci una parola palindroma');
let split = parola.split('');
split = split.reverse();
let parolaPalindroma = split.join('');




if (parola == parolaPalindroma) {
    console.log('Correto hai inserito una parola palindroma')
} else {
    console.log('Questa non è una parola palindroma')
}


