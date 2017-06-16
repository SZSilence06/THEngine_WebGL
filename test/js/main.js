'use strict';

import {Game, Exception, Config} from '../../THEngine/THEngine';

try {
    var game = new Game();
    let config = {}; 
    config.fps = 60;
    game.createGame(document.getElementById("main"), config);
    game.run();
}
catch(error){
    if(error instanceof Exception) {
        alert(error.message);
    }
    else {
        throw error;
    }
}