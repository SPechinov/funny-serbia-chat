import { AnswerMessage } from '../types';
import { NICKNAMES } from '../constants';
import { hasInLine } from '../../utils';

export const bmwMessage: AnswerMessage = async (ctx) => {
  if (!ctx.text) return false;

  if (ctx.text.indexOf('bmv') >= 0) {
    await ctx.reply(`Ты че с*ка!${ctx.from?.username ? ` @${ctx.from.username}` : ''}`);
    return true;
  }

  if (ctx.text.indexOf('bmw') >= 0) {
    await ctx.reply(`BMW не достоин таких мелких букв. ${NICKNAMES.alexander} иди разберись!`);
    return true;
  }

  if (ctx.text.indexOf('бмв') >= 0) {
    await ctx.reply(`Привильно BMW блять. ${NICKNAMES.alexander} иди разберись!`);
    return true;
  }

  if (hasInLine(ctx.text, ['бэха', 'беха', 'BMW'])) {
    await ctx.react('👍');
    return true;
  }

  return false;
};
