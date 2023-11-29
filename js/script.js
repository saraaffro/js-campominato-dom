/*
Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

// selezione del'elemento contenitore
const gridElement = document.getElementById("grid");

// selezione bottone play
const playButton = document.getElementById("play");

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
                    myElement.classList.add("clicked");
                    console.log(i);
                }
            );
        }
    );
}


// FUNZIONI

function createMyelement(tagtype, classname){
    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);

    return currentElement;
}