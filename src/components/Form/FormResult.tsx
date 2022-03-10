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

	return (
		<div>
			<Label1>Résultats</Label1>
			{ptzAmount !== 0 ? (
				<div>
					Vous avez le droit au PTZ
					<br />
					{amortization}
					<br />
					{deferral}
					<br />
					{duration}
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
