import {QuestionType} from './questionType.type'

export type Question = {
	question: string
	answerOptions?: string[]
	placeholder?: string
	type: QuestionType
}
