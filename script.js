// Pari e Dispari:
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
// Dichiariamo chi ha vinto.

const oddOrEven = prompt (`Choose Odd or Even`);
const userNumber = parseInt(prompt(`Type a number between 1 and 5`));
console.log(userNumber);
let sum = "";
function randomNumber (aiNumber){
    aiNumber = Math.floor(Math.random() * 6);
    console.log(aiNumber);
    sum = aiNumber + userNumber;
}

function finalResult(){
    if (sum % 2 ===0){
        console.log(`Even`)
    }else{
        console.log(`odd`)
    }
}
