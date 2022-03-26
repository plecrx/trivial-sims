import {
	loanerPortionZones,
	operationCostZones,
	ptz_amortization_schedule,
	ptzFamilyRatio,
	quotientZones,
	resourcesZones,
} from './ptz_data'

enum HousingQuotient {
	'new' = 1,
	'old',
	'social',
}

type Zone = 'A' | 'Abis' | 'B1' | 'B2' | 'C'

type NbrPeopleDigits = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export const computePTZ = async (data: {[x: string]: any}) => {
	const nbr_people = Number(data.nbr_people) as NbrPeopleDigits
	const cityName = data.city[0].nom

	const res = await fetch(`/api/cities/${cityName}`)
	const jsonResult = await res.json()
	const currentZone = jsonResult[0].zone_ptz

	const revenue = getTotalRevenue(
		Number(data.tax_revenue),
		Number(data.operation_cost),
	)

	if (
		isBelowResourcesCeiling(currentZone, nbr_people, revenue) ||
		data.is_firstTime_buyer !== 'true' ||
		data.project_type !== 'principal'
	) {
		return {
			ptzAmount: 0,
			duration: 0,
			deferral: 0,
			amortization: 0,
		}
	}

	const operationCeiling = getOperationCeiling(
		currentZone,
		nbr_people,
		Number(data.operation_cost),
	)

	const quotient = getQuotient(
		currentZone,
		data.housing_nature as keyof typeof HousingQuotient,
	)

	const portion = getPortion(currentZone, nbr_people, revenue)

	const ptzAmount = (operationCeiling / 100) * quotient
	const delayed_loan = ptz_amortization_schedule[portion]

	return {
		ptzAmount,
		duration: delayed_loan.duration,
		deferral: delayed_loan.deferral,
		amortization: delayed_loan.amortization,
	}
}

const getTotalRevenue = (tax_revenue: number, operation_cost: number) =>
	tax_revenue > operation_cost / 9 ? tax_revenue : operation_cost

const isBelowResourcesCeiling = (
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

const getOperationCeiling = (
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

const getQuotient = (
	currentZone: Zone,
	housing_nature: keyof typeof HousingQuotient,
) => {
	const num = HousingQuotient[housing_nature]
	return quotientZones[currentZone][num]
}

const getPortion = (
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
