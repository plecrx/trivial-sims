import FormQuestion from './FormQuestion'
import React, {useState} from 'react'
import {Form} from '../../types/form.type'
import FormInputSelect from './FormInputSelect'
import FormActionPrevious from './FormActionPrevious'
import FormActionNext from './FormActionNext'
import FormInputMoney from './FormInputMoney'
import FormInputCity from './FormInputCity'
import styled from '@emotion/styled'

const FormActionWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
`

type FormProps = {
	form: Form
}

const Form = ({form}: FormProps) => {
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [showScore, setShowScore] = useState(false)
	const [value, setValue] = useState('')

	const navigateToPrevious = () => {
		const previousQuestion = currentQuestion - 1
		if (previousQuestion >= 0) {
			setCurrentQuestion(previousQuestion)
		}
	}

	const navigateToNext = (answer?: string) => {
		const nextQuestion = currentQuestion + 1
		if (nextQuestion < form.length) {
			setCurrentQuestion(nextQuestion)
		} else {
			setShowScore(true)
		}
	}

	return (
		<>
			{showScore ? (
				<>Résultats</>
			) : (
				<>
					<FormQuestion currentQuestion={form[currentQuestion]} />
					<div>
						{form[currentQuestion].type === 'select' && (
							<>
								<FormInputSelect
									currentQuestion={form[currentQuestion]}
									onSelect={navigateToNext}
								/>
								<FormActionPrevious action={navigateToPrevious} />
							</>
						)}
						{form[currentQuestion].type === 'money' && (
							<>
								<FormInputMoney
									currentQuestion={form[currentQuestion]}
									value={value}
									setValue={setValue}
								/>
								<FormActionWrapper>
									<FormActionPrevious action={navigateToPrevious} />
									<FormActionNext action={navigateToNext} />
								</FormActionWrapper>
							</>
						)}
						{form[currentQuestion].type === 'city' && (
							<>
								<FormInputCity
									currentQuestion={form[currentQuestion]}
									value={value}
									setValue={setValue}
								/>
								<FormActionWrapper>
									<FormActionPrevious action={navigateToPrevious} />
									<FormActionNext action={navigateToNext} />
								</FormActionWrapper>
							</>
						)}
					</div>
				</>
			)}
		</>
	)
}

export default Form
