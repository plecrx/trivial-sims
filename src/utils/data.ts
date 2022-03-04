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
			'votre résidence principale',
			'une résidence secondaire',
			'un investissement locatif',
		],
		type: 'select',
	},
	{
		id: 'first_purchase',
		question: 'Est-ce votre premier achat ?',
		answerOptions: ['oui', 'non'],
		type: 'select',
	},
	{
		id: 'city',
		question: 'Dans quelle ville se situe le logement ?',
		answerOptions: undefined,
		type: 'city',
	},
	{
		id: 'nbr_people',
		question: 'Nombre de personnes qui vont habiter votre futur logement ?',
		answerOptions: ['1', '2', '3', '4', '5', '6', '7', '8+'],
		type: 'select',
	},
	{
		id: 'tax_revenue',
		question: "Quel est votre revenu fiscal de référence de l'année N-2 ?",
		answerOptions: undefined,
		type: 'money',
	},
	{
		id: 'housing_nature',
		question: 'Quelle est la nature du logement ?',
		answerOptions: [
			'Logement ancien',
			'Logement neuf ou à construire',
			'Logement social',
		],
		type: 'select',
	},
	{
		id: 'operation_cost',
		question: "Coût total de l'opération à financer ?",
		answerOptions: undefined,
		type: 'money',
	},
	{
		id: 'personal_contribution',
		question: "A combien s'élève votre apport personnel ?",
		answerOptions: undefined,
		type: 'money',
	},
]
