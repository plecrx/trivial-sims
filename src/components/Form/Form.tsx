import FormQuestion from './FormQuestion'
import React, {useState} from 'react'
import {Form} from '../../types/form.type'
import FormInputSelect from './FormInputSelect'
import FormActionPrevious from './FormActionPrevious'
import FormActionNext from './FormActionNext'
import FormInputMoney from './FormInputMoney'
import FormInputCity from './FormInputCity'
import styled from '@emotion/styled'
import {Answer} from '../../types/answer.type'
import {useRouter} from 'next/router'
import {QuestionType} from '../../types/questionType.type'
import FormResult from './FormResult'

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

	const returnToMenu = () => router.push('/immo')

	const resetForm = () => {
		setShowScore(false)
		setCurrentQuestion(0)
	}

	const navigateToPrevious = () => {
		const previousQuestion = currentQuestion - 1
		if (previousQuestion >= 0) {
			setCurrentQuestion(previousQuestion)
		} else {
			returnToMenu()
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

	const renderFormInputs = (type: QuestionType) => {
		const types = {
			select: () => (
				<FormInputSelect
					answerOptions={form[currentQuestion].answerOptions}
					navigateToNext={navigateToNext}
					saveAnswer={saveAnswer}
				/>
			),
			money: () => (
				<FormInputMoney
					value={
						answers[currentQuestion] ? (answers[currentQuestion].answer as number) : 0
					}
					onChange={saveAnswer}
				/>
			),
			city: () => (
				<FormInputCity
					city={
						answers[currentQuestion] && [
							{city: String(answers[currentQuestion].answer)},
						]
					}
					onSelectChange={saveAnswer}
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
				<FormActionNext
					action={navigateToNext}
					isDisabled={!answers[currentQuestion]}
				/>
			</FormDoubleActionWrapper>
		)
	}

	return (
		<>
			{showScore ? (
				<FormResult
					answers={answers}
					returnToMenu={returnToMenu}
					resetForm={resetForm}
				/>
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
