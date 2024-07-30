"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bmwMessage = void 0;
const constants_1 = require("../constants");
const bmwMessage = async (ctx) => {
    if (!ctx.text)
        return false;
    if (ctx.text.indexOf('bmv') >= 0) {
        await ctx.reply(`Ты че с*ка!${ctx.from?.username ? ` ${ctx.from.username}` : ''}`);
        return true;
    }
    if (ctx.text.indexOf('bmw') >= 0) {
        await ctx.reply(`BMW не достоин таких мелких букв. ${constants_1.NICKNAMES.alexander} иди разберись!`);
        return true;
    }
    if (ctx.text.indexOf('бмв') >= 0) {
        await ctx.reply(`Привильно BMW блять. ${constants_1.NICKNAMES.alexander} иди разберись!`);
        return true;
    }
    if (ctx.text.indexOf('бэха') >= 0 || ctx.text.indexOf('беха') >= 0 || ctx.text.indexOf('BMW') >= 0) {
        await ctx.react('👍');
        return true;
    }
    return false;
};
exports.bmwMessage = bmwMessage;
