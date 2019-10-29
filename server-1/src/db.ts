import { Sequelize } from 'sequelize-typescript'

export const sequelize = new Sequelize({
	database: 'notes',
	dialect: 'sqlite',
	username: 'root',
	password: '',
	storage: __dirname + '/../notes.sqlite',
	models: [__dirname + '/models']
})
