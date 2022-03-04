import {Answer} from '../types/answer.type'
import {getObjectFromArray} from './getObjectFromArray'
import {
	ptz_form,
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
} from './data'
import {getZone} from '../api/PTZApi/getZone'

type FormData = {
	project_type: number
	is_first_purchase: boolean
	city: string
	nbr_people: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
	tax_revenue: number
	housing_nature: number
	operation_cost: number
	personal_contribution: number
}

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

export const computePTZ = async (answers: Answer[]) => {
	const data: FormData = getObjectFromArray(answers, 'id', 'answer')

	const revenue = getTotalRevenue(data.tax_revenue, data.operation_cost)

	const currentZone = await getZone(data.city)

	const revenueCeiling = revenueZones[currentZone][data.nbr_people]

	const isBelowCeiling = revenueCeiling <= revenue

	const maxOperationCost = operationCostZones[currentZone][`${data.nbr_people}`]

	if (!isBelowCeiling) {
		return 0
	}

	if (data.operation_cost >= maxOperationCost) {
		return maxOperationCost
	}

	if (data.operation_cost < maxOperationCost) {
		const housingNatureQuestion = ptz_form.find(e => e.id === 'housing_nature')
		const housingNaturesOptions = housingNatureQuestion?.answerOptions
		const quotients = quotientZones[currentZone]
		return
	}
}

const getTotalRevenue = (tax_revenue: number, operation_cost: number) =>
	tax_revenue > operation_cost / 9 ? tax_revenue : operation_cost
