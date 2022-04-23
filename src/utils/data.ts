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
		title: 'Simulez votre prêt à taux zéro',
		description:
			'Vérifiez votre éligibilité et simulez le montant de votre prêt à taux zéro',
		cta: 'Simulation PTZ',
		href: '/immo/ptz',
		illustrationSlug: '/discount.svg',
	},
	{
		id: 4,
		title: "Simulez votre capacité d'emprunt",
		description:
			'Estimez le montant que vous pouvez emprunter pour financer votre achat',
		cta: "Calcul capacité d'emprunt",
		href: '/immo/ability',
		illustrationSlug: '/undraw_personal_finance_tqcd.svg',
	},
	{
		id: 4,
		title: 'Simulez votre prêt immobilier',
		description: 'Estimez votre prêt immobilier en un temps record',
		cta: 'Calcul prêt immobilier',
		href: '/immo/loan',
		illustrationSlug: '/undraw_home_settings_re_pkya.svg',
	},
	{
		id: 2,
		title: 'Simulez votre lissage de crédit',
		description: 'Calculez vos mensualités lissées.',
		cta: 'Calcul lissage de crédit',
		href: '/immo/smooth',
		illustrationSlug: '/stepping.svg',
	},
	{
		id: 3,
		title: 'Estimez le montant de vos frais de notaire',
		description:
			"Simulez le montant des frais d'acquisition de votre achat immobilier.",
		cta: 'Calcul frais de notaire',
		href: '/immo/notaire',
		illustrationSlug: '/buy_house_orange.svg',
	},
]

export const menuItems = [
	{
		title: 'Tableau de bord',
		itemId: '/',
		subNav: [
			{
				title: 'Immobilier',
				itemId: 'immo',
				subNav: [
					{
						title: 'Prêt à taux zéro',
						itemId: '/immo/ptz',
					},
					{
						title: 'Lissage de prêt',
						itemId: '/immo/smooth',
					},
					{
						title: 'Frais de notaire',
						itemId: '/immo/notaire',
					},
					{
						title: "Capacité d'emprunt",
						itemId: '/immo/ability',
					},
					{
						title: 'Simulation prêt',
						itemId: '/immo/loan',
					},
				],
			},
		],
	},
	{
		title: 'Freelance',
		itemId: '/freelance',
	},
	{
		title: 'Revenir au portfolio',
		itemId: 'https://plecrx.io',
	},
]
