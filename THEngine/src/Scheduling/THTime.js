'use strict';

let Time = class {
    constructor(microsecond) {
        //private variables
        let _microsecond = 0;

        if(arguments.length >= 1) {
            _microsecond = microsecond;
        }

        this.set = function(hour, minute, second, millisecond, microsecond) {
            let minuteNow = hour * 60 + minute;
		    let secondNow = minuteNow * 60 + second;
		    let millisecondNow = secondNow * 1000 + millisecond;
		    _microsecond = millisecondNow * 1000 + microsecond;
        }

        this.fromMicrosecond = function(microsecond) {
            _microsecond = microsecond;
        }

        this.toMicrosecond = function() {
            return _microsecond;
        }

        this.sub = function(anotherTime) {
            return new Time(_microSecond - anotherTime.toMicrosecond());
        }
    }
}

export {Time};