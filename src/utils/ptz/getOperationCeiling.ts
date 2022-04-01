import {operationCostZones} from './ptz_data'
import {NbrPeopleDigits, Zone} from './ptz.types'

export const getOperationCeiling = (
	currentZone: Zone,
	nbr_people: NbrPeopleDigits,
	operation_cost: number,
) => {
	const operationCostZone = operationCostZones[currentZone]

	const maxOperationCost = operationCostZone[nbr_people]

	if (operation_cost >= maxOperationCost) {
		return maxOperationCost
	}

	return operation_cost
}
