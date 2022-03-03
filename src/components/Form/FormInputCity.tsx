import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {FormControl} from 'baseui/form-control'
import {OptionsT, Select, Value} from 'baseui/select'
import {useState} from 'react'

const Container = styled(Block)`
	display: flex;
	flex-direction: column;
	margin: 1em 0;
	gap: 1em;
`

type FormInputCityProps = {
	placeholder?: string
	onChange: (value: string) => void
}

const FormInputCity = ({onChange}: FormInputCityProps) => {
	const [city, setCity] = useState<Value>()
	const handleChange = (answer: Value) => {
		setCity(answer)
		onChange(String(answer))
	}
	const cities: OptionsT = []

	//'https://api-adresse.data.gouv.fr/search/?q=creteil&type=municipality&autocomplete=1'

	return (
		<Container>
			<FormControl>
				<Select
					value={city}
					onChange={({value}) => handleChange(value)}
					options={cities}
					valueKey='name'
					required
					clearable
				/>
			</FormControl>
		</Container>
	)
}

export default FormInputCity
