/*
Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.


La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

// selezione del'elemento contenitore
const gridElement = document.getElementById("grid");

// selezione bottone play
const playButton = document.getElementById("play");

// creazione array bombe
const myBombArray = genArrayNumRandom (1, 100, 16);
console.log(myBombArray);

// numero celle cliccate
let score = 0;


// creo ciclo per griglia
for (let i = 1; i <= 100; i++){
    
    // comparsa griglia al click del playbutton
    playButton.addEventListener("click",

        function(){
            const myElement = createMyelement("div", "square");

            gridElement.append(myElement);
            myElement.append(i);
    
            // cambio colore dei quadrati al click
            myElement.addEventListener("click",
                function(){
                    if(myBombArray.includes(i)) {
                        myElement.classList.add("bomba");
                        alert(`Hai cliccato su una bomba! Game over. Il tuo punteggio è: ${score}`);
                        gridElement.innerHTML = "";
                      } else {
                        myElement.classList.add("clicked");
                        console.log('Hai cliccato sulla cella numero:', i);
                        score++;
                        console.log("punteggio: ", score);
                      }
                }
            );
        }
    );
}



// FUNZIONI
// crea elemento (tagtype, classname)
function createMyelement(tagtype, classname){
    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);

    return currentElement;
}

// ciclo array casuale bombe
function genArrayNumRandom (minNum, maxNum, lunghezzaArr){
    const arrayToGen = [];

    while (arrayToGen.length < lunghezzaArr) {
        let newNumberRandom = genNumRandom(minNum, maxNum);

        if (!arrayToGen.includes(newNumberRandom)){
            arrayToGen.push(newNumberRandom);
        }
    }
    return arrayToGen;
}

// genera numeri casuali (min, max)
function genNumRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}