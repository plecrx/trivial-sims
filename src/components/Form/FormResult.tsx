import {Answer} from '../../types/answer.type'
import {Label1} from 'baseui/typography'
import {Button} from 'baseui/button'
import {computePTZ} from '../../utils/computePTZ'

type FormResultProps = {
	answers: Answer[]
	returnToMenu: () => void
	resetForm: () => void
}

const FormResult = ({answers, resetForm, returnToMenu}: FormResultProps) => {
	computePTZ(answers)

	return (
		<div>
			<Label1>Résultats</Label1>
			{answers.map(answer => (
				<div key={`answer-${answer.id}`}>{answer.answer}</div>
			))}
			<Button onClick={resetForm}>Refaire simulation</Button>
			<Button onClick={returnToMenu}>Aller au menu</Button>
		</div>
	)
}

export default FormResult
