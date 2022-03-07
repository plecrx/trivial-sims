import {Input} from 'baseui/input'
import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {isNumeric} from '../../utils/isNumeric'
import {useState} from 'react'

const InputMoneyContainer = styled(Block)`
	display: flex;
	flex-direction: column;
	margin: 1em 0;
	gap: 1em;
`

type FormInputMoneyProps = {
	value?: string
	onChange: (value: string) => void
}

const FormInputMoney = ({value, onChange}: FormInputMoneyProps) => {
	const [currValue, setCurrValue] = useState(value || '')
	const handleChange = (answer: string) => {
		if (isNumeric(answer)) {
			setCurrValue(answer)
			onChange(answer)
		}
	}

	return (
		<InputMoneyContainer>
			<Input
				value={currValue}
				onChange={e => handleChange(e.currentTarget.value)}
				placeholder={'15228'}
				endEnhancer={'€'}
				type='currency'
				autoFocus
			/>
		</InputMoneyContainer>
	)
}

export default FormInputMoney
