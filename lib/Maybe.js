"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Maybe {
    constructor(value) {
        this.value = value;
    }
    'fantasy-land/alt'(other) {
        return other;
    }
    alt(other) {
        return other;
    }
}
exports.Maybe = Maybe;
exports.Nothing = new Maybe();
