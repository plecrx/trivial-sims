import {useStyletron} from 'baseui'

type FormQuestionProps = {
	currentQuestion: string
}

const FormQuestion = ({currentQuestion}: FormQuestionProps) => {
	const [css, theme] = useStyletron()

	return (
		<div className={css({color: theme.colors.colorPrimary})}>
			<strong>{currentQuestion}</strong>
		</div>
	)
}

export default FormQuestion
