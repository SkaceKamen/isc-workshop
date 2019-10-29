/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
import { sequelize } from './db'
import { routes } from './routes'
import cors from 'cors'
import express from 'express'
import User from './models/user'
import bodyParser from 'body-parser'
import 'express-async-errors'

declare global {
	namespace Express {
		export interface Request {
			metadata: {
				user: User | null
			}
		}
	}
}

sequelize.sync({ alter: true }).then(() => {
	console.log('DB Ready')

	const app = express()

	app.use(cors())
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: false }))

	routes(app)

	app.listen(8090, () => {
		console.log('Listening on port 8090')
	})
})
