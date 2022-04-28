import {PTZQuestionIDs} from '../../utils/ptz/data'

export enum HousingQuotient {
	'new' = 1,
	'old',
	'social',
}

export type NbrPeopleDigits = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type PtzResultProps = {
	data: {[x in PTZQuestionIDs]: any}
}
