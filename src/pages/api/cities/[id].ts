import executeQuery from '../../../utils/db'
import type {NextApiRequest, NextApiResponse} from 'next'

const cityHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'GET':
			await getCityZone(req, res)
			break
		default:
			res.setHeader('Allow', ['GET'])
			res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}

const getCityZone = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const result = await executeQuery(
			`SELECT * FROM ptz_cities WHERE city = '${req.query.id}'`,
		)

		if (result.length !== 0) {
			res.status(200).json(result)
		} else {
			res.status(404).json({message: 'notFound'})
		}
	} catch (error) {
		res.status(500).end(`Server Error: ${error}`)
	}
}

export default cityHandler
