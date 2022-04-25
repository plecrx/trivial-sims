import React from 'react'
import styled from '@emotion/styled'
import {isNumeric} from '../../utils/isNumeric'

const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 96px;
	padding: 0 4px;
	background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNCAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSIjMDA2ODU1Ii8+PC9zdmc+');
	background-repeat: repeat-x;
	background-position: 0 100%;
	background-size: 4px 2px;
`

const StyledInput = styled.input`
	text-align: center;
	background-color: transparent;
	max-width: 50px;
	font-size: 16px;
	border: 0 none;
	color: rgb(0, 104, 85);
	caret-color: rgb(0, 104, 85);
	&::-webkit-inner-spin-button,
	::-webkit-outer-spin-button {
		-webkit-appearance: none;
	}

	&:focus {
		outline: transparent;
	}
`

type InputTextProps = {
	value: number
	max: number
	onChange: (value: number[]) => void
}

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
