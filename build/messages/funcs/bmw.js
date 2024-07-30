"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bmwMessage = void 0;
const bmwMessage = async (ctx) => {
    if (!ctx.text)
        return false;
    if (ctx.text.indexOf('bmw') >= 0) {
        await ctx.reply('Ооо. bmw не достоин таких мелких букв. Саня иди разберись');
        return true;
    }
    return false;
};
exports.bmwMessage = bmwMessage;
