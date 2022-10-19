/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

const gridElement = document.querySelector('.grid');

const cells = 5;
const maxNumber = 100;
const arrayNumber = randomNumberArray(1, maxNumber, cells);
console.log(arrayNumber, 'random number array');
const arrayNumberUser = [];
console.log(arrayNumberUser, 'user array');

gridElement.innerHTML= '';
generateGrid(gridElement, cells, arrayNumber);
const numbers = gridElement.innerText;


function generateGrid (where, howMany, singleNumb){
      for (let i = 0; i < howMany; i++) {
            const cellElement = document.createElement('div');
            cellElement.className = 'cell';
            const arrayEl = singleNumb[i];
            cellElement.innerText = arrayEl;
            where.append(cellElement);    
      }
}

let seconds = 30;
const intervalId = setInterval(countdown, 1000)
function countdown() {
      document.querySelector('.counter').innerText = seconds;
      if (seconds == 0){
            clearInterval(intervalId);
            gridElement.innerHTML = '';
            userNumberInsert(arrayNumberUser, cells);
            numberCheck(arrayNumber, arrayNumberUser);      
      } else {
            seconds--
      }
}

function userNumberInsert(numeriRandom, howMany){
      for (let i = 0; i < howMany; i++) {
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
                  numberCorrect(numeriGiusti, resultElement);
            } else {
                  console.log(singleNumb, 'no');
            }
      }
}

function numberCorrect(numeriGiusti, result){
      if (numeriGiusti.length === 0){
            result.innerHTML = `nulla..${numeriGiusti.length} numeri azzeccati..`
      } else if (numeriGiusti.length === 1)
      result.innerHTML = `grande! Ne hai azzeccato ${numeriGiusti.length}! Il numero è ${numeriGiusti}!`
      else {
            result.innerHTML = `grande! ${numeriGiusti.length} numeri azzeccati! I numeri sono ${numeriGiusti} !`
      }
}

function randomNumberArray(min, max, howMany) {
      const arrayNumber = [];
      while (arrayNumber.length !== howMany) {
            const number = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!arrayNumber.includes(number)) {
                  arrayNumber.push(number);
            }
      }
      return arrayNumber;
}