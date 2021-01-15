function loadViolin() {
    if (violinActivated == true) {
        var keyboard = new QwertyHancockViolin({
            id: 'keyboard',
            width: 600,
            height: 150,
            octaves: 2
        });


        var audio = {
            'A3': new Audio('./scripts/violin-notes/A4.wav'),
            'B3': new Audio('./scripts/violin-notes/B4.wav'),
            'C4': new Audio('./scripts/violin-notes/C5.wav'),
            'D4': new Audio('./scripts/violin-notes/D5.wav'),
            'E4': new Audio('./scripts/violin-notes/E5.wav'),
            'F4': new Audio('./scripts/violin-notes/Fs5.wav'),
            'G4': new Audio('./scripts/violin-notes/G5.wav'),
            'A4': new Audio('./scripts/violin-notes/A5.wav'),
            'B4': new Audio('./scripts/violin-notes/B5.wav'),
            'C5': new Audio('./scripts/violin-notes/C6.wav'),
            'D5': new Audio('./scripts/violin-notes/D6.wav'),
            'E5': new Audio('./scripts/violin-notes/E6.wav'),
        }
    }

    keyboard.keyDown = function (note, frequency) {
        if (violinActivated == true) {
            audio[note].play();
        }
    };

    keyboard.keyUp = function (note, frequency) {
        if (violinActivated == true) {
            audio[note].pause();
        }
    };
}