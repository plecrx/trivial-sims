import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {FullPageLayout} from '../../layouts/fullpage.layout'
import React, {useState} from 'react'
import {StyledLink} from 'baseui/link'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import {useStyletron} from 'baseui'
import {DisplayMedium, HeadingXXLarge, LabelLarge} from 'baseui/typography'
import {Button} from 'baseui/button'
import {Radio, RadioGroup} from 'baseui/radio'
import Slider from '../../components/Slider/Slider'
import Divider from '../../components/Divider/Divider'

const LoanContainer = styled(Block)`
	width: 80%;
	margin: 2.5em 0 5em 0;
`

const MainBlock = styled(Block)`
	padding-left: calc(8.33333%);
	padding-right: calc(8.33333%);
	margin-top: 1.5em;
	border-radius: 8px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: start;
	flex-wrap: wrap;
	gap: 24px;
`

const ResultContainer = styled(Block)`
	display: flex;
	flex-direction: column;
	margin-bottom: 40px;
	width: 500px;
	align-items: flex-start;
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
`

const Loan = () => {
	const [css, theme] = useStyletron()
	const [isSolo, setIsSolo] = useState('true')
	const [revenue, setRevenue] = useState([0])
	const [duration, setDuration] = useState([15])
	return (
		<FullPageLayout>
			<LoanContainer>
				<Breadcrumbs>
					<StyledLink href='/'>Home</StyledLink>
					<StyledLink href='/immo'>Simulation de crédit immobilier</StyledLink>
					<span>Emprunt</span>
				</Breadcrumbs>
				<MainBlock
					className={css({
						backgroundColor: theme.colors.tagPrimaryOutlinedHover,
					})}
				>
					<div>
						<HeadingXXLarge>Votre projet</HeadingXXLarge>
						<ResultContainer
							className={css({
								backgroundColor: theme.colors.warning400,
							})}
						>
							<ColumnWrapper>
								<LabelLarge>EMPRUNTEUR(S)</LabelLarge>
								<RadioGroup
									value={isSolo}
									align='horizontal'
									onChange={event => setIsSolo(event.currentTarget.value)}
								>
									<Radio value='true'>Seul</Radio>
									<Radio value='false'>A deux</Radio>
								</RadioGroup>
							</ColumnWrapper>
							<ColumnWrapper>
								<Wrapper>
									<LabelLarge>REVENUS</LabelLarge>
									<div>{revenue} €</div>
								</Wrapper>
								<Slider
									value={revenue}
									min={0}
									max={15000}
									step={100}
									onChangeValue={setRevenue}
								/>
							</ColumnWrapper>
							<ColumnWrapper>
								<Wrapper>
									<LabelLarge>DUREE DU PRÊT</LabelLarge>
									<div>{duration} ans</div>
								</Wrapper>
								<Slider
									value={duration}
									min={0}
									max={25}
									step={1}
									onChangeValue={setDuration}
								/>
							</ColumnWrapper>
						</ResultContainer>
					</div>
					<div>
						<HeadingXXLarge>Votre capacité</HeadingXXLarge>
						<ResultContainer
							className={css({
								backgroundColor: 'rgb(0, 104, 85)',
							})}
						>
							<LabelLarge>CAPACITE D'EMPRUNT</LabelLarge>
							<DisplayMedium>298000€</DisplayMedium>
							<Divider />
							<Wrapper style={{marginBottom: '24px'}}>
								<LabelLarge>MENSUALITE</LabelLarge>
								<div>1400 €</div>
							</Wrapper>
							<Button>Retourner au menu</Button>
						</ResultContainer>
					</div>
				</MainBlock>
			</LoanContainer>
		</FullPageLayout>
	)
}
export default Loan
