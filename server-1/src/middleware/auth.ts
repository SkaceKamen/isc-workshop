import { Request, Response, NextFunction } from 'express'
import User from '../models/user'

export const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const email = req.headers.authorization as string
	const user = email ? await User.findOne({ where: { email } }) : null

	req.metadata = { user }

	return next()
}
