const menuBtn = document.querySelector('#menuBtn'); 
//anropar knappen
const nav = document.querySelector('#nav');

menuBtn.addEventListener('click', toggleMenyOpenState); 
//när man klickar på knappen ska menyn öppnas
nav.addEventListener('click', toggleMenyOpenState);

function toggleMenyOpenState(e) {
    console.log(e);

    if (e.target.nodeName == 'A') {
        return;
    }
    nav.classList.toggle('open');
}
