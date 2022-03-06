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
	console.log(computePTZ(answers))

	return (
		<div>
			<Label1>Résultats</Label1>
			{Object.keys(answers).map((answer, key) => (
				<div key={`answer-${answer}-${key}`}>
					{answer} : {answers[answer]}
				</div>
			))}
			<Button onClick={resetForm}>Refaire simulation</Button>
			<Button onClick={returnToMenu}>Aller au menu</Button>
		</div>
	)
}

export default FormResult
