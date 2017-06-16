'use strict';

import {Time} from '../Scheduling/THTime.js';

let _instance = null;

let SystemClock = class {
    getTime() {
        return new Time(window.performance.now() * 1000);
    }
}

SystemClock.getInstance = function() {
    if(_instance == null) {
        _instance = new SystemClock();
    }
    return _instance;
}

export {SystemClock};