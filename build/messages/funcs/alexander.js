"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alexanderMessage = void 0;
const constants_1 = require("../constants");
const alexanderMessage = async (ctx) => {
    if (!ctx.text)
        return false;
    if (ctx.text.indexOf(constants_1.NICKNAMES.alexander) >= 0) {
        await ctx.reply(`${constants_1.NICKNAMES.alexander} Только проснулся`);
        return true;
    }
    return false;
};
exports.alexanderMessage = alexanderMessage;
