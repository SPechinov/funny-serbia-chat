import { AnswerMessage } from './types';

const nickname = '@JuliaKucherovaT';

export const juliaMessage: AnswerMessage = async (ctx) => {
  if (!ctx.text) return false;

  if (ctx.text.indexOf(nickname) >= 0) {
    await ctx.reply('Она работает. Трудяга...');
    return true;
  }

  return false;
};
