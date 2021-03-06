import React, {useEffect, useState} from 'react'
import FormQuestion from './formQuestion.component'
import FormInputOption from './formInputOption.component'
import FormActionPrevious from './formActionPrevious.component'
import FormActionNext from './formActionNext.component'
import FormInputMoney from './formInputMoney.component'
import FormInputCity from './formInputCity.component'
import FormResult from './formResult.component'
import {QuestionInfo, QuestionType} from '../../types/question.type'
import {CustomAnimationDiv, FormDoubleActionWrapper} from './form.styles'
import {FormProps} from './form.types'

const Form = ({form, returnToMenu, FormResultTopic}: FormProps) => {
	const formKeys = Object.keys(form)
	const [showScore, setShowScore] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [answers, setAnswers] = useState<any>({})
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
				<FormResult returnToMenu={returnToMenu} resetForm={resetForm}>
					<FormResultTopic data={answers} />
				</FormResult>
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
