import React from 'react'
import SmoothList from 'react-smooth-list'
import {Button, SHAPE, SIZE} from 'baseui/button'
import {ArrowRight} from 'baseui/icon'
import {useStyletron} from 'baseui'
import {FormInputSelectProps} from './form.types'
import {InputSelectBlock} from './form.styles'

const FormInputOption = ({
	answerOptions,
	saveAnswer,
	navigateToNext,
}: FormInputSelectProps) => {
	const [css, theme] = useStyletron()

	const handleSelect = (answer: string) => {
		saveAnswer(answer)
		navigateToNext()
	}

	return (
		<SmoothList delay={100} transitionDuration={1000}>
			{answerOptions!.map((answerOption, index) => (
				<InputSelectBlock
					key={`form-item-answer-${index}`}
					className={css({
						backgroundColor: theme.colors.backgroundPrimary,
						color: theme.colors.colorPrimary,
					})}
					onClick={() => handleSelect(answerOption.id)}
				>
					{answerOption.label}
					<Button
						shape={SHAPE.circle}
						size={SIZE.mini}
						overrides={{
							BaseButton: {
								style: () => ({
									backgroundColor: '#F9A826',
								}),
							},
						}}
					>
						<ArrowRight />
					</Button>
				</InputSelectBlock>
			))}
		</SmoothList>
	)
}

export default FormInputOption
