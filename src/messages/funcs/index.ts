import { bmwMessage } from './bmw';
import { juliaMessage } from './julia';
import { sergeiMessage } from './sergei';
import { alexanderMessage } from './alexander';
import { AnswerMessage } from '../types';
import { jokesMessage } from './jokes';
import { botMessage } from './bot';

export const funcs: AnswerMessage[] = [
  bmwMessage,
  juliaMessage,
  sergeiMessage,
  alexanderMessage,
  jokesMessage,
  botMessage,
];
