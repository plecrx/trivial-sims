import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {FormControl} from 'baseui/form-control'
import {Select} from 'baseui/select'
import {useState} from 'react'

const Container = styled(Block)`
	display: flex;
	flex-direction: column;
	margin: 1em 0;
	gap: 1em;
`

type FormInputCityProps = {
	onSelectChange: (selectValue: any) => void
}

const FormInputCity = ({onSelectChange}: FormInputCityProps) => {
	const [selectValue, setSelectValue] = useState([])
	const cityOptions = [{city: 'Paris'}, {city: 'Kyiv'}, {city: 'Berlin'}]

	const handleChange = (answer: any) => {
		setSelectValue(answer)
		onSelectChange(answer[0]?.city)
	}

	//'https://api-adresse.data.gouv.fr/search/?q=creteil&type=municipality&autocomplete=1'

	return (
		<Container>
			<FormControl>
				<Select
					value={selectValue}
					onChange={({option}) => handleChange([option])}
					options={cityOptions}
					valueKey='city'
					labelKey='city'
				/>
			</FormControl>
		</Container>
	)
}

export default FormInputCity
