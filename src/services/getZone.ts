export const getZone = async (
	city: string,
): Promise<'Abis' | 'A' | 'B1' | 'B2' | 'C'> => {
	return await fetch(`https://api.example.com/ptz-zones/${city}`)
		.then(res => res.json())
		.then(
			result => {
				return result.items
			},
			error => {
				return error
			},
		)
}
