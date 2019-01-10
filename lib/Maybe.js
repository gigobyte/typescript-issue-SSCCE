"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Maybe {
    constructor(value) {
        this.value = value;
        this['fantasy-land/alt'] = this.alt;
    }
    alt(other) {
        return other;
    }
}
exports.Maybe = Maybe;
exports.Nothing = new Maybe();
