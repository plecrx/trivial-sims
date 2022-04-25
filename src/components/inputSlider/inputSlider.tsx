import styled from '@emotion/styled'
import {LabelLarge} from 'baseui/typography'
import InputText from '../inputText/inputText.component'
import Slider from '../Slider/Slider'
import React from 'react'
import {useStyletron} from 'baseui'
import {isNumeric} from '../../utils/isNumeric'

const ColumnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 24px;
`

const RowWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	-moz-box-align: center;
	align-items: center;
	-moz-box-pack: justify;
  gap: 160px;
`

const InputContainer = styled.div`
	display: inline-flex;
	align-items: center;
`

type InputSliderProps = {
	label: string
	value: number[]
	onChange: (value: number[]) => void
	step?: number
	unit: string
	max: number
}

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
