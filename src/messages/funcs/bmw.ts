import { AnswerMessage } from '../types';

export const bmwMessage: AnswerMessage = async (ctx) => {
  if (!ctx.text) return false;

  if (ctx.text.indexOf('bmw') >= 0) {
    await ctx.reply('Ооо. bmw не достоин таких мелких букв. Саня иди разберись');
    return true;
  }

  return false;
};
