import { Request, Response, NextFunction } from 'express'

export const requireAuthMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (!req.metadata.user) {
		return res.status(401).send()
	}
	return next()
}
