const bot = require('../../connection/token.connection')
const db = require('../../connection/db.connection')
const { Markup } = require('telegraf')

module.exports = bot.start(async ctx => {
	ctx.reply(
		'Добро пожаловать в наш магазин!',
		Markup.inlineKeyboard([
			[Markup.button.callback('Телефоны', 'phones')],
			[Markup.button.callback('Планшеты', 'dek')],
			[Markup.button.callback('Смарт-часы', 'watchs')],
		])
	)
})
