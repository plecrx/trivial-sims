import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {FormControl} from 'baseui/form-control'
import {Select, TYPE, Value} from 'baseui/select'
import {useEffect, useState} from 'react'

const Container = styled(Block)`
	display: flex;
	flex-direction: column;
	margin: 1em 0;
	gap: 1em;
`

type FormInputCityProps = {
	city: {nom: string; code: number; _score: number}[]
	onSelectChange: (selectValue: any) => void
}

const FormInputCity = ({onSelectChange, city}: FormInputCityProps) => {
	const [selectValue, setSelectValue] = useState<Value>(city)
	const [inputValue, setInputValue] = useState<string>('')
	const [cityOptions, setCityOptions] = useState<
		{nom: string; code: number; _score: number}[]
	>([])

	useEffect(() => {
		setInputValue(selectValue[0].nom)
	}, [city, selectValue])

	useEffect(() => {
		fetch(`https://geo.api.gouv.fr/communes?nom=${inputValue}&fields=nom&limit=5`)
			.then(async res => setCityOptions(await res.json()))
			.catch(error => console.log(error))
	}, [inputValue])

	const handleSelectChange = (value: Value) => {
		setSelectValue(value)
		onSelectChange(value)
	}

	return (
		<Container>
			<FormControl>
				<Select
					value={selectValue}
					onInputChange={event => setInputValue(event.currentTarget.value)}
					onChange={({value}) => handleSelectChange(value)}
					options={cityOptions}
					type={TYPE.search}
					valueKey='nom'
					labelKey='nom'
					clearable={false}
				/>
			</FormControl>
		</Container>
	)
}

export default FormInputCity
