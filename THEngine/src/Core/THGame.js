'use strict';

let instance = null;

class Game {
    constructor() {
        if(instance) {
            throw new Error('Game already exists.');
        }
        instance = this;
    }
}

export default Game;