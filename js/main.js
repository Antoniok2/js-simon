// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// VARIABILI
let numbers = document.getElementById("numero");
let numbRandom = [];

numeriRandom();

// ALLO SCADERE DEL TIMER ALL'UTENTE VERRà CHIESTO DI INSERIRE I 5 NUMERI CHE HA VISTO IN PAGINA
const tempo = setTimeout(() => {
    richiestaNumeri();
}, 10000);















// FUNZIONI
function numeriRandom(){
    // MI SONO CREATO IL CICLO PER GENERARE 5 NUMERI CASUALI E POI PUSHARLI NEL CONTENITORE
for (let i = 0; i < 5; i++){
    let numeri = 0;
    numeri = Math.floor(Math.random() * 100) + 1;
    numbRandom.push(numeri)
}
// HO FATTO UN LOG PER VEDERE SE TUTTO VA COME DOVREBBE
console.log(numbRandom);
// HO INSERITO I NUMERI NELLA PAGINA HTML
numbers.innerHTML += numbRandom;
}

function richiestaNumeri() {
    let userNumber = "";
    let contNumbers = [];
    for (let i = 0; i < 5; i++){
        userNumber = parseInt(prompt("inseriri i numeri che hai visto in precedenza"))
        contNumbers.push(userNumber);
    }
}


