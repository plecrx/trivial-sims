import {
	ptzZoneA_operationCost_ceiling,
	ptzZoneA_quotient,
	ptzZoneA_revenue_ceiling,
	ptzZoneB1_operationCost_ceiling,
	ptzZoneB1_quotient,
	ptzZoneB1_revenue_ceiling,
	ptzZoneB2_operationCost_ceiling,
	ptzZoneB2_quotient,
	ptzZoneB2_revenue_ceiling,
	ptzZoneC_operationCost_ceiling,
	ptzZoneC_quotient,
	ptzZoneC_revenue_ceiling,
} from './ptz_data'

const revenueZones = {
	A: ptzZoneA_revenue_ceiling,
	B1: ptzZoneB1_revenue_ceiling,
	B2: ptzZoneB2_revenue_ceiling,
	C: ptzZoneC_revenue_ceiling,
}
const operationCostZones = {
	A: ptzZoneA_operationCost_ceiling,
	B1: ptzZoneB1_operationCost_ceiling,
	B2: ptzZoneB2_operationCost_ceiling,
	C: ptzZoneC_operationCost_ceiling,
}

const quotientZones = {
	A: ptzZoneA_quotient,
	B1: ptzZoneB1_quotient,
	B2: ptzZoneB2_quotient,
	C: ptzZoneC_quotient,
}

type NbrPeopleDigits = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export const computePTZ = (data: {[x: string]: string}) => {
	const nbr_people = Number(data.nbr_people) as NbrPeopleDigits

	const revenue = getTotalRevenue(
		Number(data.tax_revenue),
		Number(data.operation_cost),
	)

	const currentZone = 'A' //getZone(data.city)

	const revenueZone = revenueZones[currentZone]

	const revenueCeiling = revenueZone[nbr_people]

	const isBelowCeiling = revenueCeiling <= revenue

	const operationCostZone = operationCostZones[currentZone]

	const maxOperationCost = operationCostZone[nbr_people]

	if (!isBelowCeiling) {
		return 0
	}

	const operation_cost = Number(data.operation_cost)
	let ceiling = operation_cost

	if (operation_cost >= maxOperationCost) {
		ceiling = maxOperationCost
	}

	enum HousingQuotient {
		'new' = 1,
		'old',
		'social',
	}

	type HousingQuotientStrings = keyof typeof HousingQuotient

	const housing_nature = data.housing_nature as HousingQuotientStrings

	const num = HousingQuotient[housing_nature]

	const quotient = quotientZones[currentZone][num]

	const ptzAmount = (ceiling / 100) * quotient

	return ptzAmount
}

const getTotalRevenue = (tax_revenue: number, operation_cost: number) =>
	tax_revenue > operation_cost / 9 ? tax_revenue : operation_cost
