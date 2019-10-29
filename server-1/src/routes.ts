/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
import { authMiddleware } from './middleware/auth'
import { requireAuthMiddleware } from './middleware/require-auth'
import User from './models/user'
import Note from './models/note'

export const routes = (app: express.Application) => {
	const api = express.Router()
	api.use(authMiddleware as any)
	api.use(requireAuthMiddleware as any)

	api.get('/user', (req, res) => {
		res.json(req.metadata.user)
	})

	api.get('/notes', async (req, res) => {
		const user = req.metadata.user
		if (user) {
			const details = await User.findOne({
				include: [Note],
				where: { id: user.id }
			})
			if (details) {
				return res.json(details.notes)
			}
		}

		res.status(401).send()
	})

	api.post('/notes', async (req, res) => {
		const user = req.metadata.user
		if (user) {
			console.log(req.body)
			const text = req.body['text']
			if (!text) {
				return res.status(400).json({ message: 'Missing text attribute' })
			}

			const note = new Note({ text, idUser: user.id })
			await note.save()
			await (note as any).setUser(user)
			res.json(note)
		} else {
			res.status(401).send()
		}
	})

	app.use('/api', api)
}
