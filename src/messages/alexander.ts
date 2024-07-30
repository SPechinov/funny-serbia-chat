import { AnswerMessage } from './types';

const nickname = '@QcfgAlexandr';

export const alexanderMessage: AnswerMessage = async (ctx) => {
  if (!ctx.text) return false;

  if (ctx.text.indexOf(nickname) >= 0) {
    await ctx.reply(`${nickname} Только проснулся`);
    return true;
  }

  return false;
};
