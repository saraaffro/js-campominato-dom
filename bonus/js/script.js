/*
Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

/*
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

// selezione del'elemento contenitore
const gridElement = document.getElementById("grid");

// selezione bottone play
const playButton = document.getElementById("play");

// selezione select option
const gameLevels = document.getElementById("levels");

// punteggio
let score = 0;


// const gameLevels = gameLevelsSelect.value;

// creo ciclo per griglia facile
if(gameLevels.value === "1"){
    
    // creazione array bombe
    const myBombArray = genArrayNumRandom (1, 100, 16);
    console.log(myBombArray);

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

                        if(score === 84){
                            alert(`Hai vinto! Hai fatto il punteggio massimo di ${score}`);
                            gridElement.innerHTML = "";
                        }
                    }
                );
            }
        );
    }

}else if(gameLevels.value === "2"){
    
     // creazione array bombe
     const myBombArray = genArrayNumRandom (1, 81, 16);
     console.log(myBombArray);

    for (let i = 1; i <= 81; i++){
        // comparsa griglia al click del playbutton
        playButton.addEventListener("click",
    
            function(){
                const myElement = createMyelement("div", "square");
    
                gridElement.append(myElement);
                myElement.append(i);
                myElement.classList.add("livello-2");
    
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

                        if(score === 84){
                            alert(`Hai vinto! Hai fatto il punteggio massimo di ${score}`);
                            gridElement.innerHTML = "";
                        }
                    }
                );
            }
        );
    }
}else{

     // creazione array bombe
     const myBombArray = genArrayNumRandom (1, 49, 16);
     console.log(myBombArray);

    for (let i = 1; i <= 49; i++){
        // comparsa griglia al click del playbutton
        playButton.addEventListener("click",
    
            function(){
                const myElement = createMyelement("div", "square");
    
                gridElement.append(myElement);
                myElement.append(i);
                myElement.classList.add("livello-3");
    
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

                        if(score === 84){
                            alert(`Hai vinto! Hai fatto il punteggio massimo di ${score}`);
                            gridElement.innerHTML = "";
                        }
                    }
                );
            }
        );
    }
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