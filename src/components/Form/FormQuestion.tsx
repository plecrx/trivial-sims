import {useStyletron} from 'baseui'
import {Question} from '../../types/question.type'

type FormQuestionProps = {
	currentQuestion: Question
}

const FormQuestion = ({currentQuestion}: FormQuestionProps) => {
	const [css, theme] = useStyletron()

	return (
		<div className={css({color: theme.colors.primary50})}>
			{currentQuestion.question}
		</div>
	)
}

export default FormQuestion
