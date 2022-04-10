import {loanerPortionZones, ptzFamilyRatio} from './data'
import {NbrPeopleDigits, Zone} from './ptz.types'

export const getPortion = (
	currentZone: Zone,
	nbr_people: NbrPeopleDigits,
	revenue: number,
) => {
	const family_ratio = ptzFamilyRatio[nbr_people]
	const family_revenue_ratio = revenue / family_ratio

	if (family_revenue_ratio > loanerPortionZones[currentZone][2]) {
		return 3
	}

	if (family_revenue_ratio > loanerPortionZones[currentZone][1]) {
		return 2
	}

	return 1
}
