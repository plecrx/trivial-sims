import {Question} from '../../types/question.type'
import {Input} from 'baseui/input'

type FormInputCityProps = {
	currentQuestion: Question
	value: string
	setValue: (value: string) => void
}

const FormInputCity = ({
	currentQuestion,
	value,
	setValue,
}: FormInputCityProps) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				margin: '1em 0',
				gap: '1em',
			}}
		>
			<Input
				value={value}
				onChange={e => setValue(e.currentTarget.value)}
				placeholder={currentQuestion.placeholder}
				clearable
			/>
		</div>
	)
}

export default FormInputCity
