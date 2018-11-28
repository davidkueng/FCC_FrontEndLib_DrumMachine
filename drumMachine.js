// let context = new AudioContext

// class Kick {
//     constructor(context) {
//         this.context = context;
//     }
//     setup() {
//         this.osc = this.context.createOscillator();
//         this.gain = this.context.createGain();
//         this.osc.connect(this.gain);
//         this.gain.connect(this.context.destination);
//     }
//     trigger(time) {
//         this.setup();
//         this.osc.frequency.setValueAtTime(150, time);
//         this.gain.gain.setValueAtTime(1, time);
//         this.osc.frequency.exponentialRampToValueAtTime(0.1, time + 0.5);
//         this.gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);
//         this.osc.start(time);
//         this.osc.stop(time + 0.5);
//     }
// };

// class Snare {
//     constructor(context) {
//         this.context = context;
//     }
//     setup() {
//         this.osc = this.context.createOscillator();
//         this.gain = this.context.createGain();
//         this.osc.connect(this.gain);
//         this.gain.connect(this.context.destination);
//     }
//     trigger(time) {
//         this.setup();
//         this.osc.frequency.setValueAtTime(75, time);
//         this.gain.gain.setValueAtTime(1, time);
//         this.osc.frequency.exponentialRampToValueAtTime(0.1, time + 0.5);
//         this.gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);
//         this.osc.start(time);
//         this.osc.stop(time + 0.5);
//     }
// };



// let kick = new Kick(context);
// // kick.trigger(0);

// let snare = new Snare(context);
// snare.trigger(0.5)


document.addEventListener('click', () => {
    document.querySelector('#Q').play();
})
