import mysql from 'mysql'

const pool = mysql.createPool({
	connectionLimit: 100,
	host: process.env.MYSQL_HOST,
	port: Number(process.env.MYSQL_PORT),
	database: process.env.MYSQL_DATABASE,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
})

const executeQuery = async (query: string): Promise<any> => {
	return pool.query(query, (err, data) => {
		if (err) {
			throw err
		}
		return data
	})
}

export default executeQuery
