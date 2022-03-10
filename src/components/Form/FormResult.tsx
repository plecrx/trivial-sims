import {Label1} from 'baseui/typography'
import {Button} from 'baseui/button'
import {computePTZ} from '../../utils/ptz/computePTZ'
import {Answer} from '../../types/answer.type'

type FormResultProps = {
	answers: Answer
	returnToMenu: () => void
	resetForm: () => void
}

const FormResult = ({answers, resetForm, returnToMenu}: FormResultProps) => {
	const {ptzAmount, amortization, deferral, duration} = computePTZ(answers)
	const monthly_payment = (ptzAmount / (amortization * 12)).toFixed(2)

	return (
		<div>
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

			<Button onClick={resetForm}>Refaire simulation</Button>
			<Button onClick={returnToMenu}>Aller au menu</Button>
		</div>
	)
}

export default FormResult
