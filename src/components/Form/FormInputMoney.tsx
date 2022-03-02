import {Question} from '../../types/question.type'
import {Input} from 'baseui/input'

type FormInputMoneyProps = {
	currentQuestion: Question
	value: string
	setValue: (value: string) => void
}

const FormInputMoney = ({
	currentQuestion,
	value,
	setValue,
}: FormInputMoneyProps) => {
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
				endEnhancer={'€'}
				clearable
			/>
		</div>
	)
}

export default FormInputMoney
