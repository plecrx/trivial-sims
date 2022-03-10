export interface QuestionInfo {
	question: string
	answerOptions?: {id: string; label: string}[]
	type: QuestionType
}

export type QuestionType = 'city' | 'money' | 'option'
