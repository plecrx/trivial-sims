import {Answer} from '../../types/answer.type'
import {Label1} from 'baseui/typography'
import FormActionPrevious from './FormActionPrevious'
import {Button} from 'baseui/button'

type FormResultProps = {
	answers: Answer[]
	returnToMenu: () => void
	resetForm: () => void
}

const FormResult = ({answers, resetForm, returnToMenu}: FormResultProps) => {
	return (
		<div>
			<Label1>Résultats</Label1>
			{answers.map(answer => (
				<div key={`answer-${answer.question}`}>{answer.answer}</div>
			))}
			<Button onClick={resetForm}>Refaire simulation</Button>
			<Button onClick={returnToMenu}>Aller au menu</Button>
		</div>
	)
}

export default FormResult
