"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const telegraf_1 = require("telegraf");
const messages_1 = require("./messages");
dotenv_1.default.config();
const { env } = process;
(() => {
    if (!env.TELEGRAM_TOKEN || !env.NODE_ENV)
        return;
    const bot = new telegraf_1.Telegraf(env.TELEGRAM_TOKEN, {
        telegram: {
            apiMode: 'bot',
            testEnv: env.NODE_ENV === 'development',
        },
    });
    bot.on('message', async (ctx) => {
        for (let i = 0; i < messages_1.funcs.length; i++) {
            if (await messages_1.funcs[i](ctx))
                return;
        }
    });
    bot.launch();
})();
