'use strict';

let Exception = class extends Error {
    constructor(message) {
        super(message);
    }
}

let InstanceExistedException = class extends Exception {
    constructor(message) {
        super(message);
    }
}

let GLNotSupportedException = class extends Exception {
    constructor(message) {
        super(message);
    }
}

export {Exception, InstanceExistedException, GLNotSupportedException};