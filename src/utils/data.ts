import {Form} from '../types/form.type'

export const homeItems = [
	{
		title: 'Simulateur de crédit immobilier',
		description: 'Simulateur de crédit immobilier',
		link: {
			label: 'Simulateur de crédit immobilier',
			url: '/immo',
		},
	},
	{
		title: 'Simulateur de coût SASU',
		description: 'Simulateur de coût SASU',
		link: {
			label: 'Simulateur de coût SASU',
			url: '/freelance',
		},
	},
]

export const immoItems = [
	{
		id: 1,
		title: "Simulez votre capacité d'emprunt",
		content:
			'Estimez le montant que vous pouvez emprunter pour financer votre achat',
		cta: "CALCUL CAPACITE D'EMPRUNT",
		href: '/immo/ability',
		illustrationSlug: '/undraw_personal_finance_tqcd.svg',
	},
	{
		id: 2,
		title: 'Simulez votre lissage de crédit',
		content: 'Calculez vos mensualités lissées.',
		cta: 'SIMULATION LISSAGE DE CREDIT',
		href: '/immo/smooth',
		illustrationSlug: '/stepping.svg',
	},
	{
		id: 3,
		title: 'Estimez le montant de vos frais de notaire',
		content:
			"Simulez le montant des frais d'acquisition de votre achat immobilier.",
		cta: 'CALCUL FRAIS DE NOTAIRE',
		href: '/immo/notaire',
		illustrationSlug: '/buy_house_orange.svg',
	},
	{
		id: 4,
		title: 'Simulez votre prêt à taux zéro',
		content:
			'Vérifiez votre éligibilité et simulez le montant de votre prêt à taux zéro',
		cta: 'SIMULATION PTZ',
		href: '/immo/ptz',
		illustrationSlug: '/discount.svg',
	},
]

export const ptz_form: Form = [
	{
		id: 'project_type',
		question: 'Quel est le type de votre projet ?',
		answerOptions: [
			{id: 'principal', label: 'votre résidence principale'},
			{id: 'secondary', label: 'une résidence secondaire'},
			{id: 'rent', label: 'un investissement locatif'},
		],
		type: 'select',
	},
	{
		id: 'is_first_purchase',
		question: 'Est-ce votre premier achat ?',
		answerOptions: [
			{id: true, label: 'Oui'},
			{id: false, label: 'Non'},
		],
		type: 'select',
	},
	{
		id: 'city',
		question: 'Dans quelle ville se situe le logement ?',
		type: 'city',
	},
	{
		id: 'nbr_people',
		question: 'Nombre de personnes qui vont habiter votre futur logement ?',
		answerOptions: [
			{id: 1, label: '1'},
			{id: 2, label: '2'},
			{id: 3, label: '3'},
			{id: 4, label: '4'},
			{id: 5, label: '5'},
			{id: 6, label: '6'},
			{id: 7, label: '7'},
			{id: 8, label: '8+'},
		],
		type: 'select',
	},
	{
		id: 'tax_revenue',
		question: "Quel est votre revenu fiscal de référence de l'année N-2 ?",
		type: 'money',
	},
	{
		id: 'housing_nature',
		question: 'Quelle est la nature du logement ?',
		answerOptions: [
			{id: 'old', label: 'Logement ancien'},
			{id: 'new', label: 'Logement neuf ou à construire'},
			{id: 'social', label: 'Logement social'},
		],
		type: 'select',
	},
	{
		id: 'operation_cost',
		question: "Coût total de l'opération à financer ?",
		type: 'money',
	},
	{
		id: 'personal_contribution',
		question: "A combien s'élève votre apport personnel ?",
		type: 'money',
	},
]

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
