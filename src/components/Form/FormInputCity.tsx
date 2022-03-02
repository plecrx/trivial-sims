import {Input} from 'baseui/input'
import styled from '@emotion/styled'
import {Block} from 'baseui/block'

const Container = styled(Block)`
	display: flex;
	flex-direction: column;
	margin: 1em 0;
	gap: 1em;
`

type FormInputCityProps = {
	placeholder?: string
	value: string
	onChange: (value: string) => void
}

const FormInputCity = ({placeholder, value, onChange}: FormInputCityProps) => {
	const handleChange = (answer: string) => {
		onChange(answer)
	}
	return (
		<Container>
			<Input
				value={value}
				onChange={e => handleChange(e.currentTarget.value)}
				placeholder={placeholder}
				clearable
			/>
		</Container>
	)
}

export default FormInputCity
