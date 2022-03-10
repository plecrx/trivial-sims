import {Block} from 'baseui/block'
import {Button, SHAPE, SIZE} from 'baseui/button'
import {ArrowRight} from 'baseui/icon'
import {useStyletron} from 'baseui'
import styled from '@emotion/styled'
import React from 'react'

const InputSelectBlock = styled(Block)`
	cursor: pointer;
	margin: 1em 0;
	padding: 1em;
	text-align: center;
	border-radius: 8px;
	display: flex;
	justify-content: space-between;
	gap: 15px;
`

type FormInputSelectProps = {
	answerOptions?: {id: string; label: string}[]
	navigateToNext: () => void
	saveAnswer: (value: string) => void
}

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
		<>
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
		</>
	)
}

export default FormInputOption
