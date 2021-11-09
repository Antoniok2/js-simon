// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// VARIABILI
let numbers = document.getElementById("numero");
let numbersUserGuessed = document.getElementById("numeroUSER");
let numbRandom = [];

numeriRandom();

// ALLO SCADERE DEL TIMER ALL'UTENTE VERRà CHIESTO DI INSERIRE I 5 NUMERI CHE HA VISTO IN PAGINA
const tempo = setTimeout(() => {
    let numbs = richiestaNumeri();
    confrontoNumbers(numbs, numbRandom);
}, 3000);



// FUNZIONI
function numeriRandom(){
    // MI SONO CREATO IL CICLO PER GENERARE 5 NUMERI CASUALI E POI PUSHARLI NEL CONTENITORE
while(numbRandom.length < 5) {
    let numeroGenerato = Math.floor(Math.random() * 10) + 1;
    let notDuplicated = true;

    //CONTROLLO SE NON CI SONO DUPLICATI TRAMITE CONDIZIONE 
    for (i = 0; i < numbRandom.length; i ++) {
        if (numeroGenerato === numbRandom[i]) {
            notDuplicated = false;
        }
    }

    // SE NON CI SONO DUPLICATI LO AGGIUNGO ALL'ARRAY
    if(notDuplicated){
        numbRandom.push(numeroGenerato)
    }
}
console.log(numbRandom);
numbers.innerHTML += numbRandom;
}

function richiestaNumeri() {
    let userNumber = "";
    let contNumbers = [];
    for (let i = 0; i < 5; i++){
        userNumber = parseInt(prompt("Benvenuto/a nel gioco, inseriri i numeri che hai visto in precedenza"))
        contNumbers.push(userNumber);
    }
    return contNumbers;
}

function confrontoNumbers(nUser, nRandom) {
    for (let i = 0; i < nRandom.length; i++) {
        if (nRandom.includes(nUser[i])) {
            numbersUserGuessed.innerHTML += `Complimenti, hai beccato:
             ${nUser[i]} `;
        } 
    }
}


