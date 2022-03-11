import React, {useEffect, useState} from 'react'
import FormQuestion from './FormQuestion'
import FormInputOption from './FormInputOption'
import FormActionPrevious from './FormActionPrevious'
import FormActionNext from './FormActionNext'
import FormInputMoney from './FormInputMoney'
import FormInputCity from './FormInputCity'
import FormResult from './FormResult'
import styled from '@emotion/styled'
import {QuestionInfo, QuestionType} from '../../types/question.type'
import {Answer} from '../../types/answer.type'

const CustomAnimationDiv = styled.div`
	animation-duration: 0.5s;
	animation-name: slidein;

	@keyframes slidein {
		from {
			margin-left: 10%;
			width: 100%;
		}

		to {
			margin-left: 0;
			width: 100%;
		}
	}
`

const FormDoubleActionWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 10px;
`

type FormProps = {
	form: Record<string, QuestionInfo>
	returnToMenu: () => void
}

const Form = ({form, returnToMenu}: FormProps) => {
	const formKeys = Object.keys(form)
	const [showScore, setShowScore] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [answers, setAnswers] = useState<Answer>({})
	const [currentQuestion, setCurrentQuestion] = useState<QuestionInfo>({
		answerOptions: [],
		question: '',
		type: 'option',
	})

	useEffect(() => {
		setCurrentQuestion(form[formKeys[currentIndex]])
	}, [currentIndex, form, formKeys])

	const resetForm = () => {
		setShowScore(false)
		setCurrentIndex(0)
	}

	const navigateToPrevious = () => {
		const previousIndex = currentIndex - 1
		if (previousIndex >= 0) {
			setCurrentIndex(previousIndex)
		} else {
			returnToMenu()
		}
	}

	const navigateToNext = () => {
		const nextIndex = currentIndex + 1
		if (nextIndex < formKeys.length) {
			setCurrentIndex(nextIndex)
		} else {
			setShowScore(true)
		}
	}

	const saveFormAnswer = (answer: string) => {
		const updatedValue: {[x: string]: string} = {}
		updatedValue[formKeys[currentIndex]] = answer
		setAnswers({
			...answers,
			...updatedValue,
		})

		/**
		let newArr = [...answers]
		newArr[currentIndex] = {id: form[currentIndex].id, answer: answer}
		setFormAnswers(newArr)
			**/
	}

	const renderFormInputs = (type: QuestionType) =>
		({
			option: () => (
				<FormInputOption
					answerOptions={currentQuestion.answerOptions}
					navigateToNext={navigateToNext}
					saveAnswer={saveFormAnswer}
				/>
			),
			money: () => (
				<FormInputMoney
					key={`${formKeys[currentIndex]}-${currentIndex}`}
					value={answers && answers[formKeys[currentIndex] as string]}
					onChange={saveFormAnswer}
				/>
			),
			city: () => (
				<FormInputCity
					onSelectChange={saveFormAnswer}
					city={answers && answers[formKeys[currentIndex] as string]}
				/>
			),
		}[type]())

	const renderFormActions = (type: QuestionType) =>
		type === 'option' ? (
			<FormActionPrevious action={navigateToPrevious} />
		) : (
			<FormDoubleActionWrapper>
				<FormActionPrevious action={navigateToPrevious} />
				<FormActionNext
					action={navigateToNext}
					isDisabled={!answers || !answers[formKeys[currentIndex] as string]}
				/>
			</FormDoubleActionWrapper>
		)

	return (
		<>
			{showScore ? (
				<FormResult
					answers={answers}
					returnToMenu={returnToMenu}
					resetForm={resetForm}
				/>
			) : (
				<CustomAnimationDiv>
					<FormQuestion currentQuestion={currentQuestion.question} />
					{renderFormInputs(currentQuestion.type)}
					{renderFormActions(currentQuestion.type)}
				</CustomAnimationDiv>
			)}
		</>
	)
}

export default Form
