import { AnswerMessage } from '../types';
import { NICKNAMES } from '../constants';

export const sergeiMessage: AnswerMessage = async (ctx) => {
  if (!ctx.text) return false;

  if (ctx.text.indexOf(NICKNAMES.sergei) >= 0) {
    await ctx.reply('Не обижать создателя');
    return true;
  }

  return false;
};
