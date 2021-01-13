var keyboard = new QwertyHancock({
    id: 'keyboard',
    width: 600,
    height: 150,
    octaves: 2
});

keyboard.keyDown = function (note, frequency) {
    console.log('Note', note, 'has been released');
    console.log('Its frequency was', frequency);
};

keyboard.keyUp = function (note, frequency) {
    console.log('Note', note, 'has been released');
    console.log('Its frequency was', frequency);
}