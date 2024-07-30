"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.botMessage = void 0;
const constants_1 = require("../constants");
const botMessage = async (ctx) => {
    if (!ctx.text)
        return false;
    if (ctx.text.indexOf(constants_1.NICKNAMES.bot) >= 0) {
        await ctx.reply(`Что тебе надо, раб мой?${ctx.from?.username ? ` @${ctx.from.username}` : ''}`);
        return true;
    }
    return false;
};
exports.botMessage = botMessage;
