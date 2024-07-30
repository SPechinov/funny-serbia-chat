"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasInLine = void 0;
const hasInLine = (line, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (line.indexOf(arr[i]) === -1) {
            continue;
        }
        return arr[i];
    }
    return false;
};
exports.hasInLine = hasInLine;
