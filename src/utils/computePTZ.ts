import {Answer} from '../types/answer.type'
import {getObjectFromArray} from './getObjectFromArray'

export const computePTZ = (answers: Answer[]) => {
	const answerObj = getObjectFromArray(answers, 'id', 'answer')

	const revenue = getTotalRevenue(
		answerObj.tax_revenue,
		answerObj.operation_cost,
	)

	return
}

const getTotalRevenue = (tax_revenue: number, operation_cost: number) =>
	tax_revenue > operation_cost / 9 ? tax_revenue : operation_cost
