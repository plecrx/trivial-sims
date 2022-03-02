import {Block} from 'baseui/block'
import {useStyletron} from 'baseui'
import {Input} from 'baseui/input'
import {Button} from 'baseui/button'
import {ArrowLeft, ArrowRight} from 'baseui/icon'
import {Question} from '../../types/question.type'
import {useState} from 'react'

type FormItemProps = {
	currentQuestion: Question
	onPrevious: () => void
	onValidate: (answer: string) => void
}

const FormItem = ({currentQuestion, onPrevious, onValidate}: FormItemProps) => {
	const [css, theme] = useStyletron()
	const [value, setValue] = useState('')

	const previous = () => {
		onPrevious()
	}

	const handleAnswerClick = (answer: string) => {
		onValidate(answer)
	}

	return (
		<>
			<div>{currentQuestion.question}</div>
			<div>
				{currentQuestion.answerOptions ? (
					<>
						{currentQuestion.answerOptions.map((answerOption, index) => (
							<Block
								className={css({
									backgroundColor: theme.colors.backgroundPrimary,
									cursor: 'pointer',
									margin: '1em 0',
									padding: '0.2em',
									textAlign: 'center',
								})}
								onClick={() => handleAnswerClick(answerOption)}
								key={`form-item-answer-${index}`}
							>
								{answerOption}
							</Block>
						))}
						<Button onClick={previous} startEnhancer={() => <ArrowLeft size={24} />}>
							Question précédente
						</Button>
					</>
				) : (
					<>
						<Input
							value={value}
							onChange={e => setValue(e.currentTarget.value)}
							placeholder={currentQuestion.placeholder}
							clearOnEscape
						/>
						<Button onClick={previous} startEnhancer={() => <ArrowLeft size={24} />}>
							Question précédente
						</Button>
						<Button onClick={() => handleAnswerClick(value)}>
							<ArrowRight size={24} />
						</Button>
					</>
				)}
			</div>
		</>
	)
}

export default FormItem
