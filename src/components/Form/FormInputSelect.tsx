import {Block} from 'baseui/block'
import {Button, SHAPE, SIZE} from 'baseui/button'
import {ArrowRight} from 'baseui/icon'
import {Question} from '../../types/question.type'
import {useStyletron} from 'baseui'

type FormInputSelectProps = {
	currentQuestion: Question
	onSelect: (value?: string) => void
}

const FormInputSelect = ({currentQuestion, onSelect}: FormInputSelectProps) => {
	const [css, theme] = useStyletron()

	return (
		<>
			{currentQuestion.answerOptions!.map((answerOption, index) => (
				<Block
					className={css({
						backgroundColor: theme.colors.backgroundPrimary,
						cursor: 'pointer',
						margin: '1em 0',
						padding: '1em',
						textAlign: 'center',
						borderRadius: '8px',
						display: 'flex',
						justifyContent: 'space-between',
						gap: '15px',
					})}
					onClick={() => onSelect(answerOption)}
					key={`form-item-answer-${index}`}
				>
					{answerOption}
					<Button
						shape={SHAPE.circle}
						size={SIZE.mini}
						overrides={{
							BaseButton: {
								style: () => ({
									backgroundColor: '#0c806b',
								}),
							},
						}}
					>
						<ArrowRight />
					</Button>
				</Block>
			))}
		</>
	)
}

export default FormInputSelect
