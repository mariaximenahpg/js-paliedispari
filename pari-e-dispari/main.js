// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// ---------
// Funzioni
// ---------
function getRndInteger(min,max){
    return Math.floor(Math.random() * (max - min +1))+min;
}
function even(number){
    if(number % 2 === 0){
        return true;
    }
    return false;

}


// ---------
// Main
// ---------
const userChoise = prompt("Pari o dispari?");
const userNumber = Number(prompt("Scegli un numero che sia compreso tra 1 e 5"));
const randomNumber = getRndInteger(1,5);
console.log(randomNumber);
const sum = userNumber + randomNumber;
console.log(sum);
console.log(even(sum));

if (even(sum)== true && userChoise == "Pari"){
    console.log("Complimenti,hai vinto!");
} else if (even(sum) == false && userChoise == "Dispari"){
    console.log("Complimenti, hai vinto!");
} else {
    console.log("Spiacente, hai perso :(");
}

