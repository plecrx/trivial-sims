import {Button, SHAPE} from 'baseui/button'
import {ArrowRight} from 'baseui/icon'

type FormActionNextProps = {
	action: () => void
	isDisabled: boolean
}

const FormActionNext = ({action, isDisabled}: FormActionNextProps) => {
	return (
		<Button
			disabled={isDisabled}
			shape={SHAPE.pill}
			onClick={() => action()}
			endEnhancer={() => <ArrowRight size={24} />}
			overrides={{
				BaseButton: {
					style: ({$theme}) => ({
						backgroundColor: $theme.colors.backgroundAlwaysDark,
						color: $theme.colors.primaryB,
						':disabled': {
							backgroundColor: $theme.colors.backgroundOverlayLight,
							color: $theme.colors.primary500,
						},
					}),
				},
			}}
		>
			Valider
		</Button>
	)
}

export default FormActionNext
