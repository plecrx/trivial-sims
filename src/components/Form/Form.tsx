import FormItem from './FormItem'
import React, {useState} from 'react'
import {Form} from '../../types/form.type'

type FormProps = {
	form: Form
}

const Form = ({form}: FormProps) => {
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [currentAnswer, setCurrentAnswer] = useState('')
	const [showScore, setShowScore] = useState(false)

	const navigateToPrevious = () => {
		const previousQuestion = currentQuestion - 1
		if (previousQuestion >= 0) {
			setCurrentQuestion(previousQuestion)
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

	return (
		<>
			{showScore ? (
				<>Résultats</>
			) : (
				<FormItem
					onPrevious={navigateToPrevious}
					onValidate={navigateToNext}
					currentQuestion={form[currentQuestion]}
				/>
			)}
		</>
	)
}

export default Form
