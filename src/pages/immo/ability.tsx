import React, {useState} from 'react'
import {useRouter} from 'next/router'
import styled from '@emotion/styled'
import {ArrowRight} from 'baseui/icon'
import {StyledLink} from 'baseui/link'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import {Button, SIZE} from 'baseui/button'
import {getMaxLoan} from '../../utils/ability/getMaxLoan'
import {FullPageLayout} from '../../layouts/fullpage.layout'
import MainLayout from '../../layouts/main.layout'
import Divider from '../../components/divider/divider.component'
import HeroLabel from '../../components/heroLabel/heroLabel.component'
import InputSlider from '../../components/inputSlider/inputSlider.component'
import ColumnResultLabelXL from '../../components/resultLabel/columnResultLabelXL.component'
import RowResultLabelL from '../../components/resultLabel/rowResultLabelL.component'
import Card from '../../components/card/card.component'
import {useStyletron} from 'baseui'

const StyledMainLayout = styled(MainLayout)`
	align-items: start;
	justify-content: space-evenly;
	padding: 48px;
`

const GoToMenuButton = styled(Button)`
	margin-top: 40px;
	border-radius: 8px;
`

const Ability = () => {
	const router = useRouter()
	const [css, theme] = useStyletron()
	const [revenue, setRevenue] = useState([4000])
	const [duration, setDuration] = useState([25])
	const [expanses, setExpanses] = useState([0])
	const [contribution, setContribution] = useState([0])
	const {loanAbility, monthlyLoanAbility} = getMaxLoan(
		revenue[0],
		expanses[0],
		duration[0],
		contribution[0],
	)

	return (
		<FullPageLayout>
			<Breadcrumbs>
				<StyledLink href='/'>Home</StyledLink>
				<StyledLink href='/immo'>Simulation de crédit immobilier</StyledLink>
				<span>Emprunt</span>
			</Breadcrumbs>
			<HeroLabel label={"Simulation capacité d'emprunt :"} />
			<StyledMainLayout
				className={css({
					backgroundColor: theme.colors.tagPrimaryOutlinedHover,
				})}
			>
				<Card title={'Votre projet'}>
					<InputSlider
						label={'revenus'}
						value={revenue}
						onChange={setRevenue}
						unit={'€ /mois'}
						max={15000}
					/>
					<InputSlider
						label={'charges'}
						value={expanses}
						onChange={setExpanses}
						unit={'€ /mois'}
						max={10000}
					/>
					<InputSlider
						label={'apport personnel'}
						value={contribution}
						onChange={setContribution}
						unit={'€'}
						max={100000}
					/>
					<InputSlider
						label={'durée du prêt'}
						value={duration}
						onChange={setDuration}
						unit={'ans'}
						step={1}
						max={25}
					/>
				</Card>
				<div>
					<Card title={'Votre capacité'} backgroundColor={'rgb(0, 104, 85)'}>
						<ColumnResultLabelXL
							label={"capacité d'emprunt"}
							value={loanAbility.toString()}
						/>
						<Divider />
						<RowResultLabelL
							label={'mensualité'}
							value={monthlyLoanAbility.toString()}
						/>
					</Card>
					<GoToMenuButton
						size={SIZE.large}
						endEnhancer={() => <ArrowRight size={24} />}
						onClick={() => router.push('/immo')}
					>
						Retourner au menu
					</GoToMenuButton>
				</div>
			</StyledMainLayout>
		</FullPageLayout>
	)
}
export default Ability
