import {useStyletron} from 'baseui'

type FormQuestionProps = {
	currentQuestion: string
}

const FormQuestion = ({currentQuestion}: FormQuestionProps) => {
	const [css, theme] = useStyletron()

	return (
		<div className={css({color: theme.colors.primary50})}>{currentQuestion}</div>
	)
}

export default FormQuestion
