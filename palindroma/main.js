// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const word = prompt("Scrivi una parola");

function palindroma(wordUser){
    let wordRvr = "";
    for ( let i = wordUser.length-1; i>= 0; i--){
        wordRvr+=wordUser[i];
    }
    if (wordUser.toLowerCase() === wordRvr.toLowerCase() ){
        return true;
    } else{
        return false;
    }
}

if (palindroma(word)=== true){
    alert ("La tua parola è palindroma");
} else {
    alert ("La tua parola non è palindroma");
}