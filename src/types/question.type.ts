export interface QuestionInfo {
	question: string
	answerOptions?: {id: string; label: string}[]
	type: QuestionType
	required: string[]
}

export type QuestionType = 'city' | 'money' | 'option'
