import { AnswerMessage } from './types';

const nickname = '@SergeyPechinov';

export const sergeiMessage: AnswerMessage = async (ctx) => {
  if (!ctx.text) return false;

  if (ctx.text.indexOf(nickname) >= 0) {
    await ctx.reply('Не обижать создателя');
    return true;
  }

  return false;
};
