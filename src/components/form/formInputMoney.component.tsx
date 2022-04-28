import {useState} from 'react'
import {Input} from 'baseui/input'
import {isNumeric} from '../../utils/isNumeric'
import {FormInputMoneyProps} from './form.types'
import {InputMoneyContainer} from './form.styles'

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
				placeholder={'0'}
				endEnhancer={'€'}
				type='currency'
				autoFocus
			/>
		</InputMoneyContainer>
	)
}

export default FormInputMoney
