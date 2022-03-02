import FormQuestion from './FormQuestion'
import React, {useState} from 'react'
import {Form} from '../../types/form.type'
import FormSelector from './FormSelector'
import FormActionPrevious from './FormActionPrevious'
import FormActionNext from './FormActionNext'
import FormInputMoney from './FormInputMoney'
import FormInputCity from './FormInputCity'
import styled from '@emotion/styled'
import {Answer} from '../../types/answer.type'
import {useRouter} from 'next/router'
import {QuestionType} from '../../types/questionType.type'

const FormDoubleActionWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 10px;
`

type FormProps = {
	form: Form
}

const Form = ({form}: FormProps) => {
	const router = useRouter()
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [showScore, setShowScore] = useState(false)
	const [answers, setAnswers] = useState<Answer[]>([])

	const navigateToPrevious = () => {
		const previousQuestion = currentQuestion - 1
		if (previousQuestion >= 0) {
			setCurrentQuestion(previousQuestion)
		} else {
			router.push('/immo')
		}
	}

	const navigateToNext = () => {
		const nextQuestion = currentQuestion + 1
		if (nextQuestion < form.length) {
			setCurrentQuestion(nextQuestion)
		} else {
			setShowScore(true)
		}
	}

	const saveAnswer = (answer: string | number) => {
		let newArr = [...answers]
		newArr[currentQuestion] = {question: currentQuestion, answer: answer}
		setAnswers(newArr)
	}

	const getValue = () => {
		if (answers[currentQuestion]) {
			return answers[currentQuestion].answer
		}
		return form[currentQuestion].type === 'money' ? 0 : ''
	}

	const renderFormInputs = (type: QuestionType) => {
		const types = {
			select: () => (
				<FormSelector
					answerOptions={form[currentQuestion].answerOptions}
					navigateToNext={navigateToNext}
					saveAnswer={saveAnswer}
				/>
			),
			money: () => (
				<FormInputMoney
					placeholder={form[currentQuestion].placeholder}
					value={Number(getValue())}
					onChange={saveAnswer}
				/>
			),
			city: () => (
				<FormInputCity
					placeholder={form[currentQuestion].placeholder}
					value={String(getValue())}
					onChange={saveAnswer}
				/>
			),
		}
		return types[type]()
	}

	const renderFormActions = (type: QuestionType) => {
		return type === 'select' ? (
			<FormActionPrevious action={navigateToPrevious} />
		) : (
			<FormDoubleActionWrapper>
				<FormActionPrevious action={navigateToPrevious} />
				<FormActionNext action={navigateToNext} />
			</FormDoubleActionWrapper>
		)
	}

	return (
		<>
			{showScore ? (
				<div>Résultats</div>
			) : (
				<>
					<FormQuestion currentQuestion={form[currentQuestion]} />
					{renderFormInputs(form[currentQuestion].type)}
					{renderFormActions(form[currentQuestion].type)}
				</>
			)}
		</>
	)
}

export default Form
