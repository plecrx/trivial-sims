import {quotientZones} from './ptz_data'
import {HousingQuotient, Zone} from './ptz.types'

export const getQuotient = (
	currentZone: Zone,
	housing_nature: keyof typeof HousingQuotient,
) => {
	const num = HousingQuotient[housing_nature]
	return quotientZones[currentZone][num]
}
