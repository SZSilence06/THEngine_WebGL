'use strict';

import {InstanceExistedException} from '../Common/THException.js';
import {Device} from './THDevice.js';

//private variables
let _instance = null;
let _canvas = null;
let _config = null;
let _device = null;

//private functions
function initDeviceContext() {
    _device = new Device();
    _device.init(_canvas, _config);
}

let Application = class {
    constructor() {
        if(_instance) {
            throw new InstanceExistedException('Application already exists.');
        }
        _instance = this;
    }

    static getInstance() {
        return _instance;
    }

    init(canvas, config) {
        _canvas = canvas;
        _config = config;
        initDeviceContext();
    }

    getDevice() {
        return _device;
    }
}

export {Application};