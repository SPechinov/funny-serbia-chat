import { AnswerMessage } from '../types';
import { NICKNAMES } from '../constants';

export const alexanderMessage: AnswerMessage = async (ctx) => {
  if (!ctx.text) return false;

  if (ctx.text.indexOf(NICKNAMES.alexander) >= 0) {
    await ctx.reply(`${NICKNAMES.alexander} Только проснулся`);
    return true;
  }

  return false;
};
