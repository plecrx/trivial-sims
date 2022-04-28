import React from 'react'
import {isNumeric} from '../../utils/isNumeric'
import {InputTextProps} from './inputText.types'
import {InputWrapper, StyledInput} from './inputText.styles'

const InputText = ({value, max, onChange}: InputTextProps) => {
	const handleChange = (answer: string, fn: (nbr: number[]) => void) => {
		if (isNumeric(answer)) {
			fn([Number(answer)])
		}
	}
	return (
		<InputWrapper>
			<StyledInput
				type={'text'}
				value={value}
				onChange={e => handleChange(e.currentTarget.value, onChange)}
				placeholder={'0'}
				maxLength={5}
				step={100}
				min={0}
				max={max}
			/>
		</InputWrapper>
	)
}

export default InputText
