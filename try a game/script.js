// kod från https://www.codingnepalweb.com/build-memory-card-game-html-javascript/
// försök lista ut varför det inte funkar, har dubbelkollat koden. 
// återkom vid senare tillfälle - koden ser annnorlunda ut där man kan läsa dem mot
// hur den ser ut i videon. Bra övning för felsökning framöver

const cards = document.querySelectorAll('.card');

let matchCard = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard({target: clickedCard}) {
    if(clickedCard !== cardOne && !disableDeck) {
        clickedCard.classList.add('flip');
        if(!cardOne) {
        return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;

        let cardOneImg = cardOne.querySelector('img').src,
        cardTwoImg = cardTwo.querySelector('img').src;
        matchCards(cardOneImg, cardTwoImg);
    }    
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matched++; // increment matched value by 1
        // if matched value is 8 that means user has matched all the cards (8 * 2 = 16 cards)
        if(matched == 8) {
           setTimeout(() => {
            return shuffleCard();
           }, 1000); // calling shuffleCard function after 1 sec
        }
        cardOne.removeEventListener('click', flipCard);
        cardTwo.removeEventListener('click', flipCard);
        cardOne = cardTwo = ''; //setting both card value to blank
        return disableDeck = false;
    }
    // if two cards not matched
    setTimeout(() => {
          //adding shake class to both cards after 400ms  
        cardOne.classList.add('shake');
        cardTwo.classList.add('shake');
    }, 400);

    setTimeout(() => {
        //remove shake to both cards and flip back after 1200ms  
      cardOne.classList.remove('shake', 'flip');
      cardTwo.classList.remove('shake', 'flip');
      cardOne = cardTwo = ''; //setting both cards value to blank
      disableDeck = false;
  }, 1200);
}  

function shuffleCard() {
    matched = 0;
    cardOne = cardTwo = '';
    disableDeck = false;
    // creating array of 16 items and each item is repeated twice
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1); // sorting array item randomly
    cards.forEach((card, i) => { 
        card.classList.remove('flip');
        card.addEventListener('click', flipCard);
    });
    // removing flip class from all cards and passing random image
    cards.forEach((card, index) => {         
        card.classList.remove('flip');
        let imgTag = card.querySelector('img');
        imgTag.src = `images/img-${arr[index]}.png`;
    
        card.addEventListener('click', flipCard);
        });
    
}

shuffleCard();

cards.forEach(card => { // adding click event to all cards
    card.addEventListener('click', flipCard);
});
