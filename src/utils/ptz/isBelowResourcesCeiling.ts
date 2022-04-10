import {resourcesZones} from './data'

type Zone = 'A' | 'Abis' | 'B1' | 'B2' | 'C'

type NbrPeopleDigits = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export const isBelowResourcesCeiling = (
	currentZone: Zone,
	nbr_people: NbrPeopleDigits,
	revenue: number,
) => {
	const resourcesZone = resourcesZones[currentZone]

	const resourcesCeiling = resourcesZone[nbr_people]

	const isBelowCeiling = resourcesCeiling <= revenue

	if (!isBelowCeiling) {
		return false
	}
}
