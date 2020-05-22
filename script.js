const pressed = [];
const secret = 'dandysoniscool';
const body = document.querySelector('body');
const easterEgg = document.getElementById('easterEgg');

easterEgg.style.display = 'none';

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secret.length - 1, pressed.length - secret.length);
    if (pressed.join('').includes(secret)) {
        easterEgg.style.display = 'block';
        body.style.backgroundColor = 'red';
        cornify_add();
    }
})

