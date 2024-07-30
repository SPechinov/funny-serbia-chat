import { AnswerMessage } from '../types';
import { NICKNAMES } from '../constants';

export const botMessage: AnswerMessage = async (ctx) => {
  if (!ctx.text) return false;

  if (ctx.text.indexOf(NICKNAMES.bot) >= 0) {
    await ctx.reply(`Что тебе надо, раб мой?${ctx.from?.username ? ` @${ctx.from.username}` : ''}`);
    return true;
  }

  return false;
};
