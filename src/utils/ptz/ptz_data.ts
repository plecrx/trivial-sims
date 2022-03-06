import {QuestionInfo} from '../../types/question.type'

type StringPTZQuestionIDs =
	| 'project_type'
	| 'is_first_purchase'
	| 'city'
	| 'nbr_people'
	| 'housing_nature'

type NumberPTZQuestionIDs =
	| 'tax_revenue'
	| 'operation_cost'
	| 'personal_contribution'

type PTZQuestionIDs = NumberPTZQuestionIDs | StringPTZQuestionIDs

export const ptz_form: Record<PTZQuestionIDs, QuestionInfo> = {
	project_type: {
		question: 'Quel est le type de votre projet ?',
		answerOptions: [
			{id: 'principal', label: 'votre résidence principale'},
			{id: 'secondary', label: 'une résidence secondaire'},
			{id: 'rent', label: 'un investissement locatif'},
		],
		type: 'option',
		required: ['principal', 'secondary', 'rent'],
	},
	is_first_purchase: {
		question: 'Est-ce votre premier achat ?',
		answerOptions: [
			{id: 'true', label: 'Oui'},
			{id: 'false', label: 'Non'},
		],
		type: 'option',
		required: ['true', 'false'],
	},
	city: {
		question: 'Dans quelle ville se situe le logement ?',
		type: 'city',
		required: [],
	},
	nbr_people: {
		question: 'Nombre de personnes qui vont habiter votre futur logement ?',
		answerOptions: [
			{id: '1', label: '1'},
			{id: '2', label: '2'},
			{id: '3', label: '3'},
			{id: '4', label: '4'},
			{id: '5', label: '5'},
			{id: '6', label: '6'},
			{id: '7', label: '7'},
			{id: '8', label: '8+'},
		],
		type: 'option',
		required: ['1', '2', '3', '4', '5', '6', '7', '8'],
	},
	tax_revenue: {
		question: "Quel est votre revenu fiscal de référence de l'année N-2 ?",
		type: 'money',
		required: [],
	},
	housing_nature: {
		question: 'Quelle est la nature du logement ?',
		answerOptions: [
			{id: 'old', label: 'Logement ancien'},
			{id: 'new', label: 'Logement neuf ou à construire'},
			{id: 'social', label: 'Logement social'},
		],
		type: 'option',
		required: ['old', 'new', 'social'],
	},
	operation_cost: {
		question: "Coût total de l'opération à financer ?",
		type: 'money',
		required: [],
	},
	personal_contribution: {
		question: "A combien s'élève votre apport personnel ?",
		type: 'money',
		required: [],
	},
}

export const ptzZoneA_revenue_ceiling = {
	1: 37000,
	2: 51800,
	3: 62900,
	4: 74000,
	5: 85100,
	6: 96200,
	7: 107300,
	8: 118400,
}
export const ptzZoneB1_revenue_ceiling = {
	1: 30000,
	2: 42000,
	3: 51000,
	4: 60000,
	5: 69000,
	6: 78000,
	7: 87000,
	8: 96000,
}
export const ptzZoneB2_revenue_ceiling = {
	1: 27000,
	2: 37800,
	3: 45900,
	4: 54000,
	5: 62100,
	6: 70200,
	7: 78300,
	8: 96400,
}
export const ptzZoneC_revenue_ceiling = {
	1: 24000,
	2: 33600,
	3: 40800,
	4: 48000,
	5: 55200,
	6: 62400,
	7: 69600,
	8: 76800,
}

export const ptzZoneA_operationCost_ceiling = {
	1: 150000,
	2: 210000,
	3: 255000,
	4: 300000,
	5: 345000,
	6: 345000,
	7: 345000,
	8: 345000,
}
export const ptzZoneB1_operationCost_ceiling = {
	1: 135000,
	2: 189000,
	3: 230000,
	4: 270000,
	5: 311000,
	6: 311000,
	7: 311000,
	8: 311000,
}
export const ptzZoneB2_operationCost_ceiling = {
	1: 110000,
	2: 154000,
	3: 187000,
	4: 220000,
	5: 253000,
	6: 253000,
	7: 253000,
	8: 253000,
}
export const ptzZoneC_operationCost_ceiling = {
	1: 100000,
	2: 140000,
	3: 170000,
	4: 200000,
	5: 230000,
	6: 230000,
	7: 230000,
	8: 230000,
}

export const ptzZoneA_quotient = {
	1: 40,
	2: 0,
	3: 10,
}
export const ptzZoneB1_quotient = {
	1: 40,
	2: 0,
	3: 10,
}
export const ptzZoneB2_quotient = {
	1: 20,
	2: 40,
	3: 10,
}
export const ptzZoneC_quotient = {
	1: 20,
	2: 40,
	3: 10,
}
