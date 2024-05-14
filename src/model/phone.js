const { DataTypes } = require('sequelize')
const db = require('../connection/db.connection')

module.exports = db.define('phone', {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
		unique: true,
		allowNull: false,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})
