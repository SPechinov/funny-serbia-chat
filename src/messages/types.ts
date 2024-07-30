import { Context } from 'telegraf';

export type AnswerMessage = (ctx: Context) => Promise<boolean>;
