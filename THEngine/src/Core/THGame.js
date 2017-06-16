'use strict';

import {Exception, InstanceExistedException, GLNotSupportedException} from '../Common/THException.js';
import {Application} from '../Platform/THApplication.js';
import {SystemClock} from '../Platform/THSystemClock.js';
import {Time} from '../Scheduling/THTime.js';

//private variables
let _instance = null;
let _app = null;
let _config = null;
let _scene = null;
let _showFPS = true;
let _lastTimeStamp = new Time();

//private functions
function drawFPS() {
    
}

function doLoop() {
    loop.call(_instance);
    setTimeout(doLoop, 10);
}

function loop() {
    let currentTime = SystemClock.getInstance().getTime();
    let deltaTime = currentTime.toMicrosecond() - _lastTimeStamp.toMicrosecond();
    if (deltaTime > 1000000.0 / _config.fps) {
        this.update();
        this.draw();
        _lastTimeStamp = currentTime;
    }
}

let Game = class {
    constructor() {
        if(_instance) {
            throw new InstanceExistedException('Game already exists.');
        }
        _instance = this;

        this.createGame = function(canvas, config) {
            _config = config;
            _app = new Application();
            _app.init(canvas, config);
        }
    }

    static getInstance() {
        return _instance;
    }

    run() {
        doLoop();
    }
    
    update() {

    }

    draw() {
        let device = _app.getDevice();
        device.clearBuffer();

        device.beginRender();
        if(_scene) {
            _scene.draw();
        }
        if(_showFPS) {
            drawFPS();
        }
        device.endRender();

        device.swapBuffers();
    }
} 

export {Game};