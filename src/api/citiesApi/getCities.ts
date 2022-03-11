export const getCities = async (city: string): Promise<{city: 'Paris'}[]> =>
	await fetch(`https://geo.api.gouv.fr/communes?nom=${city}&fields=nom,codeDepartement&format=json&geometry=centre
`)
		.then(res => res.json())
		.then(
			result => {
				console.log(result)
			},
			error => {
				return error
			},
		)
