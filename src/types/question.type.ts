import {QuestionType} from './questionType.type'

export type Question = {
	id: string
	question: string
	answerOptions?: {id: number | boolean | string; label: string}[]
	type: QuestionType
}
