import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import {Label1} from 'baseui/typography'
import {useStyletron} from 'baseui'
import {Block} from 'baseui/block'
import {getTotalRevenue} from '../../utils/ptz/getTotalRevenue'
import {isBelowResourcesCeiling} from '../../utils/ptz/isBelowResourcesCeiling'
import {getOperationCeiling} from '../../utils/ptz/getOperationCeiling'
import {getQuotient} from '../../utils/ptz/getQuotient'
import {getPortion} from '../../utils/ptz/getPortion'
import {
	ptz_amortization_schedule,
	PTZQuestionIDs,
} from '../../utils/ptz/ptz_data'

const WrapperBlock = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	gap: 0.5rem;
`

const CustomAnimationBlock = styled(Block)`
	border-radius: 8px;
	padding: 2em;
	margin-block: 2em;
	animation-duration: 0.5s;
	animation-name: slidein;

	@keyframes slidein {
		from {
			margin-bottom: 5em;
			width: 100%;
		}

		to {
			margin-bottom: 2em;
			width: 100%;
		}
	}
`

enum HousingQuotient {
	'new' = 1,
	'old',
	'social',
}

type NbrPeopleDigits = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

type PtzResultProps = {
	data: {[x in PTZQuestionIDs]: any}
}

const PtzResult = ({data}: PtzResultProps) => {
	const [currentZone, setCurrentZone] = useState()
	const [css, theme] = useStyletron()

	const nbr_people = Number(data.nbr_people) as NbrPeopleDigits
	const cityName = data.city[0].nom
	const revenue = getTotalRevenue(
		Number(data.tax_revenue),
		Number(data.operation_cost),
	)

	useEffect(() => {
		fetch(`/api/cities/${cityName}`)
			.then(res => res.json())
			.then(jsonResult => {
				if (jsonResult.length !== 0) {
					setCurrentZone(jsonResult[0].zone_ptz)
				}
			})
			.catch(error => console.log(error))
	})

	if (
		!currentZone ||
		isBelowResourcesCeiling(currentZone, nbr_people, revenue) ||
		data.is_firstTime_buyer !== 'true' ||
		data.project_type !== 'principal'
	) {
		return (
			<>Vous ne remplissez pas les conditions pour pouvoir bénéficier du PTZ.</>
		)
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

	const monthlyPayment = (ptzAmount / (delayed_loan.amortization * 12)).toFixed(
		2,
	)

	return (
		<WrapperBlock>
			<img
				height='auto'
				width='200em'
				loading='lazy'
				src={'/happy_news.svg'}
				alt=''
			/>
			<CustomAnimationBlock
				className={css({
					backgroundColor: theme.colors.tagPrimaryOutlinedHover,
				})}
			>
				<br />
				<Label1>
					Bonne nouvelle, vous êtes éligible au PTZ pour un montant de{' '}
					<strong>{ptzAmount} €</strong>
				</Label1>
				<br />
				Durée totale du prêt : {delayed_loan.duration} ans
				<br />
				Période de différé total : {delayed_loan.deferral} ans
				<br />
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				Période d'amortissement : {delayed_loan.amortization} ans
				<br />
				Mensualité première période hors assurance : 0 €
				<br />
				Mensualité seconde période hors assurance : {monthlyPayment} €
				<br />
				<br />
			</CustomAnimationBlock>
		</WrapperBlock>
	)
}

export default PtzResult
