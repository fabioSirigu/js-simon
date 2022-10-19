/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

// creare 5 numeri casuali e li stampo in pagina

// - seleziono l'elemento della DOM
const gridElement = document.querySelector('.grid');

const cells = 5;
const maxNumber = 10
const arrayNumber = randomNumberArray(1, maxNumber);
console.log(arrayNumber, 'random number array');
const arrayNumberUser = [];
console.log(arrayNumberUser, 'user array');

gridElement.innerHTML= '';
generateGrid(gridElement, cells, arrayNumber);
const numbers = gridElement.innerText;




// uso un bottone per generare le caselle
// const generate = document.querySelector('.generate');

// uso il bottone generate
/* generate.addEventListener('click', function () { */
/* } ) */

// dopo 30 secondi i numeri scompaiono
let seconds = 3
const intervalId = setInterval(countdown, 1000)

function countdown() {
      document.querySelector('.counter').innerText = seconds;
      if (seconds == 0){
            clearInterval(intervalId);
            gridElement.innerHTML = '';
            userNumberInsert(arrayNumberUser);
            numberCheck(arrayNumber, arrayNumberUser);
            
      } else {
            seconds--
      }
}

function userNumberInsert(numeriRandom){
      for (let i = 0; i < 5; i++) {
            const numberUser = Number(prompt('scegli un numero'));
            numeriRandom.push(numberUser);
      }
}

function numberCheck (numeriRandom, numeriPrompt){
      const numeriGiusti = [];
      console.log(numeriGiusti, 'numeri giusti!');
      const resultElement = document.querySelector('.result');
      for (let i = 0; i < numeriPrompt.length; i++) {
            const singleNumb = numeriPrompt[i];     
            if (numeriRandom.includes(singleNumb)){
                  numeriGiusti.push(singleNumb);
                  console.log(singleNumb, 'azzeccato!');
                  if (numeriGiusti.length === 0){
                        resultElement.innerHTML = `nulla..${numeriGiusti.length} azzeccati..`
                  } else {
                        resultElement.innerHTML = `grande! ${numeriGiusti.length} azzeccati! I numeri sono ${numeriGiusti} !`
            
                  }
            } else {
                  console.log(singleNumb, 'no');
            }
      }
}
// creo gli elementi nei quali voglio inserire i numeri
// creo gli elementi della DOM con una funzione e gli inserisco i numeri
function generateGrid (where, howMany, singleNumb){
      for (let i = 0; i < howMany; i++) {
            const cellElement = document.createElement('div');
            cellElement.className = 'cell';
            const arrayEl = singleNumb[i];
            cellElement.innerText = arrayEl;
            where.append(cellElement);    
      }
}

function randomNumberArray(min, max) {
      const arrayNumber = [];
      while (arrayNumber.length !== 5) {
          const number = Math.floor(Math.random() * (max - min + 1)) + min;
          if (!arrayNumber.includes(number)) {
              arrayNumber.push(number);
          }
      }
      return arrayNumber;
  }


