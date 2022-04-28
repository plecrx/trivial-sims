import {QuestionInfo} from '../../types/question.type'
import React from 'react'
import {PtzResultProps} from '../ptzResult/ptzResult.component'

export type FormProps = {
	form: Record<string, QuestionInfo>
	FormResultTopic: React.FC<PtzResultProps>
	returnToMenu: () => void
}

export type FormActionProps = {
	action: () => void
	isDisabled?: boolean
}

export type FormInputCityProps = {
	city: {nom: string; code: number; _score: number}[]
	onSelectChange: (selectValue: any) => void
}

export type FormInputMoneyProps = {
	value?: string
	onChange: (value: string) => void
}

export type FormInputSelectProps = {
	answerOptions?: {id: string; label: string}[]
	navigateToNext: () => void
	saveAnswer: (value: string) => void
}

export type FormQuestionProps = {
	currentQuestion: string
}

export type FormResultProps = {
	children: JSX.Element
	returnToMenu: () => void
	resetForm: () => void
}
