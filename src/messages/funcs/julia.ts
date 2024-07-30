import { AnswerMessage } from '../types';
import { NICKNAMES } from '../constants';

export const juliaMessage: AnswerMessage = async (ctx) => {
  if (!ctx.text) return false;

  if (ctx.text.indexOf(NICKNAMES.julia) >= 0) {
    await ctx.reply('Она работает. Трудяга...');
    return true;
  }

  return false;
};
