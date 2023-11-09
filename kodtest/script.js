/* 
- ändra färg på bakgrunden när vi har gissat
-  

*/

//generera ett random nummer avrundat uppåt
const random = Math.ceil(Math.random() * 100); 

const feedback = document.querySelector('#feedback');

let alternateBgColor = false;

let guessCount = 0;

// läs av input
const input = document.querySelector('#guess');
input.addEventListener('keydown', checkKeyPress);

// läs av knapptryck och ge respons
function checkKeyPress(evt) {


    if (evt.keyCode == 13) {
      /*  if (alternateBgColor) {
            document.body.style.backgroundColor = 'lightblue';
        } else {
            document.body.style.backgroundColor = 'white';
        }
        
        alternateBgColor = !alternateBgColor;
        */

        guessCount++;

        if (input.value == random) {
            feedback.innerHTML = `Du har gissat rätt! Du gissade totalt ${guessCount} gånger.`;
            document.body.style.backgroundColor = 'lime';
        } else if(input.value > random) {
            feedback.innerHTML = 'Du har gissat för högt!'
            document.body.style.backgroundColor = 'hotpink';
        } else {
            feedback.innerHTML = 'Du har gissat för lågt!'
            document.body.style.backgroundColor = 'yellow';
        }
    }
}

