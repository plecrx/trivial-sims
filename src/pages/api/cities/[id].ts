import type {NextApiRequest, NextApiResponse} from 'next'
import {dbConnect} from '../../../utils/dbConnect'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const {db} = await dbConnect()

	const movies = await db
		.collection('ptz_cities')
		.find({city: req.query.id})
		.toArray()

	res.json(movies)
}

export default handler
