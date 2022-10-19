/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

// creare 5 numeri casuali e li stampo in pagina

// - seleziono l'elemento della DOM
const gridElement = document.querySelector('.grid');
const cells = 5;
const maxNumber = 10
// uso un bottone per generare le caselle
const generate = document.querySelector('.generate');
const cellElement = document.createElement('div');
cellElement.className = 'cell';

// uso il bottone generate
/* generate.addEventListener('click', function () { */
      gridElement.innerHTML= '';
      generateGrid(gridElement, cells, maxNumber);
      
      const numbers = gridElement.innerText;
      console.log(numbers)
/* } ) */

let seconds = 3
const intervalId = setInterval(countdown, 1000)

function countdown() {
      document.querySelector('.counter').innerText = seconds;

      if (seconds == 0){
            clearInterval(intervalId);
            gridElement.innerHTML = '';
            for (let i = 0; i < 5; i++) {
                  let numberUser = Number(prompt('Scegli un numero da 1 a 10'));
                  console.log(numberUser);
            }
      } else {
            seconds--
      }
}

// dopo 30 secondi i numeri scompaiono


// creo gli elementi nei quali voglio inserire i numeri
// creo gli elementi della DOM con una funzione e gli inserisco i numeri
function generateGrid (where, howMany, numberChoice){
      for (let i = 1; i <= howMany; i++) {
            const cellElement = document.createElement('div');
            cellElement.className = 'cell';
            cellElement.innerText = randomNumber(1, numberChoice)
            where.append(cellElement);
      }
}
// - creo una funzione per creare i numeri con math.floor
function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
}

