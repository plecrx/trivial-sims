import {useEffect, useState} from 'react'
import {FormControl} from 'baseui/form-control'
import {Select, TYPE, Value} from 'baseui/select'
import {InputCityContainer} from './form.styles'
import {FormInputCityProps} from './form.types'

const FormInputCity = ({onSelectChange, city}: FormInputCityProps) => {
	const [selectValue, setSelectValue] = useState<Value>(city)
	const [inputValue, setInputValue] = useState<string>('')
	const [cityOptions, setCityOptions] = useState<
		{nom: string; code: number; _score: number}[]
	>([])

	useEffect(() => {
		setInputValue((city && city[0].nom) || '')
	}, [city])

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
		<InputCityContainer>
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
		</InputCityContainer>
	)
}

export default FormInputCity
