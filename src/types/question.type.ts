import {QuestionType} from './questionType.type'

export type Question = {
	id: string
	question: string
	answerOptions?: string[]
	type: QuestionType
}
