import React from 'react'
import {useStyletron} from 'baseui'
import {LabelLarge} from 'baseui/typography'
import InputText from '../inputText/inputText.component'
import Slider from '../slider/slider.component'
import {InputSliderProps} from './inputSlider.types'
import {ColumnWrapper, InputContainer, RowWrapper} from './inputSlider.styles'

const InputSlider = ({
	label,
	value,
	onChange,
	unit,
	step,
	max,
}: InputSliderProps) => {
	const [css, theme] = useStyletron()

	return (
		<ColumnWrapper>
			<RowWrapper>
				<LabelLarge color={theme.colors.colorSecondary}>
					{label.toUpperCase()}
				</LabelLarge>
				<InputContainer>
					<InputText value={value[0]} max={max} onChange={onChange} />
					{unit}
				</InputContainer>
			</RowWrapper>
			<Slider
				value={value}
				min={0}
				max={max}
				step={step || 100}
				onChangeValue={onChange}
			/>
		</ColumnWrapper>
	)
}

export default InputSlider
