export type InputSliderProps = {
	label: string
	value: number[]
	onChange: (value: number[]) => void
	step?: number
	unit: string
	max: number
}
