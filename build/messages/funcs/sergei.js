"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sergeiMessage = void 0;
const constants_1 = require("../constants");
const sergeiMessage = async (ctx) => {
    if (!ctx.text)
        return false;
    if (ctx.text.indexOf(constants_1.NICKNAMES.sergei) >= 0) {
        await ctx.reply('Не обижать создателя');
        return true;
    }
    return false;
};
exports.sergeiMessage = sergeiMessage;
