import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {FullPageLayout} from '../../layouts/fullpage.layout'
import React, {useState} from 'react'
import {StyledLink} from 'baseui/link'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import {useStyletron} from 'baseui'
import {DisplayMedium, HeadingXXLarge, LabelLarge} from 'baseui/typography'
import {Button, SHAPE, SIZE} from 'baseui/button'
import Slider from '../../components/Slider/Slider'
import Divider from '../../components/Divider/Divider'
import {getMaxLoan} from '../../utils/ability/getMaxLoan'
import {ArrowRight} from 'baseui/icon'
import {router} from 'next/client'
import HeroLabel from '../../components/HeroLabel/HeroLabel'

const LoanContainer = styled(Block)`
	width: 80%;
	margin: 2.5em 0 5em 0;
`

const MainBlock = styled(Block)`
	display: flex;
	justify-content: space-evenly;
	align-items: start;
	flex-wrap: wrap;
`

const ResultContainer = styled(Block)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 48px;
	box-sizing: border-box;
	box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px;
	border: 1px solid rgb(211, 211, 211);
	border-radius: 8px;
	padding: 32px;
	flex: 1 0 242px;
	transition: border-color 300ms ease-in-out 0s;
`

const ColumnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 24px;
`

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	gap: 150px;
`

const Loan = () => {
	const [css, theme] = useStyletron()
	const [revenue, setRevenue] = useState([100])
	const [duration, setDuration] = useState([15])
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
			<LoanContainer>
				<Breadcrumbs>
					<StyledLink href='/'>Home</StyledLink>
					<StyledLink href='/immo'>Simulation de crédit immobilier</StyledLink>
					<span>Emprunt</span>
				</Breadcrumbs>
				<HeroLabel label={"Simulation capacité d'emprunt :"} />
				<MainBlock>
					<div style={{paddingInline: 'calc(8.33333%)'}}>
						<HeadingXXLarge>
							<strong>Votre projet</strong>
						</HeadingXXLarge>
						<ResultContainer
							backgroundColor={theme.colors.positive100}
							color={theme.colors.colorSecondary}
						>
							<ColumnWrapper>
								<Wrapper>
									<LabelLarge color={theme.colors.colorSecondary}>REVENUS</LabelLarge>
									<div>{revenue} € /mois</div>
								</Wrapper>
								<Slider
									value={revenue}
									min={100}
									max={15000}
									step={100}
									onChangeValue={setRevenue}
								/>
							</ColumnWrapper>
							<ColumnWrapper>
								<Wrapper>
									<LabelLarge color={theme.colors.colorSecondary}>CHARGES</LabelLarge>
									<div>{expanses} € /mois</div>
								</Wrapper>
								<Slider
									value={expanses}
									min={0}
									max={revenue[0]}
									step={100}
									onChangeValue={setExpanses}
								/>
							</ColumnWrapper>
							<ColumnWrapper>
								<Wrapper>
									<LabelLarge color={theme.colors.colorSecondary}>
										APPORT PERSONNEL
									</LabelLarge>
									<div>{contribution} €</div>
								</Wrapper>
								<Slider
									value={contribution}
									min={0}
									max={100000}
									step={100}
									onChangeValue={setContribution}
								/>
							</ColumnWrapper>
							<ColumnWrapper>
								<Wrapper>
									<LabelLarge color={theme.colors.colorSecondary}>
										DUREE DU PRÊT
									</LabelLarge>
									<div>{duration} ans</div>
								</Wrapper>
								<Slider
									value={duration}
									min={7}
									max={25}
									step={1}
									onChangeValue={setDuration}
								/>
							</ColumnWrapper>
						</ResultContainer>
					</div>
					<div>
						<HeadingXXLarge>
							<strong>Votre capacité</strong>
						</HeadingXXLarge>
						<ResultContainer backgroundColor={'rgb(0, 104, 85)'}>
							<LabelLarge color={theme.colors.primary100}>
								CAPACITE D'EMPRUNT
							</LabelLarge>
							<DisplayMedium color={theme.colors.primary100}>
								<strong>{loanAbility} €</strong>
							</DisplayMedium>
							<Divider />
							<Wrapper style={{marginBottom: '24px', color: theme.colors.primary100}}>
								<LabelLarge color={theme.colors.primary100}>MENSUALITE</LabelLarge>
								<div>{monthlyLoanAbility} €</div>
							</Wrapper>
						</ResultContainer>
					</div>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
							justifyContent: 'center',
						}}
					>
						<Button
							size={SIZE.large}
							endEnhancer={() => <ArrowRight size={24} />}
							shape={SHAPE.pill}
							onClick={() => router.push('/immo')}
						>
							Retourner au menu
						</Button>
					</div>
				</MainBlock>
			</LoanContainer>
		</FullPageLayout>
	)
}
export default Loan
