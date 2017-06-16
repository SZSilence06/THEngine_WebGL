'use strict';

import {InstanceExistedException} from '../Common/THException.js'

//private variables
let _instance = null;
let _config = null;
let _gl = null;

//private functions
function createDevice(canvas) {
    _gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if(!_gl) {
        throw new GLNotSupportedException("WebGL initialize failed.");
    }
}

function resetDeviceState() {
    _gl.clearColor(0.0, 0.0, 0.0, 1.0);
    _gl.clearDepth(1.0);
}

let Device = class {
    constructor(config) {
        if(_instance) {
            throw new InstanceExistedException('Device already exists.');
        }
        _instance = this;
    }

    static getInstance() {
        return _instance;
    }

    init(canvas, config) {
        createDevice(canvas);
        resetDeviceState();
    }

    beginRender() {

    }

    endRender() {

    }

    swapBuffers() {
        
    }

    clearBuffer() {
        _gl.clear(_gl.COLOR_BUFFER_BIT | _gl.DEPTH_BUFFER_BIT);
    }
}

export {Device};