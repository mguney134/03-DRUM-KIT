document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    let sound = null;
    switch(keyName) {
        case 'w':
            sound = new Audio("./sounds/tom-1.mp3");
            sound.play();
            break;
        case 'a':
            sound = new Audio("./sounds/tom-2.mp3");
            sound.play();
            break;
        case 's':
            sound = new Audio("./sounds/tom-3.mp3");
            sound.play();
            break;
        case 'd':
            sound = new Audio("./sounds/tom-4.mp3");
            sound.play();
            break;
        case 'j':
            sound = new Audio("./sounds/crash.mp3");
            sound.play();
            break;
        case 'k':
            sound = new Audio("./sounds/kick-bass.mp3");
            sound.play();
            break;
        case 'l':
            sound = new Audio("./sounds/snare.mp3");
            sound.play();
            break;
    }
}, false);


