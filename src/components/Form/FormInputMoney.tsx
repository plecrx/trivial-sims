import {Input} from 'baseui/input'
import styled from '@emotion/styled'
import {Block} from 'baseui/block'

const InputMoneyContainer = styled(Block)`
	display: flex;
	flex-direction: column;
	margin: 1em 0;
	gap: 1em;
`

type FormInputMoneyProps = {
	placeholder?: string
	value: number
	onChange: (value: number) => void
}

const FormInputMoney = ({
	placeholder,
	value,
	onChange,
}: FormInputMoneyProps) => {
	const handleChange = (answer: string) => {
		onChange(Number(answer))
	}
	return (
		<InputMoneyContainer>
			<Input
				value={value}
				onChange={e => handleChange(e.currentTarget.value)}
				placeholder={placeholder}
				endEnhancer={'€'}
				type='currency'
				autoFocus
			/>
		</InputMoneyContainer>
	)
}

export default FormInputMoney
