const bot = require('../../connection/token.connection')
const db = require('../../connection/db.connection')

const Phone = require('../../model/phone')

module.exports = bot.command('add', async ctx => {
	// db.authenticate().catch(error => console.error(error))
	console.log('phone')
	await ctx.reply('Phone added')
})
