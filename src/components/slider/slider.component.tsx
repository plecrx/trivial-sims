import React from 'react'
import {Slider as BaseWebSlider} from 'baseui/slider'
import {SliderProps} from './slider.types'

const Slider = ({min, max, step, value, onChangeValue}: SliderProps) => {
	return (
		<BaseWebSlider
			value={value}
			min={min}
			max={max}
			step={step}
			onChange={({value}) => onChangeValue(value)}
			overrides={{
				InnerThumb: () => null,
				ThumbValue: () => null,
				TickBar: {
					style: () => ({display: `none`}),
				},
			}}
		/>
	)
}

export default Slider
