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
import {useRouter} from 'next/router'
import HeroLabel from '../../components/HeroLabel/HeroLabel'
import {isNumeric} from '../../utils/isNumeric'

const AbilityContainer = styled(Block)`
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

const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 96px;
	padding: 0 4px;
	background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNCAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSIjMDA2ODU1Ii8+PC9zdmc+');
	background-repeat: repeat-x;
	background-position: 0 100%;
	background-size: 4px 2px;
`

const StyledInput = styled.input`
	text-align: center;
	background-color: transparent;
	max-width: 50px;
	font-size: 16px;
	border: 0 none;
	color: rgb(0, 104, 85);
	caret-color: rgb(0, 104, 85);
	&::-webkit-inner-spin-button,
	::-webkit-outer-spin-button {
		-webkit-appearance: none;
	}

	&:focus {
		outline: transparent;
	}
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
	-moz-box-align: center;
	align-items: center;
	-moz-box-pack: justify;
`

const Ability = () => {
	const [css, theme] = useStyletron()
	const router = useRouter()
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

	const handleChange = (answer: string, fn: (nbr: number[]) => void) => {
		if (isNumeric(answer)) {
			fn([Number(answer)])
		}
	}

	return (
		<FullPageLayout>
			<AbilityContainer>
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
									<span
										style={{
											display: 'flex',
											flex: '1 1 auto',
											justifyContent: 'flex-end',
										}}
									>
										<div style={{display: 'inline-flex', alignItems: 'center'}}>
											<InputWrapper>
												<StyledInput
													type={'text'}
													value={revenue[0] || ''}
													onChange={e => handleChange(e.target.value, setRevenue)}
													placeholder={'0'}
													maxLength={5}
													step={100}
													min={0}
													max={15000}
												/>
											</InputWrapper>
											€ /mois
										</div>
									</span>
								</Wrapper>
								<Slider
									value={revenue || 0}
									min={0}
									max={15000}
									step={100}
									onChangeValue={setRevenue}
								/>
							</ColumnWrapper>
							<ColumnWrapper>
								<Wrapper>
									<LabelLarge color={theme.colors.colorSecondary}>CHARGES</LabelLarge>
									<div style={{display: 'inline-flex', alignItems: 'flex-end'}}>
										<InputWrapper>
											<StyledInput
												type={'text'}
												value={expanses[0] || ''}
												onChange={e => handleChange(e.target.value, setExpanses)}
												placeholder={'0'}
												maxLength={5}
												step={100}
												min={0}
												max={15000}
											/>
										</InputWrapper>
										€ /mois
									</div>
								</Wrapper>
								<Slider
									value={expanses || 0}
									min={0}
									max={100000}
									step={100}
									onChangeValue={setExpanses}
								/>
							</ColumnWrapper>
							<ColumnWrapper>
								<Wrapper>
									<LabelLarge color={theme.colors.colorSecondary}>
										APPORT PERSONNEL
									</LabelLarge>
									<div style={{display: 'flex', gap: '2px'}}>
										<InputWrapper>
											<StyledInput
												type={'text'}
												value={contribution[0] || ''}
												onChange={e => handleChange(e.target.value, setContribution)}
												placeholder={'0'}
												maxLength={5}
												step={100}
												min={0}
												max={15000}
											/>
										</InputWrapper>
										€
									</div>
								</Wrapper>
								<Slider
									value={contribution || 0}
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
									<div style={{display: 'flex', gap: '2px'}}>
										<InputWrapper>
											<StyledInput
												type={'text'}
												value={duration[0] || ''}
												onChange={e => handleChange(e.target.value, setDuration)}
												placeholder={'0'}
												maxLength={2}
												step={100}
												min={0}
												max={15000}
											/>
										</InputWrapper>
										ans
									</div>
								</Wrapper>
								<Slider
									value={duration || 0}
									min={5}
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
						<ResultContainer backgroundColor={'rgb(0, 104, 85)'} width={'400px'}>
							<LabelLarge color={theme.colors.primary100}>
								{/* eslint-disable-next-line react/no-unescaped-entities */}
								CAPACITE D'EMPRUNT
							</LabelLarge>
							<DisplayMedium color={theme.colors.primary100}>
								<strong>{loanAbility} €</strong>
							</DisplayMedium>
							<Divider />
							<ColumnWrapper>
								<Wrapper style={{color: theme.colors.primary100}}>
									<LabelLarge color={theme.colors.primary100}>MENSUALITE</LabelLarge>
									<div>{monthlyLoanAbility} €</div>
								</Wrapper>
							</ColumnWrapper>
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
			</AbilityContainer>
		</FullPageLayout>
	)
}
export default Ability
