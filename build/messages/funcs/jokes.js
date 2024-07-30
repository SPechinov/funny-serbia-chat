"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jokesMessage = void 0;
const constants_1 = require("../constants");
const utils_1 = require("../../utils");
const jokesMessage = async (ctx) => {
    if (!ctx.text)
        return false;
    if (ctx.text.toLowerCase().indexOf('давай') >= 0) {
        await ctx.reply('Давай без давай');
        return true;
    }
    if (ctx.text.toLowerCase().indexOf('давайте') >= 0) {
        await ctx.reply('Давайте без давайте');
        return true;
    }
    if (ctx.text.toLowerCase().indexOf('давайте') >= 0) {
        await ctx.reply('Давайте без давайте');
        return true;
    }
    if ((0, utils_1.hasInLine)(ctx.text.toLowerCase(), ['хаха', 'ахах', 'шутка', 'шучу'])) {
        await ctx.reply(`смешно - ps ${constants_1.NICKNAMES.julia}`);
        return true;
    }
    if (ctx.text.indexOf('полако') >= 0) {
        await Promise.all([
            ctx.replyWithSticker('CAACAgIAAxkBAAJqNGapQFnT2vE9JhvfCSHGiC9f2QPRAALUCAAC-gu2CH6Lt8yaNscnNQQ'),
        ]);
        return true;
    }
    if ((0, utils_1.hasInLine)(ctx.text, ['пиво', 'пива', 'пивка'])) {
        await Promise.all([
            ctx.replyWithSticker('CAACAgIAAxkBAAJqPWapQNU1Fax3v0akVOkF3WGscH5pAAKxCAAC-gu2CIJMtMvqomueNQQ'),
        ]);
        return true;
    }
    return false;
};
exports.jokesMessage = jokesMessage;
