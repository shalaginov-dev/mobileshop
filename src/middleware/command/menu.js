const bot = require('../../connection/token.connection')

module.exports = bot.telegram.setMyCommands([
	{
		command: 'start',
		description: 'Начать',
	},
	{
		command: 'add',
		description: 'Добавить телефон',
	},
])
