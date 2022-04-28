export type SliderProps = {
	min: number
	max: number
	step: number
	value: number[]
	onChangeValue: (value: number[]) => void
}
