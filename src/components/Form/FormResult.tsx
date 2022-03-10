import {Label1} from 'baseui/typography'
import {Button} from 'baseui/button'
import {computePTZ} from '../../utils/ptz/computePTZ'
import {Answer} from '../../types/answer.type'
import {Block} from 'baseui/block'
import styled from '@emotion/styled'
import {useStyletron} from 'baseui'

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
		<div>
			<Block
				className={css({
					backgroundColor: theme.colors.tagPrimaryOutlinedHover,
					borderRadius: '8px',
					padding: '2em',
					marginBlock: '2em',
				})}
			>
				<Label1>Résultats</Label1>
				{ptzAmount !== 0 ? (
					<div>
						<br />
						Bonne nouvelle, vous êtes éligible au PTZ pour un montant de {ptzAmount} €
						<br />
						Durée totale du prêt : {duration} ans
						<br />
						Période de différé total : {deferral} ans
						<br />
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
			</Block>
			<FormDoubleActionWrapper>
				<Button onClick={resetForm}>Refaire simulation</Button>
				<Button onClick={returnToMenu}>Menu</Button>
			</FormDoubleActionWrapper>
		</div>
	)
}

export default FormResult
