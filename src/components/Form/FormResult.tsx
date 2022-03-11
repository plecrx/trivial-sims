import {Label1} from 'baseui/typography'
import {Button, SHAPE} from 'baseui/button'
import {computePTZ} from '../../utils/ptz/computePTZ'
import {Answer} from '../../types/answer.type'
import {Block} from 'baseui/block'
import styled from '@emotion/styled'
import {useStyletron} from 'baseui'
import {FaUndo} from 'react-icons/fa'

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

const FormDoubleActionWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 10px;
`

type FormResultProps = {
	answers: Answer
	returnToMenu: () => void
	resetForm: () => void
}

const FormResult = ({answers, resetForm, returnToMenu}: FormResultProps) => {
	const [css, theme] = useStyletron()

	const {ptzAmount, amortization, deferral, duration} = computePTZ(answers)
	const monthly_payment = (ptzAmount / (amortization * 12)).toFixed(2)

	return (
		<>
			<WrapperBlock>
				{ptzAmount !== 0 && (
					<img
						height='auto'
						width='200em'
						loading='lazy'
						src={'/happy_news.svg'}
						alt=''
					/>
				)}
				<div>
					<CustomAnimationBlock
						className={css({
							backgroundColor: theme.colors.tagPrimaryOutlinedHover,
						})}
					>
						{ptzAmount !== 0 ? (
							<div>
								<br />
								<Label1>
									Bonne nouvelle, vous êtes éligible au PTZ pour un montant de{' '}
									<strong>{ptzAmount} €</strong>
								</Label1>
								<br />
								Durée totale du prêt : {duration} ans
								<br />
								Période de différé total : {deferral} ans
								<br />
								{/* eslint-disable-next-line react/no-unescaped-entities */}
								Période d'amortissement : {amortization} ans
								<br />
								Mensualité première période hors assurance : 0 €
								<br />
								Mensualité seconde période hors assurance : {monthly_payment} €
								<br />
								<br />
							</div>
						) : (
							<>
								Vous ne remplissez pas les conditions pour pouvoir bénéficier du PTZ.
								<br />
							</>
						)}
					</CustomAnimationBlock>
					<FormDoubleActionWrapper>
						<Button
							shape={SHAPE.pill}
							onClick={resetForm}
							startEnhancer={() => <FaUndo size={20} />}
						>
							Refaire simulation
						</Button>
						<Button onClick={returnToMenu}>Menu</Button>
					</FormDoubleActionWrapper>
				</div>
			</WrapperBlock>
		</>
	)
}

export default FormResult
