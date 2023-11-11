/*
* queryselector för att få fram knappen i en variabel
* en event
* ändra färgen med function
* if-sats:
    om ljust tema aktivera mörkt
    om mörkt tema aktivera ljust
*
*/
if (
    window.matchMedia &&
    window.matchMedia('prefers-color-scheme: dark').matches)
{
    document.body.classList.add('dark-theme')
}

const themeToggle:Element = document.querySelector('#themeToggle');

themeToggle.addEventListener('click', toggleTheme);

//växla mellan ljust och mörkt tema

function toggleTheme():void {
    if document.body.classList.contains('dark-theme') {
        document.body.classList.remove('dark-theme');
    } else {
        document.body.classList.add('dark-theme');
    }
}