"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaMessage = void 0;
const constants_1 = require("../constants");
const juliaMessage = async (ctx) => {
    if (!ctx.text)
        return false;
    if (ctx.text.indexOf(constants_1.NICKNAMES.julia) >= 0) {
        await ctx.reply('Она работает. Трудяга...');
        return true;
    }
    return false;
};
exports.juliaMessage = juliaMessage;
