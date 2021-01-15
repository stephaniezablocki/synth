
var violinActivated;
function loadSynthOriginal() {
    if (violinActivated == false) {
        var keyboard = new QwertyHancock({
            id: 'keyboard',
            width: 600,
            height: 150,
            octaves: 2
        });

        var context = new AudioContext();
        masterVolume = context.createGain();

        masterVolume.gain.value = 0.3;
        masterVolume.connect(context.destination);

        var oscillators = {};

        keyboard.keyDown = function (note, frequency) {
            if (violinActivated == false) {
                var osc = context.createOscillator(),
                    osc2 = context.createOscillator();

                osc.frequency.value = frequency;
                osc.type = 'sawtooth';
                osc.detune.value = -10;

                osc2.frequency.value = frequency;
                osc2.type = 'triangle';
                osc2.detune.value = 10;

                osc.connect(masterVolume);
                osc2.connect(masterVolume);

                masterVolume.connect(context.destination);

                oscillators[frequency] = [osc, osc2];

                osc.start(context.currentTime);
                osc2.start(context.currentTime);
            }
        }

        keyboard.keyUp = function (note, frequency) {
            if (violinActivated == false) {
                oscillators[frequency].forEach(function (oscillator) {
                    oscillator.stop(context.currentTime);
                });
            }
        }
    }
}